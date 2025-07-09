import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, CloudRain, MapPin, Satellite, TrendingUp, Users } from 'lucide-react'


const Home = () => {
      const features = [
    {
      icon: Satellite,
      title: "INSAT Satellite System",
      description: "Advanced meteorological satellite monitoring system providing real-time weather data across India.",
      color: "bg-blue-500"
    },
    {
      icon: CloudRain,
      title: "Rainfall Analytics",
      description: "Comprehensive rainfall data analysis and forecasting for agricultural and urban planning.",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Weather Trends",
      description: "Historical weather pattern analysis and climate trend monitoring for better predictions.",
      color: "bg-purple-500"
    }
  ];

  const stats = [
    { label: "Active Weather Stations", value: "2,500+", icon: MapPin },
    { label: "Daily Data Points", value: "50M+", icon: Calendar },
    { label: "Users Served", value: "10M+", icon: Users },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Satellite className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">WeatherHub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Analytics</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Reports</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Settings</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Advanced Weather Intelligence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Harness the power of INSAT satellite data and advanced analytics to get 
            precise weather insights, rainfall predictions, and climate monitoring 
            for informed decision-making.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive weather monitoring and analysis tools powered by cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                  Learn More
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Latest Weather Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Current Conditions</h4>
                <p className="text-blue-100 mb-4">
                  Real-time weather data from INSAT satellites shows favorable conditions 
                  across most regions with moderate rainfall expected in Kerala and Karnataka.
                </p>
                <Badge variant="secondary" className="bg-white text-blue-600">
                  Live Data
                </Badge>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">7-Day Forecast</h4>
                <p className="text-blue-100 mb-4">
                  Extended weather predictions indicate continued monsoon activity with 
                  varying intensity across different states. Stay updated with our alerts.
                </p>
                <Badge variant="secondary" className="bg-white text-blue-600">
                  Forecasting
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Satellite className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">WeatherHub</span>
              </div>
              <p className="text-gray-600">
                Advanced weather intelligence powered by INSAT satellite technology.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Products</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Weather Dashboard</a></li>
                <li><a href="#" className="hover:text-blue-600">Rainfall Analytics</a></li>
                <li><a href="#" className="hover:text-blue-600">Climate Reports</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600">API Reference</a></li>
                <li><a href="#" className="hover:text-blue-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Company</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 WeatherHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home