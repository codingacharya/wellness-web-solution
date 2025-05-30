
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Mail, MapPin } from "lucide-react"

interface Patient {
  id: string
  name: string
  age: number
  gender: string
  condition: string
  status: "stable" | "critical" | "recovering"
  lastVisit: string
  phone: string
  email: string
  address: string
}

interface PatientCardProps {
  patient: Patient
}

export function PatientCard({ patient }: PatientCardProps) {
  const statusColors = {
    stable: "bg-green-100 text-green-700",
    critical: "bg-red-100 text-red-700",
    recovering: "bg-blue-100 text-blue-700"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{patient.name}</CardTitle>
            <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
          </div>
          <Badge className={statusColors[patient.status]}>
            {patient.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="font-medium text-gray-900">Condition</p>
          <p className="text-sm text-gray-600">{patient.condition}</p>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>Last visit: {patient.lastVisit}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{patient.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <span>{patient.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{patient.address}</span>
          </div>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button size="sm" className="flex-1">View Details</Button>
          <Button size="sm" variant="outline" className="flex-1">Edit</Button>
        </div>
      </CardContent>
    </Card>
  )
}
