import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 会员中心页面
 */
export default function MemberCenterPage() {
  const navigate = useNavigate()
  const [showQrCode, setShowQrCode] = useState(false)

  // 模拟会员数据（实际应从后端获取）
  const [memberData] = useState({
    name: '张三',
    phone: '138****8888',
    status: 'active',
    cardType: 'card95', // card98, card95, card88
    startDate: '2026-06-23',
    endDate: '2026-07-24',
    daysRemaining: 30,
    autoRenew: true
  })

  // 会员卡信息
  const cardInfo = {
    card98: { name: '98 卡', discount: '98 折', color: 'from-blue-500 to-blue-400' },
    card95: { name: '95 卡', discount: '95 折', color: 'from-primary-600 to-primary-500' },
    card88: { name: '88 卡', discount: '88 折', color: 'from-purple-600 to-purple-500' }
  }[memberData.cardType as keyof typeof cardInfo] || { name: '95 卡', discount: '95 折', color: 'from-primary-600 to-primary-500' }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 顶部导航栏 - 橙色渐变 */}
      <header className={`bg-gradient-to-r ${cardInfo.color} text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10`}>
        <button
          onClick={() => navigate(-1)}
          className="text-white/80 hover:text-white p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">绘眼宝盒会员中心</h1>
        <button className="p-2 -mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c-4.266 1.22-4.266 12.154 0 13.374m10.35-13.374c4.266-1.22 4.266-12.154 0-13.374m-10.35 6.693l10.35 6.682m0 0l-10.35 6.682m10.35-6.682l-10.35-6.682M4 12a8 8 0 1116 0 8 8 0 01-16 0z" />
          </svg>
        </button>
      </header>

      {/* 主要内容 */}
      <main className="p-4">
        {/* 会员状态卡片 */}
        <section className={`bg-gradient-to-r ${cardInfo.color} rounded-2xl p-6 text-white mb-4 shadow-lg`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white/80 text-sm mb-1">当前会员</p>
              <h2 className="text-2xl font-bold">绘眼宝盒{cardInfo.name}</h2>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-full">
              <span className="font-medium">已生效</span>
            </div>
          </div>

          {/* 折扣信息 */}
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <div className="text-center">
              <p className="text-white/80 text-sm mb-1">当前折扣</p>
              <p className="text-4xl font-bold">{cardInfo.discount}</p>
            </div>
          </div>

          {/* 有效期进度条 */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/80">有效期</span>
              <span className="font-medium">{memberData.daysRemaining} 天</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${((30 - memberData.daysRemaining) / 30) * 100}%` }}
              />
            </div>
          </div>

          {/* 日期信息 */}
          <div className="flex justify-between text-sm text-white/80">
            <span>开通日期：{memberData.startDate}</span>
            <span>到期日期：{memberData.endDate}</span>
          </div>
        </section>

        {/* 会员信息 */}
        <section className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 mb-4">个人信息</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-neutral-100">
              <span className="text-neutral-600">姓名</span>
              <span className="text-neutral-900 font-medium">{memberData.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-neutral-100">
              <span className="text-neutral-600">手机号</span>
              <span className="text-neutral-900 font-medium">{memberData.phone}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-neutral-600">自动续费</span>
              <span className={`font-medium ${memberData.autoRenew ? 'text-primary-600' : 'text-neutral-400'}`}>
                {memberData.autoRenew ? '已开启' : '已关闭'}
              </span>
            </div>
          </div>
        </section>

        {/* 会员码入口 */}
        <section className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <button
            onClick={() => setShowQrCode(true)}
            className="w-full flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-neutral-900 font-medium block">绘眼宝盒会员码</span>
                <span className="text-neutral-400 text-sm">出示二维码进店</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </section>

        {/* 功能列表 */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-neutral-100">
            <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-neutral-700">消费记录</span>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-neutral-700">自动续费管理</span>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span className="text-neutral-700">协议与条款</span>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.657a9 9 0 01-2.829-2.829m0 0A5.002 5.002 0 019.142 12c.964 0 1.937.72 2.673 1.946M2.624 2.624A9 9 0 0112 2c1.207 0 2.412.227 3.534.678" />
                </svg>
                <span className="text-neutral-700">客服中心</span>
              </div>
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* 会员码弹窗 */}
      {showQrCode && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xs">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">绘眼宝盒{cardInfo.name}</h3>
              <p className="text-sm text-neutral-500">请向店员或扫码设备出示</p>
            </div>

            {/* 二维码 */}
            <div className="bg-neutral-100 rounded-xl p-4 mb-6">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
            </div>

            {/* 有效期提示 */}
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>有效期至 {memberData.endDate}</span>
            </div>

            {/* 关闭按钮 */}
            <button
              onClick={() => setShowQrCode(false)}
              className="w-full py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg font-medium transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}