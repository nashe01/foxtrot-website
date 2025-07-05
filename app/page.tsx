"use client"

import { useState, useEffect } from "react"
import {
  Radio,
  Sun,
  Shield,
  Network,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Zap,
  Satellite,
  Battery,
  Monitor,
  Users,
  Award,
  Globe,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FoxtrotWebsite() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-12">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Foxtrot Systems</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors py-2 font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors py-2 font-medium">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors py-2 font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors py-2 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark gradient background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className="transform transition-all duration-1000 max-w-6xl mx-auto"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent animate-pulse leading-tight">
              Foxtrot Electrocommunication Systems
            </h1>

            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leading provider of advanced radio communications, solar energy solutions, and ICT infrastructure across
                Zimbabwe and Africa
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                Explore Solutions
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent px-8 py-4"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-violet-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 opacity-10">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Radio tower and solar panels in African landscape"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section - White background */}
      <section id="about" className="py-32 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              About Foxtrot Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established with a vision to provide innovative, reliable, and future-proof technological solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-purple-600 flex items-center text-xl">
                    <Globe className="mr-3 w-6 h-6" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading provider of robust, innovative, and sustainable communication and power solutions
                    in Africa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-cyan-600 flex items-center text-xl">
                    <Zap className="mr-3 w-6 h-6" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    To deliver high-quality Electrocommunication systems and solar energy solutions tailored to meet the
                    diverse needs of our clients.
                  </p>
                </CardContent>
              </Card>

              {/* Add company image */}
              <div className="relative overflow-hidden rounded-xl mt-8 shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Foxtrot Systems team installing radio equipment"
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-bold mb-1">Expert Installation Team</h3>
                  <p className="text-sm text-gray-200">Professional radio equipment setup</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Add main company showcase image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Solar panels and radio tower installation in Zimbabwe"
                  className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Advanced Technology Solutions</h3>
                  <p className="text-sm text-gray-300">Serving Zimbabwe and across Africa</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Integrity",
                    desc: "Highest ethical standards",
                    color: "from-blue-500 to-purple-500",
                  },
                  {
                    icon: Zap,
                    title: "Innovation",
                    desc: "Evolving with technology",
                    color: "from-purple-500 to-pink-500",
                  },
                  { icon: Award, title: "Reliability", desc: "Trusted solutions", color: "from-cyan-500 to-blue-500" },
                  {
                    icon: Users,
                    title: "Collaboration",
                    desc: "Strong partnerships",
                    color: "from-green-500 to-cyan-500",
                  },
                ].map((value, index) => (
                  <Card
                    key={index}
                    className="bg-white border-gray-200 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light gray background */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for communication, power, and security needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: Radio,
                title: "Radio Communication Systems",
                desc: "Advanced VHF/UHF analog and DMR digital radio systems with wide-area repeater networks for seamless communication across vast territories.",
                features: [
                  "Hytera & Motorola professional radios",
                  "EarthRanger & SMART platform integration",
                  "Multi-site IP-linked repeater networks",
                  "Mobile, base & handheld radio solutions",
                  "Digital encryption & secure channels",
                  "Real-time GPS tracking integration",
                ],
                image: "/placeholder.svg?height=250&width=350",
                imageAlt: "Professional DMR radio equipment and handheld radios with charging stations",
                badge: "Digital & Analog",
              },
              {
                icon: Sun,
                title: "Solar Power Solutions",
                desc: "Hybrid and off-grid solar systems designed for remote locations and critical infrastructure with advanced battery management.",
                features: [
                  "Lithium & gel battery systems",
                  "Smart MPPT charge controllers",
                  "Remote monitoring & diagnostics",
                  "Hybrid grid-tie solutions",
                  "Solar backup for communication sites",
                  "Custom power calculations & design",
                ],
                image: "/placeholder.svg?height=250&width=350",
                imageAlt: "Solar panel installation with battery bank and inverter systems in remote location",
                badge: "Renewable Energy",
              },
              {
                icon: Network,
                title: "ICT Infrastructure",
                desc: "Complete wireless networks and IT infrastructure deployment including point-to-point links and enterprise solutions.",
                features: [
                  "Point-to-Point & Point-to-Multipoint links",
                  "Enterprise network security solutions",
                  "Server deployment & virtualization",
                  "Switches, routers & network equipment",
                  "Control room setup & integration",
                  "Network monitoring & maintenance",
                ],
                image: "/placeholder.svg?height=250&width=350",
                imageAlt: "Network server room with switches, routers and wireless equipment installation",
                badge: "Enterprise Grade",
              },
              {
                icon: Shield,
                title: "Security & Surveillance",
                desc: "Integrated surveillance and access control solutions with solar-powered options for remote monitoring applications.",
                features: [
                  "HD CCTV & IP camera systems",
                  "Access control & biometric solutions",
                  "Solar-powered security installations",
                  "Motion detection & alert systems",
                  "Remote monitoring capabilities",
                  "Integration with radio networks",
                ],
                image: "/placeholder.svg?height=250&width=350",
                imageAlt: "Security camera installation with solar panel and wireless transmission equipment",
                badge: "24/7 Monitoring",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                {/* Image with same gallery effects */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Service badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                  {service.badge}
                </div>

                {/* Floating icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content that slides up on hover - same as gallery */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features list - appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <h4 className="text-purple-400 font-semibold text-sm mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-xs">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 p-0 h-auto font-medium mt-4"
                    >
                      View All Features
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Info */}
          <div className="mt-20 text-center">
            <Card className="bg-white border-gray-200 max-w-5xl mx-auto shadow-lg">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Support & Training</h3>
                <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive support services including on-site and remote technical assistance, user training
                  programs, and customized capacity-building initiatives for conservation and field staff.
                </p>
                <div className="grid md:grid-cols-3 gap-10 text-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-3 text-lg">Expert Training</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Hands-on training for radio systems, solar maintenance, and ICT operations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-3 text-lg">Remote Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      24/7 remote diagnostics and troubleshooting capabilities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-3 text-lg">Certification</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Professional certification programs for technical staff
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - White background */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See our technology solutions deployed across Zimbabwe and Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "Hwange National Park Radio Network",
                desc: "Advanced DMR radio system for wildlife conservation",
              },
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "Remote Solar Installation",
                desc: "Off-grid solar power for ranger stations",
              },
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "ICT Infrastructure Deployment",
                desc: "Wireless network setup in remote locations",
              },
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "Conservation Technology Integration",
                desc: "EarthRanger system with real-time tracking",
              },
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "Security System Installation",
                desc: "Solar-powered CCTV for wildlife protection",
              },
              {
                image: "/placeholder.svg?height=300&width=400",
                title: "Training and Support",
                desc: "Technical training for conservation staff",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Light gray background */}
      <section id="projects" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Key Projects & Partnerships
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Zimparks Radio Upgrades",
                desc: "VHF and DMR systems across Hwange and Mid Zambezi Valley regions",
                icon: Satellite,
                image: "/placeholder.svg?height=200&width=350",
                imageAlt: "Radio equipment installation at Zimparks facility",
              },
              {
                title: "Kyle & Chipangayi Projects",
                desc: "Hybrid radio and solar system installations for conservation operations",
                icon: Battery,
                image: "/placeholder.svg?height=200&width=350",
                imageAlt: "Solar panels and radio tower at conservation site",
              },
              {
                title: "Aware Germany Partnership",
                desc: "Radio system supply and maintenance collaboration",
                icon: Globe,
                image: "/placeholder.svg?height=200&width=350",
                imageAlt: "International partnership meeting and equipment",
              },
              {
                title: "Conservation Technology",
                desc: "EarthRanger and SMART integration for real-time tracking",
                icon: Monitor,
                image: "/placeholder.svg?height=200&width=350",
                imageAlt: "Digital conservation technology dashboard and tracking",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 transform hover:scale-105 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-2xl"
              >
                {/* Add project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardHeader className="p-8">
                  <CardTitle className="text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - White background */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Why Choose Foxtrot Systems?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Proven Expertise",
                desc: "Decades of combined experience",
                icon: Award,
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Tailored Solutions",
                desc: "Customized for your needs",
                icon: Zap,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Strong Partnerships",
                desc: "Trusted by organizations worldwide",
                icon: Users,
                color: "from-green-500 to-cyan-500",
              },
              {
                title: "After-Sales Support",
                desc: "Reliable maintenance and service",
                icon: Shield,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((reason, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div
                  className={`w-24 h-24 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-300 shadow-lg`}
                >
                  <reason.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Light gray background */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your communication and power infrastructure?
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      4584 Manyame Park
                      <br />
                      Chitungwiza, Zimbabwe
                    </p>
                  </div>

                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Phone</h3>
                    <p className="text-gray-600">+263 (0) 774 116 149</p>
                  </div>

                  <div className="text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Email</h3>
                    <p className="text-gray-600">info@foxtrot_systems@aol.com</p>
                  </div>
                </div>

                <div className="text-center mt-16">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 px-10 py-4 shadow-lg"
                  >
                    Start Your Project Today
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Dark background */}
      <footer className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-12">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Foxtrot Electrocommunication Systems</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
              Empowering communities, protecting wildlife, and connecting people across Africa
            </p>
            <p className="text-sm text-gray-500">© 2025 Foxtrot Electrocommunication Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transform hover:scale-110 transition-all duration-300 z-50 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
