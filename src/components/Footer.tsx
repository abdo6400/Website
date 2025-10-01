import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground">EL</span>
              </div>
              <div>
                <h3 className="text-primary-foreground">شركة الليثي</h3>
                <p className="text-sm text-primary-foreground/80">لتوريد المعدات الثقيلة</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              شركة رائدة في مجال تأجير وتوريد المعدات الثقيلة والأوناش بجميع أنواعها
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-primary-foreground">معلومات التواصل</h4>
            <div className="space-y-3">
              <a href="tel:+201234567890" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+20 123 456 7890</span>
              </a>
              <a href="tel:+201098765432" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+20 109 876 5432</span>
              </a>
              <a href="mailto:info@ellaithy-equipment.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@ellaithy-equipment.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-primary-foreground">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-primary-foreground text-sm">ساعات العمل</h4>
              <p className="text-sm text-primary-foreground/80">السبت - الخميس: 8:00 ص - 6:00 م</p>
              <p className="text-sm text-primary-foreground/80">الجمعة: مغلق</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            جميع الحقوق محفوظة © 2025 شركة الليثي لتوريد المعدات الثقيلة
          </p>
        </div>
      </div>
    </footer>
  );
}
