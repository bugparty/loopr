export default {
  navbar: {
    home: "首页",
    trade: "交易",
    wallet: "钱包",
    settings: "设置",
    portfolio: "投资组合",
    account: "账户",
    subs: {
      copy: '复制',
      copy_success: '复制地址成功',
      copy_failed: '复制地址失败',
      unlock: '解锁钱包',
      generate: '生成钱包',
      help: '帮助',
      tools: '工具',
      qrcode: '二维码',
      airdrop: '空投',
      quit: '退出',
    },
  },
  order: {
    buy: '买',
    sell: '卖',
    receive: '接收',
    convert: "转换",
    buying: "您正在购买",
    selling: "您正在出售",
    lrcfee: "订单交易费",
    margin: "分润比例",
    since: "订单生效时间",
    till: "订单失效时间",
    sign: "签名信息",
    raw: "未签名的订单",
    signed: "签名的订单",
    place_tip: "提交订单是免费的，不需要消耗gas",
    place_success: "下单成功!",
    place_success_tip: '恭喜, 您的订单已经可以等待交易',
    place_warn: '为了保证您的订单可以被撮合. 您需要做以下事项:',
    balance_not_enough: '{token} 余额不足',
    submit: "提交订单"
  },
  ticker: {
    last: '最新价',
    change: '涨跌',
    low: '最高价',
    high: '最低价',
    vol: '成交量',
    market: '市场',
    favorites: '自选',
  },
  exchanges: {
    loopr: '路印 DEX',
    binance: '币安',
    okex: 'Okex',
    huobi: '火币',
  },
  home: {
    title: '路印钱包及去中心化交易所',
    subtitle: '安全高流动性的交易你的代币',
  },
  buttons: {
    unlock_wallet: '解锁钱包',
    generate_wallet: '生成钱包',
  },
  tabs: {
    my_open_orders: '我的当前订单',
    my_recent_trades: '我的历史成交',
    my_assets: '我的资产',
    my_orders: '我的订单',
    my_trades: '历史成交',
  },
  txs: {
    title: '交易',
    status: '状态',
    status_pending: '交易处理中',
    status_success: '交易成功',
    status_failed: '交易失败',
    type: '类型',
    type_transfer: '转账',
    type_convert: '转换',
    type_convert_title_eth: 'ETH 转换为 WETH',
    type_convert_title_weth: 'WETH 转换为 ETH',
    type_receive: '收款',
    type_enable: '启用',
  },
  orders: {
    market: '市场',
    status: '状态',
    status_opened: '当前订单',
    status_completed: '已成交订单',
    status_canceled: '已取消订单',
    status_expired: '已过期订单',
    side: '方向',
    side_sell: '卖',
    side_buy: '买',
    create_time: '提交时间',
    update_time: '更新时间',
    amount: '数量',
    price: '价格',
    total: '金额',
    LrcFee: 'Lrc撮合费',
    filled: '成交率',
  },
  global: {
    all: '全部',
    market: '市场',
    options: '操作',
  },
  settings: {
    preference: "偏好",
    trade: "交易",
    relay: "中继",
    language: "语言",
    currency: "货币",
    timezone: "时区",
    reset: "重置",
    contract: "合约版本",
    ttl: "有效期",
    ttl_tip: "请输入合法的整数",
    lrcfee: "订单费",
    margin: "分润比例",
    gasPrice: "Gas价格",
    slow: "慢",
    fast: "快",
    edit: "编辑",
    save: "保存",
    delete: "删除",
    addRelay: "添加中继",
    editRelay: "编辑中继",
    chooseRelay: "选择中继",
    relayName: "中继名称",
    relayUrl: "中继URL地址",
    relayName_tip: "请输入合法，不同的中继名称",
    relayUrl_tip: "请输入合法的URL地址"

  },
  trade: {
    orderForm: "订单信息",
    sell: "卖出",
    buy: "买入",
    balance: "余额",
    price: "单价",
    price_verification_message: "请输入合法的单价",
    amount: "数量",
    amount_verification_message: "请输入合法的数量",
    available_amount: "有效数量",
    total: "总计",
    advanced: "高级选项",
    time_to_live: "有效时间",
    more: "更多",
    popular_option: "常用选项",
    integer_verification_message: "请输入数字类型",
    second: "秒",
    minute: "分钟",
    hour: "小时",
    day: "天",
    week: "周",
    month: "月",
    lrc_fee: "Lrc 手续费",
    margin_split: "分润比例",
    place_order: "提交订单",
    unlock_your_wallet: "解锁你的钱包",
    to_trade: "去交易",
    lrcFee_increased: "通过您的设定，您当前订单需要支付的lrcFee 是 {userSet}LRC, 我们自动增加至下单允许最小的值: {increased}LRC, 您是否继续下单?",
    notice: "请注意",
    placing_order: '订单提交结果',
    place_order_failed: "订单提交失败 !",
    you_should_do_things: "你可以按以下提示尝试",
    why: "为什么",
    balance_not_enough: '{token} 余额不足, 还需要 {required}',
    receive: '去收款',
    to_buy: '去购买'
  },
  token: {
    convert_title: "转换",
    amount: "数量",
    amount_verification_message: "请输入合法的数量",
    convert_max: "最大数量",
    min_gas_remain_warn: "我们为您保留0.1 ETH作为油费以保证后续可以发送交易",
    no_eth_balance_warn: "您将没有足够的ETH作为油费发送交易",
    convert_confirm: "是的，马上转换！",
    send_title: "发送",
    result_failed: "您{do} {amount} {token} 失败, 原因:{reason}",
    completed: "完成",
    result_success: "您{do} {amount} {token} 成功",
    view_transaction: '通过Etherscan查看交易',
    send_again: '继续转账',
    convert_again: '继续转换',
    ethereum_address:"我的以太坊地址",
    copy:"复制",
    copy_success:"复制成功",
    copy_failed:"复制失败"
  },
  wallet: {
    bind_tip: "绑定空投接收地址",
    bind_type: "类型",
    address: "地址",
    type_tip: "请选择要绑定的类型",
    address_tip: "请粘贴您要绑定的地址",
    bind_address: "绑定地址",
    unlock_tip: "您将怎么样解锁使用钱包",
    metamask: "MetaMask 钱包",
    trezor: "Trezor 钱包",
    ledger: "Ledger 钱包",
    keystore: "Keystore 文件",
    privateKey: "私钥",
    mnemonic: "助记词",
    no_wallet: "暂时没有钱包，让我们来",
    generate_one: "创建一个"
  },


}

