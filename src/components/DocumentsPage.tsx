import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { FileText, Download, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: 'السجل التجاري',
      description: 'سجل تجاري ساري المفعول رقم: 123456',
      date: 'صادر في: يناير 2020',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'البطاقة الضريبية',
      description: 'بطاقة ضريبية سارية رقم: 789-012-345',
      date: 'صادرة في: فبراير 2020',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'شهادة عضوية غرفة التجارة',
      description: 'عضوية فعالة بغرفة التجارة والصناعة',
      date: 'محدثة: يناير 2025',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'تراخيص المعدات',
      description: 'تراخيص سارية لجميع المعدات والأوناش',
      date: 'محدثة بشكل دوري',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'شهادات الفحص الفني',
      description: 'شهادات فحص فني معتمدة لجميع الأوناش',
      date: 'محدثة شهرياً',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'وثائق التأمين',
      description: 'بوليصة تأمين شاملة على جميع المعدات',
      date: 'سارية حتى: ديسمبر 2025',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50cyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTMwODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const certifications = [
    'شهادة ISO 9001 لإدارة الجودة',
    'شهادة السلامة والصحة المهنية',
    'شهادة الفحص الدوري من الجهات المعتمدة',
    'شهادة التأمين الشامل على المعدات'
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-primary">المستندات والأوراق الرسمية</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نلتزم بالشفافية الكاملة مع عملائنا. جميع مستندات الشركة وتراخيص المعدات محدثة وسارية المفعول
          </p>
        </div>

        {/* Trust Banner */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h4 className="mb-2 text-primary-foreground">موثوق</h4>
              <p className="text-sm text-primary-foreground/80">مسجلة رسمياً</p>
            </div>
            <div>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="mb-2 text-primary-foreground">معتمدة</h4>
              <p className="text-sm text-primary-foreground/80">شهادات دولية</p>
            </div>
            <div>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h4 className="mb-2 text-primary-foreground">شفافة</h4>
              <p className="text-sm text-primary-foreground/80">مستندات واضحة</p>
            </div>
            <div>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="w-8 h-8 text-accent" />
              </div>
              <h4 className="mb-2 text-primary-foreground">متاحة</h4>
              <p className="text-sm text-primary-foreground/80">للاطلاع دائماً</p>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <Card key={doc.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted/30 relative">
                  <ImageWithFallback 
                    src={doc.image} 
                    alt={doc.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-primary">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{doc.date}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="w-4 h-4 ml-2" />
                    طلب نسخة
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="mb-6 text-center text-primary">الشهادات والاعتمادات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent">✓</span>
                </div>
                <p className="text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Documents */}
        <div className="mt-12 text-center bg-gradient-to-l from-primary to-secondary text-primary-foreground rounded-lg p-8">
          <h3 className="mb-4 text-primary-foreground">تحتاج إلى نسخة من المستندات؟</h3>
          <p className="mb-6 text-primary-foreground/90">
            يمكنكم طلب نسخة رسمية من أي من المستندات المذكورة أعلاه عبر التواصل معنا
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:info@ellaithy-equipment.com">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                طلب المستندات عبر البريد
              </Button>
            </a>
            <a href="tel:+201234567890">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                اتصل للاستفسار
              </Button>
            </a>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 p-6 bg-accent/10 border border-accent rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-accent ml-1">ملاحظة قانونية:</strong>
            جميع المستندات والشهادات المعروضة صادرة عن الجهات المختصة وسارية المفعول. 
            نلتزم بتحديث جميع التراخيص والشهادات بشكل دوري وفقاً للقوانين واللوائح المعمول بها.
          </p>
        </div>
      </div>
    </div>
  );
}
