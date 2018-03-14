import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button,Form,Radio,Input,Tabs,Card,Badge,Icon } from 'antd';
import UnlockByMetaMask from './UnlockByMetaMask'
import UnlockByKeystore from './UnlockByKeystore'
import UnlockByMnemonic from './UnlockByMnemonic'
import UnlockByPrivateKey from './UnlockByPrivateKey'
import UnlockByTrezor from './UnlockByTrezor'
import UnlockByLedger from './UnlockByLedger'

function UnlockWallet({form,modal,account}) {
  const gotoGenerate = ()=>{
    modal.hideModal({id:'wallet/unlock'})
    modal.showModal({id:'wallet/generate'})
  }
  const footer = (
    <div className="fs14 mt20 pt20 color-grey-900 zb-b-t text-left">
      Don't have a Wallet? Let's
      <a className="color-blue-600 ml5" onClick={gotoGenerate}>
      generate one !
      </a>
    </div>
  )
  return (
    <Card title={<div className="fs20">How would you like to access your wallet?</div>}>
        <div>
          <Tabs defaultActiveKey="metamask" tabPosition="left" animated={true} style={{marginTop:'15px'}}>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">MetaMask</div>} key="metamask">
              <UnlockByMetaMask modal={modal} account={account}/>
            </Tabs.TabPane>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">Trezor</div>} key="trezor">
              <UnlockByTrezor modal={modal} account={account}/>
            </Tabs.TabPane>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">Ledger</div>} key="ledger">
              <UnlockByLedger modal={modal} account={account}/>
            </Tabs.TabPane>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">Keystore JSON File</div>} key="keystore">
             <UnlockByKeystore modal={modal} account={account} />
            </Tabs.TabPane>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">Mnemonic</div>} key="mnemonic">
              <UnlockByMnemonic modal={modal} account={account}/>
            </Tabs.TabPane>
            <Tabs.TabPane className="pl10" tab={<div style={{marginLeft:'-24px'}} className="fs16 text-left">Private Key</div>} key="privatekey">
             <UnlockByPrivateKey modal={modal} account={account}/>
            </Tabs.TabPane>
          </Tabs>
          {footer}
        </div>
        <div hidden>
          <Form layout="horizontal"className="d-flex flex-column preference-form">
            <Form.Item label="How would you like to access your wallet" colon={false}>
              {form.getFieldDecorator('way', {
                initialValue:'metamask',
                rules:[]
              })(
                <Radio.Group className="">
                  <Radio className="d-flex align-items-center mb15 w-100" value={'metamask'}>
                    MetaMask <Button type="primary" className="bg-green-600 border-none ml10" size="small" icon="like">Recommended</Button>
                  </Radio>
                  <Radio className="d-flex align-items-center mb15 w-100" value={'keystore'}>
                     Keystore / JSON File
                  </Radio>
                  <Radio className="d-flex align-items-center mb15 w-100" value={'mnemonic'}>
                    Mnemonic
                  </Radio>
                  <Radio className="d-flex align-items-center mb15 w-100" value={'privatekey'}>
                     Private Key
                  </Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {footer}
          </Form>
        </div>
    </Card>
  )
}

export default Form.create()(UnlockWallet)
