export const adminMenu = [
  {
    //quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      // {
      //   name: "menu.admin.crud",
      //   link: "/system/user-manage",
      // },
      {
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },

      {
        name: "menu.admin.manage-hotel",
        link: "/system/user-hotel",
      },

      {
        name: "menu.admin.manage-admin",
        link: "/system/user-admin",
      },
      {
        name: "menu.admin.manage-room",
        link: "/system/manage-room",
      },
      {
        name: "menu.room.manage-schedule",
        link: "/room/manage-schedule",
      },
    ],
  },
  {
    //quản lý phòng khách sạn
    name: "menu.admin.specialty",
    menu: [
      {
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
    ],
  },
  {
    //quản lý chi nhánh
    name: "menu.admin.branch",
    menu: [
      {
        name: "menu.admin.manage-branch",
        link: "/system/manage-branch",
      },
    ],
  },
  {
    //quản lý cẩm nang
    name: "menu.admin.handbook",
    menu: [
      {
        name: "menu.admin.manage-handbook",
        link: "/system/manage-handbook",
      },
    ],
  },
];

export const roomMenu = [
  {
    name: "menu.admin.manage-user",
    menus: [
      {
        //quản lý phòng
        name: "menu.room.manage-schedule",
        link: "/room/manage-schedule",
      },
      {
        name: "menu.room.manage-customer",
        link: "/room/manage-customer",
      },
    ],
  },
];
