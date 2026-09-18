import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="section min-h-[60vh] flex-center">
      <div className="container text-center max-w-md">
        <div className="text-6xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-100 mb-3">
          页面不存在
        </h1>
        <p className="text-slate-400 mb-6">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link to="/" className="btn btn-primary">
          返回首页
        </Link>
      </div>
    </section>
  );
}
