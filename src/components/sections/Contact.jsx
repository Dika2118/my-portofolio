import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../lib/constants';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hubungi Saya</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Punya ide proyek, penawaran kerja, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="space-y-8 bg-card border border-border p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold">Informasi Kontak</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Saya selalu terbuka untuk berdiskusi tentang peluang baru, proyek menarik, dan ide-ide inovatif.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telepon / WhatsApp</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold hover:text-primary transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lokasi</p>
                  <p className="font-semibold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold">Pesan Terkirim!</h4>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Terima kasih telah menghubungi saya. Saya akan membalas pesan Anda sesegera mungkin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tuliskan pesan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-md"
                >
                  Kirim Pesan <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
