import { Search, Globe, ShieldCheck, Truck } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-middle-east-green">ME-BTC</h1>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-middle-east-gold transition-colors">所有分类</a>
              <a href="#" className="hover:text-middle-east-gold transition-colors">今日行情</a>
              <a href="#" className="hover:text-middle-east-gold transition-colors">优质供应商</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-middle-east-gold">登录</button>
            <button className="bg-middle-east-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all">
              免费注册
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">连接中东，贸易全球</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            专注于沙特、阿联酋及海湾地区的专业 B2B 跨境交易平台
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="搜索产品或供应商..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-lg focus:ring-2 focus:ring-middle-east-gold"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck className="w-8 h-8 text-middle-east-gold" />, title: "安全支付", desc: "符合伊斯兰教法的第三方担保交易" },
          { icon: <Truck className="w-8 h-8 text-middle-east-gold" />, title: "极速物流", desc: "集成海湾地区核心港口清关引擎" },
          { icon: <Globe className="w-8 h-8 text-middle-east-gold" />, title: "本地化运营", desc: "全站阿拉伯语支持及 RTL 布局" }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-2xl border hover:shadow-xl transition-all text-center">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">关于我们</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>平台简介</li>
              <li>联系我们</li>
              <li>服务条款</li>
            </ul>
          </div>
          {/* ... Other columns */}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 ME-BTC. 版权所有.
        </div>
      </footer>
    </main>
  )
}
finish view
