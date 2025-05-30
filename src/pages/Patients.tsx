
import { useState } from "react"
import { PatientCard } from "@/components/PatientCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Search, Filter } from "lucide-react"

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
  },
  {
    id: "3",
    name: "Emily Davis",
    age: 28,
    gender: "Female",
    condition: "Asthma",
    status: "recovering" as const,
    lastVisit: "2024-05-27",
    phone: "(555) 456-7890",
    email: "emily.d@email.com",
    address: "789 Pine St, City"
  },
  {
    id: "4",
    name: "Robert Wilson",
    age: 45,
    gender: "Male",
    condition: "Back Pain",
    status: "stable" as const,
    lastVisit: "2024-05-26",
    phone: "(555) 321-0987",
    email: "r.wilson@email.com",
    address: "321 Elm St, City"
  }
]

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPatients, setFilteredPatients] = useState(mockPatients)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = mockPatients.filter(patient =>
      patient.name.toLowerCase().includes(value.toLowerCase()) ||
      patient.condition.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredPatients(filtered)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-2">Manage and view all patient records</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Directory</CardTitle>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search patients by name or condition..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
          
          {filteredPatients.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No patients found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Patients
