
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Stethoscope } from "lucide-react"

interface Appointment {
  id: string
  patientName: string
  doctorName: string
  time: string
  type: string
  status: "scheduled" | "completed" | "cancelled"
  department: string
}

interface AppointmentCardProps {
  appointment: Appointment
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const statusColors = {
    scheduled: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{appointment.time}</span>
          </div>
          <Badge className={statusColors[appointment.status]}>
            {appointment.status}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{appointment.patientName}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-4 w-4 text-gray-500" />
            <span className="text-sm">Dr. {appointment.doctorName}</span>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>{appointment.type}</p>
            <p className="text-xs text-gray-500">{appointment.department}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
