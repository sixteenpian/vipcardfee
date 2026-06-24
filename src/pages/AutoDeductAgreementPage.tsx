import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 自动扣费协议页面
 */
export default function AutoDeductAgreementPage() {
  const navigate = useNavigate()
  const [showFullContent, setShowFullContent] = useState(false)

  const agreementContent = `委托扣费协议

重要提示：本协议是您（以下简称"会员"）与本商店（以下简称"商家"）之间关于会员费自动扣费服务的法律协议。请您仔细阅读本协议内容，特别是加粗显示的条款。

一、服务内容
1.1 自动扣费服务是指会员授权商家在会员订阅期满时，按照会员选择的订阅周期和 corresponding 费用，通过微信支付/支付宝自动从会员账户扣除下一期会员费的服务。

1.2 会员费标准：
- 月付会员：5 元/月
- 季付会员：15 元/季（相当于 5 元/月）
- 年付会员：60 元/年（相当于 5 元/月）

二、扣费规则
2.1 扣费时间：商家将在会员订阅期满前 24 小时内发起扣费。

2.2 扣费方式：通过微信支付或支付宝的委托扣费功能，从会员绑定的支付账户中自动扣除。

2.3 **如扣费失败，会员将有 3 天的补缴期，补缴期内会员服务不受影响。补缴期结束后仍未成功扣费的，会员服务将暂停。**

三、会员权利
3.1 会员有权随时查看自己的订阅状态、扣费记录和会员有效期。

3.2 **会员可随时取消自动扣费服务，取消后当前订阅期结束后不再自动续费。**

3.3 会员如对扣费有异议，可联系商家客服进行查询和申诉。

四、隐私保护
4.1 商家承诺对会员的个人信息和支付信息严格保密，仅用于提供会员服务之目的。

4.2 商家不会将会员信息泄露给任何第三方，法律法规另有规定的除外。

五、协议变更
5.1 商家有权根据运营需要调整会员费标准，但将提前 30 天通知会员。

5.2 如会员不同意调整后的费用，可在调整生效前取消自动扣费服务。

六、其他
6.1 本协议自会员勾选"同意"并进入下一步时生效。

6.2 本协议的解释、效力及纠纷的解决，适用中华人民共和国法律。

6.3 如本协议任何条款被认定为无效或不可执行，不影响其他条款的效力。

客服电话：400-XXX-XXXX
客服时间：每日 9:00-21:00`

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-neutral-600 hover:text-neutral-900 p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-neutral-900">自动扣费协议</h1>
        <div className="w-10" />
      </header>

      {/* 协议内容区域 */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className={`flex-1 overflow-y-auto px-4 py-4 ${showFullContent ? '' : 'max-h-96'}`}>
          <div className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-serif">
            {agreementContent}
          </div>
        </div>

        {!showFullContent && (
          <div className="px-4 pb-2 sticky bottom-0 bg-white border-t border-neutral-100 pt-2">
            <button
              onClick={() => setShowFullContent(true)}
              className="w-full text-primary-600 text-sm font-medium py-2"
            >
              展开阅读全文
            </button>
          </div>
        )}
      </main>
    </div>
  )
}