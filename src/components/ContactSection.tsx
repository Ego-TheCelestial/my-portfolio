import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">mrsiddharthsg@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 9123872896</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-muted-foreground">Howrah, West Bengal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <form
                  action="https://formsubmit.co/54668c26106d99af3f2df6fe9c3fec02"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Optional hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://your-portfolio.com/thank-you"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                  />
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
