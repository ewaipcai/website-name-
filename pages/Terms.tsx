
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Terms of Conditions</h1>
      <div className="prose prose-slate max-w-none text-slate-600">
        <p className="mb-4">Welcome to BrandSphere AI.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Use of Tool</h2>
        <p>Our business name generator is provided as-is for inspiration and creative brainstorming. While our AI attempts to provide unique names, we cannot guarantee that any suggested name is legally available for use, trademarked, or has an available domain.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">2. Responsibility</h2>
        <p>Users are solely responsible for conducting their own legal and trademark research before naming their business. BrandSphere AI holds no liability for legal disputes arising from the use of names generated on this platform.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Prohibited Content</h2>
        <p>Users may not use our tool to generate names for illegal, harmful, or abusive purposes. We reserve the right to block access to users who abuse our API resources.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Monetization</h2>
        <p>This site contains affiliate links and advertisements. We may receive commissions for purchases made through these links at no additional cost to you.</p>
      </div>
    </div>
  );
};

export default Terms;
