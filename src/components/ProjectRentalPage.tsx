import CraneCard from './CraneCard';

export default function ProjectRentalPage() {
  const projectCranes = [
    {
      id: 1,
      name: 'ونش برجي 100 طن - للمشاريع الضخمة',
      image: 'https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 100 طن',
        'ارتفاع الرفع: 100 متر',
        'نطاق العمل: 70 متر',
        'مناسب للأبراج والمباني الشاهقة',
        'صيانة شاملة كل أسبوعين',
        'تركيب وفك احترافي'
      ],
      price: '120,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    },
    {
      id: 2,
      name: 'ونش برجي 60 طن - مشاريع متوسطة',
      image: 'https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 60 طن',
        'ارتفاع الرفع: 65 متر',
        'نطاق العمل: 55 متر',
        'للمباني السكنية والتجارية',
        'صيانة دورية شهرية',
        'فريق دعم فني مخصص'
      ],
      price: '85,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    },
    {
      id: 3,
      name: 'ونش متحرك 80 طن - مرونة عالية',
      image: 'https://images.unsplash.com/photo-1738676455943-1ceba4d60ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcmFuZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkzMDg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 80 طن',
        'ارتفاع الرفع: 70 متر',
        'نطاق العمل: 55 متر',
        'سهل التنقل بين المواقع',
        'مع طاقم كامل',
        'مناسب للمشاريع متعددة المواقع'
      ],
      price: '95,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    },
    {
      id: 4,
      name: 'ونش برجي 120 طن - للمشاريع الخاصة',
      image: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZXxlbnwxfHx8fDE3NTkzMDg1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 120 طن',
        'ارتفاع الرفع: 120 متر',
        'نطاق العمل: 80 متر',
        'أحدث طراز 2024',
        'للمشاريع الحكومية والخاصة الكبرى',
        'دعم فني على مدار الساعة'
      ],
      price: '150,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    },
    {
      id: 5,
      name: 'ونش متحرك 50 طن - مشاريع صغيرة ومتوسطة',
      image: 'https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGVxdWlwbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTkyMzk0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 50 طن',
        'ارتفاع الرفع: 50 متر',
        'نطاق العمل: 40 متر',
        'مثالي للفيلات والعمارات',
        'صيانة منتظمة',
        'أسعار تنافسية'
      ],
      price: '65,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    },
    {
      id: 6,
      name: 'ونش برجي 40 طن - اقتصادي',
      image: 'https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 40 طن',
        'ارتفاع الرفع: 45 متر',
        'نطاق العمل: 40 متر',
        'حل اقتصادي للمشاريع الصغيرة',
        'كفاءة عالية',
        'صيانة كل شهر'
      ],
      price: '55,000 جنيه',
      priceLabel: 'السعر للشهر الواحد'
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-primary">تأجير الأوناش بالتسكين</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            حلول طويلة الأمد للمشاريع الكبرى والمتوسطة. نوفر لكم الأوناش مع الصيانة الشاملة والدعم الفني المستمر 
            طوال فترة المشروع بأسعار تنافسية.
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
          <h3 className="mb-6 text-center text-primary-foreground">مزايا التعاقد طويل الأمد</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent">%</span>
              </div>
              <p className="text-sm">خصومات تصل إلى 20%</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent">🔧</span>
              </div>
              <p className="text-sm">صيانة دورية مجانية</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent">📞</span>
              </div>
              <p className="text-sm">دعم فني 24/7</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent">✓</span>
              </div>
              <p className="text-sm">استبدال فوري عند الأعطال</p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-12">
          <h3 className="mb-6 text-center text-primary">خطط الأسعار حسب المدة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6">
              <h4 className="mb-2 text-primary">3 أشهر</h4>
              <p className="text-sm text-muted-foreground mb-2">خصم 10%</p>
              <p className="text-accent">الأنسب للمشاريع المتوسطة</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-accent">
              <div className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full inline-block mb-2">
                الأكثر شعبية
              </div>
              <h4 className="mb-2 text-primary">6 أشهر</h4>
              <p className="text-sm text-muted-foreground mb-2">خصم 15%</p>
              <p className="text-accent">القيمة الأفضل</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="mb-2 text-primary">سنة</h4>
              <p className="text-sm text-muted-foreground mb-2">خصم 20%</p>
              <p className="text-accent">للمشاريع طويلة الأمد</p>
            </div>
          </div>
        </div>

        {/* Cranes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCranes.map((crane) => (
            <CraneCard
              key={crane.id}
              name={crane.name}
              image={crane.image}
              specs={crane.specs}
              price={crane.price}
              priceLabel={crane.priceLabel}
            />
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 bg-gradient-to-l from-primary to-secondary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="mb-4 text-primary-foreground">حلول مخصصة لمشروعك</h3>
          <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
            لدينا خبراء متخصصون لدراسة احتياجات مشروعك وتقديم أفضل الحلول والعروض المخصصة التي تناسب ميزانيتك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+201234567890">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                احصل على عرض سعر مخصص
              </button>
            </a>
            <a href="mailto:info@ellaithy-equipment.com">
              <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors">
                راسلنا للاستشارة
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
