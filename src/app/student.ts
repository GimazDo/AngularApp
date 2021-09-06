export interface Student
{
  id: string,
  firstName: string,
  surName: string,
  lastName: string,
  group: string,
  faculty: number,
  yearOfJoining: bigint,
  studyForm: string,
  profileTicket: bigint,
  grants: any,
  payment: any
}

export interface Semester
{
  id: number,
  semester: string
}


