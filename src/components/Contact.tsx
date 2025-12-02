'use client';

import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="w-full px-4 py-16 backdrop-blur-md bg-gradient-to-r from-green-900/20 via-red-900/20 to-green-900/20 christmas-theme" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Get In <span className="gradient-text-christmas">Touch</span> 🎄
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about our hosting services? Need technical support? Want to discuss a custom solution? 
            We're here to help bring your projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl font-bold">Email Support</CardTitle>
              <CardDescription className="text-white/70">
                Quick responses within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-white/90 font-medium">contact@neonnextgeneration.com</p>
              <div className="text-white/60 text-sm">
                <p>• Technical Support</p>
                <p>• Sales Inquiries</p>
                <p>• General Questions</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl font-bold">Headquarters</CardTitle>
              <CardDescription className="text-white/70">
                Based in Australia
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-white/90 font-medium">Melbourne, Australia</p>
              <div className="text-white/60 text-sm">
                <p>• AEST Time Zone</p>
                <p>• 24/7 Service Coverage</p>
                <p>• Local Expertise</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl font-bold">Join Our Community</CardTitle>
              <CardDescription className="text-white/70">
                Connect with fellow developers
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Button asChild className="bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                <a href="https://discord.gg/TCyUSF3dbH" target="_blank" rel="noopener noreferrer">
                  Join Discord Server
                </a>
              </Button>
              <div className="text-white/60 text-sm">
                <p>• Live Support</p>
                <p>• Community Chat</p>
                <p>• Developer Resources</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started? ❄️</h3>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for reliable hosting, need a custom solution, or want to join our growing community 
            of developers and businesses, we're here to help you succeed. Let's build something amazing together this holiday season!
          </p>
        </div>
      </div>
    </section>
  );
}