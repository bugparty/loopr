import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import pricesData from '../mocks/prices.json'

class PricesContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      price:0,
      prices:[],
    }
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.currency !== this.props.currency){
      const { socket } = this.context
      const options = {
        "currency":nextProps.currency,
      }
      socket.emit('marketcap_req',JSON.stringify(options))
    }
    return true // to make sure the parent container's render
  }
  getPrice(tokens){
    const { symbol } = this.props
    let price = 0
    if(symbol){
      const token = tokens.find(token=>token.symbol === symbol)
      price = token && token.price
    }
    return price
  }
  componentDidMount() {
    const { socket } = this.context
    if (!socket) {
      console.log('socket connection has not been established')
      return false
    }
    const _this = this
    const options = {
      "currency":this.props.currency,
    }
    socket.emit('marketcap_req',JSON.stringify(options))
    socket.on('marketcap_res', (res)=>{
      console.log('marketcap_res')
      res = JSON.parse(res)
      const price = _this.getPrice(res.tokens)
      this.setState({
        price,
        prices:res.tokens,
      })
    })
  }
  componentWillUnmount() {
    const { socket } = this.context
    if (!socket) {
      console.log('socket connection has not been established')
      return false
    }
    console.log('price unmount')
    socket.off('marketcap_res')
  }
  getTokenBySymbol(symbol){
    return this.state.prices.find(item => item.symbol.toLowerCase() === symbol.toLowerCase() ) || {}
  }
  render() {
    const {children,...rest} = this.props
    const childProps = {
      ...rest,
      prices:{
        data:this.state.prices,
        getTokenBySymbol:this.getTokenBySymbol.bind(this)
      }
    }
    const {render} = this.props
    if(render){
      return render.call(this,childProps)
    }
    return (
      <div>
         {
           React.Children.map(this.props.children, child => {
               return React.cloneElement(child, {...childProps})
           })
         }
      </div>
    )
  }
}
PricesContainer.contextTypes = {
  socket: PropTypes.object.isRequired
};
export default connect(({settings})=>({currency:settings.preference.currency}))(PricesContainer)
