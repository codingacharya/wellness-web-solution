
import { StatCard } from "@/components/StatCard"
import { PatientCard } from "@/components/PatientCard"
import { AppointmentCard } from "@/components/AppointmentCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, UserCheck, Building2, TrendingUp, Activity } from "lucide-react"

const mockPatients = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    condition: "Hypertension",
    status: "stable" as const,
    lastVisit: "2024-05-28",
    phone: "(555) 123-4567",
    email: "sarah.j@email.com",
    address: "123 Main St, City"
  },
  {
    id: "2",
    name: "Michael Chen",
    age: 67,
    gender: "Male",
    condition: "Diabetes Type 2",
    status: "critical" as const,
    lastVisit: "2024-05-29",
    phone: "(555) 987-6543",
    email: "m.chen@email.com",
    address: "456 Oak Ave, City"
  }
]

const mockAppointments = [
  {
    id: "1",
    patientName: "Emily Davis",
    doctorName: "Smith",
    time: "09:00 AM",
    type: "Consultation",
    status: "scheduled" as const,
    department: "Cardiology"
  },
  {
    id: "2",
    patientName: "John Wilson",
    doctorName: "Brown",
    time: "10:30 AM",
    type: "Follow-up",
    status: "completed" as const,
    department: "Orthopedics"
  },
  {
    id: "3",
    patientName: "Lisa Garcia",
    doctorName: "Johnson",
    time: "02:00 PM",
    type: "Surgery",
    status: "scheduled" as const,
    department: "General Surgery"
  }
]

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at your hospital today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Today's Appointments"
          value="67"
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Active Staff"
          value="156"
          icon={UserCheck}
          trend={{ value: -2, isPositive: false }}
          color="orange"
        />
        <StatCard
          title="Departments"
          value="12"
          icon={Building2}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Patients */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Recent Patients</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {mockPatients.map((patient) => (
                  <PatientCard key={patient.id} patient={patient} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Appointments */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Today's Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Hospital Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Patient Satisfaction</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">94.2%</p>
              <p className="text-sm text-gray-600">+2.1% this month</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Bed Occupancy</h3>
              <p className="text-2xl font-bold text-green-600 mt-1">78%</p>
              <p className="text-sm text-gray-600">234 of 300 beds</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <UserCheck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Staff on Duty</h3>
              <p className="text-2xl font-bold text-orange-600 mt-1">89</p>
              <p className="text-sm text-gray-600">of 156 total staff</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
