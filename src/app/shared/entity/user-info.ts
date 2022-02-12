

export class Token {
    sub?: string;
    rememberMe?: boolean;
    exp?: number;
    authorityList?: any[];
    iat?: boolean;
    enabled?: boolean;
    employeeOrgRoleList?: EmployeeOrgRole[];
    username?: string;
    info?: Info;
}

export class Info {
    userId?: number;
    email?: string;
    employeeOrgRoleList?: EmployeeOrgRole[];
}

export class EmployeeOrgRole {
    employeeId?: number;
    organizationId?: number;
    orgRoleIdList?: number[];
}
