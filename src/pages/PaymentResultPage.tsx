import { useNavigate, useLocation } from 'react-router-dom'

/**
 * 支付结果页面
 */
export default function PaymentResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { success = true, amount = 5, paymentMethod = 'wechat', planType = 'card95' } = location.state || {}

  // 会员卡信息
  const planInfo = {
    card98: { name: '98 卡', discount: '98 折' },
    card95: { name: '95 卡', discount: '95 折' },
    card88: { name: '88 卡', discount: '88 折' }
  }[planType] || { name: '95 卡', discount: '95 折' }

  const handleComplete = () => {
    if (success) {
      localStorage.removeItem('memberRegistration')
      navigate('/member-center', { replace: true })
    } else {
      navigate(-1)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        {/* 成功图标 - 橙色 */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">支付成功</h1>
        <p className="text-neutral-500 mb-2">您已成功开通</p>
        <p className="text-xl font-semibold text-primary-600 mb-1">绘眼宝盒{planInfo.name}</p>
        <p className="text-sm text-neutral-500 mb-8">商品享{planInfo.discount}优惠</p>

        {/* 支付信息 */}
        <div className="bg-neutral-50 rounded-xl p-6 w-full max-w-sm mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-neutral-600">支付金额</span>
            <span className="text-xl font-bold text-neutral-900">¥{amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">支付方式</span>
            <span className="text-neutral-900">
              {paymentMethod === 'wechat' ? '微信支付' : '支付宝'}
            </span>
          </div>
        </div>

        {/* 会员信息卡片 - 橙色渐变 */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-6 w-full max-w-sm mb-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-primary-100">会员状态</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              已生效
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-primary-100">有效期</span>
              <span className="font-medium">30 天</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-100">商品折扣</span>
              <span className="font-medium">{planInfo.discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-100">到期时间</span>
              <span className="font-medium">2026-07-24</span>
            </div>
          </div>
        </div>

        {/* 按钮 - 橙色 */}
        <button
          onClick={handleComplete}
          className="w-full max-w-sm py-3.5 px-4 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-lg font-medium text-base transition-colors"
        >
          查看绘眼宝盒会员卡
        </button>
      </div>
    )
  }

  // 支付失败页面
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* 失败图标 - 灰色 */}
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center">
          <svg className="w-12 h-12 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      {/* 标题 */}
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">支付失败</h1>
      <p className="text-neutral-500 mb-4">支付过程中出现问题</p>
      <p className="text-neutral-500 text-sm mb-8">请检查网络或更换支付方式后重试</p>

      {/* 按钮 - 橙色 */}
      <button
        onClick={handleComplete}
        className="w-full max-w-sm py-3.5 px-4 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-lg font-medium text-base transition-colors"
      >
        重新支付
      </button>

      <button
        onClick={() => navigate('/')}
        className="w-full max-w-sm py-3.5 px-4 mt-3 text-neutral-600 hover:text-neutral-900 font-medium text-base"
      >
        返回首页
      </button>
    </div>
  )
}