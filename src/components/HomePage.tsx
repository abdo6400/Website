import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Mail, Award, Users, Clock, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 to-primary/70 z-10"></div>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NTkyNTE5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="El-Laithy Heavy Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-white mb-6">شركة الليثي لتوريد المعدات الثقيلة</h1>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            نوفر لكم أفضل وأحدث المعدات الثقيلة والأوناش بأنواعها المختلفة للإيجار اليومي والتسكين طويل المدى
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => onNavigate('daily')}
            >
              تصفح الأوناش المتاحة
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-white/90 text-primary border-white"
            >
              <Phone className="w-4 h-4 ml-2" />
              اتصل بنا الآن
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">من نحن</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              شركة الليثي هي إحدى الشركات الرائدة في مجال تأجير وتوريد المعدات الثقيلة والأوناش في مصر. 
              نتميز بخبرة تمتد لسنوات عديدة وأسطول حديث من المعدات المتطورة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2 text-primary">خبرة واسعة</h3>
              <p className="text-sm text-muted-foreground">أكثر من 15 عاماً في المجال</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2 text-primary">فريق محترف</h3>
              <p className="text-sm text-muted-foreground">مهندسون وفنيون متخصصون</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2 text-primary">خدمة 24/7</h3>
              <p className="text-sm text-muted-foreground">دعم فني على مدار الساعة</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-2 text-primary">جودة عالية</h3>
              <p className="text-sm text-muted-foreground">معدات حديثة وموثوقة</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">خدماتنا</h2>
            <p className="text-muted-foreground">نقدم حلول شاملة لجميع احتياجاتكم من المعدات الثقيلة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigate('daily')}>
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZXxlbnwxfHx8fDE3NTkzMDg1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="تأجير يومي"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-primary">تأجير الأوناش باليوم</h3>
                <p className="text-muted-foreground mb-4">
                  خدمة التأجير اليومي للأوناش بمختلف الأحجام والقدرات. مثالية للمشاريع قصيرة الأمد والأعمال الطارئة.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  تصفح الأوناش
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigate('project')}>
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1679183845961-aeafe1aac340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlciUyMGNyYW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTMwNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="تأجير بالتسكين"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-primary">تأجير الأوناش بالتسكين</h3>
                <p className="text-muted-foreground mb-4">
                  خدمة التأجير طويل الأمد للمشاريع الكبرى. نوفر لكم الأوناش مع الصيانة الدورية والدعم الفني الكامل.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  عرض الباقات
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-primary-foreground">هل لديك استفسار أو تحتاج إلى عرض أسعار؟</h2>
          <p className="mb-8 text-primary-foreground/90">
            فريقنا جاهز للرد على جميع استفساراتكم وتقديم أفضل العروض التي تناسب احتياجاتكم
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+201234567890">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="w-4 h-4 ml-2" />
                اتصل بنا: 0123 456 7890
              </Button>
            </a>
            <a href="mailto:info@ellaithy-equipment.com">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="w-4 h-4 ml-2" />
                راسلنا عبر البريد
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
