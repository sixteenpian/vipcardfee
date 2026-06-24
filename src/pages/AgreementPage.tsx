import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 会员服务协议页面
 */
export default function AgreementPage() {
  const navigate = useNavigate()
  const [showFullContent, setShowFullContent] = useState(false)

  const agreementContent = `会员服务协议

重要提示：本协议是您（以下简称"会员"）与本商店（以下简称"商家"）之间关于会员服务的法律协议。请您仔细阅读本协议内容，特别是加粗显示的条款。

一、会员服务内容
1.1 商家通过无人商店的形式为会员提供商品/服务。

1.2 会员可享受的权益包括但不限于：
- 24 小时无障碍进店购物
- 会员专属商品及优惠价格
- 会员专属活动参与资格
- 积分累积及兑换服务

二、会员资格
2.1 会员资格自用户成功注册并支付首期会员费后生效。

2.2 会员资格有效期根据用户选择的订阅周期确定：
- 月付会员：30 天
- 季付会员：90 天
- 年付会员：365 天

2.3 **会员资格仅限本人使用，不得转借、转让或出售给他人。**

三、会员费及续费
3.1 会员费标准：
- 月付：5 元/月
- 季付：15 元/季
- 年付：60 元/年

3.2 如用户开通了自动续费功能，将在会员期满时自动扣除下一期会员费。

3.3 **用户可随时取消自动续费，取消后当前会员期结束后不再扣费。**

四、用户行为规范
4.1 会员在使用无人商店服务时，应遵守公共秩序，爱护店内设施。

4.2 **禁止以下行为：**
- 故意损坏店内设备或商品
- 未经付款带走商品（盗窃行为）
- 带陌生人进入商店
- 在店内进行违法活动

4.3 如发现会员有上述违规行为，商家有权立即终止其会员资格，并保留追究法律责任的权利。

五、隐私保护
5.1 商家承诺对会员的个人信息严格保密，仅用于提供会员服务之目的。

5.2 商家不会将会员信息泄露给任何第三方，法律法规另有规定的除外。

六、服务变更与终止
6.1 商家有权根据运营需要调整服务内容、营业时间或关闭特定门店，但将提前公告通知。

6.2 如因不可抗力导致服务中断，商家不承担赔偿责任，但将尽力恢复服务。

6.3 会员可随时申请退订会员服务，但未使用的会员期不予退款，除非法律法规另有规定。

七、免责声明
7.1 商家已采取合理措施保障无人商店内的商品质量和服务安全，但会员在店内期间应注意自身安全，妥善保管个人财物。

7.2 **因会员自身原因（包括但不限于滑倒、碰撞等）造成的人身伤害或财产损失，商家不承担责任。**

八、其他
8.1 本协议自会员勾选"同意"并进入下一步时生效。

8.2 本协议的解释、效力及纠纷的解决，适用中华人民共和国法律。

8.3 如本协议任何条款被认定为无效或不可执行，不影响其他条款的效力。

8.4 商家保留对本协议的最终解释权。

客服电话：400-XXX-XXXX
客服时间：每日 9:00-21:00
商家地址：XXX 市 XXX 区 XXX 路 XXX 号`

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
        <h1 className="text-lg font-semibold text-neutral-900">会员服务协议</h1>
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