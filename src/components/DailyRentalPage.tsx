import CraneCard from './CraneCard';

export default function DailyRentalPage() {
  const dailyCranes = [
    {
      id: 1,
      name: 'ونش متحرك 25 طن',
      image: 'https://images.unsplash.com/photo-1738676455943-1ceba4d60ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcmFuZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkzMDg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 25 طن',
        'ارتفاع الرفع: 30 متر',
        'نطاق العمل: 25 متر',
        'موديل حديث 2023',
        'مع طاقم تشغيل متخصص'
      ],
      price: '3,500 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    },
    {
      id: 2,
      name: 'ونش برجي 50 طن',
      image: 'https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 50 طن',
        'ارتفاع الرفع: 60 متر',
        'نطاق العمل: 50 متر',
        'مناسب للمباني العالية',
        'صيانة دورية منتظمة'
      ],
      price: '6,000 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    },
    {
      id: 3,
      name: 'ونش متحرك 40 طن',
      image: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZXxlbnwxfHx8fDE3NTkzMDg1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 40 طن',
        'ارتفاع الرفع: 45 متر',
        'نطاق العمل: 35 متر',
        'موديل 2022',
        'مع سائق وعامل تشغيل'
      ],
      price: '5,000 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    },
    {
      id: 4,
      name: 'ونش صغير 15 طن',
      image: 'https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGVxdWlwbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTkyMzk0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 15 طن',
        'ارتفاع الرفع: 20 متر',
        'نطاق العمل: 18 متر',
        'مثالي للأعمال الصغيرة',
        'سهل التشغيل والنقل'
      ],
      price: '2,500 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    },
    {
      id: 5,
      name: 'ونش برجي 80 طن',
      image: 'https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 80 طن',
        'ارتفاع الرفع: 80 متر',
        'نطاق العمل: 60 متر',
        'للمشاريع الضخمة',
        'أحدث التقنيات'
      ],
      price: '9,000 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    },
    {
      id: 6,
      name: 'ونش متحرك 60 طن',
      image: 'https://images.unsplash.com/photo-1738676455943-1ceba4d60ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcmFuZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkzMDg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'الحمولة القصوى: 60 طن',
        'ارتفاع الرفع: 55 متر',
        'نطاق العمل: 45 متر',
        'موديل 2024',
        'كفاءة عالية في الأداء'
      ],
      price: '7,500 جنيه',
      priceLabel: 'السعر لليوم الواحد'
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-primary">تأجير الأوناش باليوم</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نوفر لكم مجموعة متنوعة من الأوناش للإيجار اليومي بأسعار تنافسية وجودة عالية. 
            جميع معداتنا خضعت للصيانة الدورية وجاهزة للعمل الفوري.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-accent mb-1">✓</p>
              <p className="text-sm text-foreground">جميع الأسعار شاملة السائق والوقود</p>
            </div>
            <div>
              <p className="text-accent mb-1">✓</p>
              <p className="text-sm text-foreground">خصومات خاصة للحجوزات طويلة المدى</p>
            </div>
            <div>
              <p className="text-accent mb-1">✓</p>
              <p className="text-sm text-foreground">دعم فني متاح 24/7</p>
            </div>
          </div>
        </div>

        {/* Cranes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dailyCranes.map((crane) => (
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

        {/* Contact Footer */}
        <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
          <h3 className="mb-3 text-primary">لم تجد ما تبحث عنه؟</h3>
          <p className="text-muted-foreground mb-6">
            اتصل بنا مباشرة وسنساعدك في إيجاد المعدة المناسبة لاحتياجاتك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+201234567890" className="inline-block">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                اتصل بنا الآن: 0123 456 7890
              </button>
            </a>
            <a href="tel:+201098765432" className="inline-block">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                خط إضافي: 0109 876 5432
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
