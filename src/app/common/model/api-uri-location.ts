import { apiServiceLocation } from "./api-service-location";

export const apiUriLocation = {

  auth:{
    login: `${apiServiceLocation.authentication}/authenticate`,
    refreshToken: `${apiServiceLocation.authentication}/refresh-token`,
    logout: `${apiServiceLocation.authentication}/logout`,
    verifyToken: `${apiServiceLocation.authentication}/verify-token?token={token}`,
    forgetPassword: `${apiServiceLocation.registration}/forget-password`,
    resetPassword: `${apiServiceLocation.registration}/reset-password`
  },

  registration:{
    crud_department: `${apiServiceLocation.registration }/department`,
    search_department: `${apiServiceLocation.registration }/department/search`,
    crud_lookup_detail: `${apiServiceLocation.registration }/lookup-detail`,
    lookup_detail_by_enum_key: `${apiServiceLocation.registration }/lookup-detail/byEnumKeyList`,
    search_lookup_detail: `${apiServiceLocation.registration }/lookup-detail/search`,
    lookup_enums: `${apiServiceLocation.registration }/lookup-enum`,

    crud_registration:`${apiServiceLocation.registration }/patient-reg-info`,
    crud_emergency_registration:`${apiServiceLocation.registration }/patient-reg-info/emergency-registration`,
    download_id_card:`${apiServiceLocation.registration }/patient-reg-info/download-id-card`,
    search_registration:`${apiServiceLocation.registration }/patient-reg-info/search`,
    crud_room: `${apiServiceLocation.registration }/room`,
    search_room: `${apiServiceLocation.registration }/room/search`,
    // it should be cut of after merge
    patient_reg_info: `${apiServiceLocation.registration }/patient-reg-info`,
    crud_employee_room: `${apiServiceLocation.registration }/employee-room`,
    search_employee: `${apiServiceLocation.registration }/employee/search`,
    crud_employee: `${apiServiceLocation.registration }/employee`,
    employee_type_list: `${apiServiceLocation.registration }/employee/employeeTypeList`,

    crud_employee_role: `${apiServiceLocation.registration }/employee-role`,
    search_employee_role: `${apiServiceLocation.registration }/employee-role/search`,

    registration_type_enum_list : `${apiServiceLocation.registration }/patient-reg-info/registrationTypeList`,
    patient_relation_type_enum_list : `${apiServiceLocation.registration }/patient-reg-info/patientRelationTypeList`,
    patient_type_enum_list : `${apiServiceLocation.registration }/patient-reg-info/patientTypeList`,
    room_employee_search : `${apiServiceLocation.registration }/room-employee/search`,

    crud_employee_department: `${apiServiceLocation.registration }/employee-department`,
    employee_with_room :`${apiServiceLocation.registration }/employee-room/department`,
    employee_department_list :`${apiServiceLocation.registration }/employee-department/getByEmployeeId`,
    department_room_list :`${apiServiceLocation.registration }/department-room/getByEmployeeId`,

  },
  opd:{
    save_patient_ticket: `${apiServiceLocation.opd }/ticket`,
    search_appointed_patient: `${apiServiceLocation.opd }/appointment/search-appointed-patient`,
    search_ticket: `${apiServiceLocation.opd }/ticket/search`,
    delete_ticket: `${apiServiceLocation.opd }/ticket/delete`,

    save_patient_appointment: `${apiServiceLocation.opd }/appointment`,
    appointment_list: `${apiServiceLocation.opd }/appointment/search`,
    appointment_room_summery: `${apiServiceLocation.opd }/appointment/appointmentRoomSummery/department`,
  },
};
