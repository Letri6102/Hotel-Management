export const adminMenu = [

    { //quản lý người dùng
        name: 'menu.admin.manage-user', 
        menus: [
            {
                name: 'menu.admin.crud', link:'/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link:'/system/user-redux'
            },

            {
                name: 'menu.admin.manage-hotel', link: '/system/user-hotel'
            },

            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'
            }
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    {//quản lý phòng khách sạn
        name: 'menu.admin.specialty',
        menu:[
            {
                name: 'menu.admin.manage-specialty', link:'/system/manage-specialty'
            }
        ]
    },
    {//quản lý chi nhánh
        name: 'menu.admin.branch',
        menu:[
            {
                name: 'menu.admin.manage-branch', link:'/system/manage-branch'
            }
        ]
    },
    {//quản lý cẩm nang
        name: 'menu.admin.handbook',
        menu:[
            {
                name: 'menu.admin.manage-handbook', link:'/system/manage-handbook'
            }
        ]
    }
];