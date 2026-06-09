import { MENU_ITEMS } from "@/app/contants";

const Sidebar = () => {
  return (
    <aside className="main border-r border-r-gray-200 p-5">
      <div className="logo font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>
        cademy
      </div>
      <ul className="menu flex flex-col gap-2">
        {MENU_ITEMS.map((item, index) => {
          return (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ul>
    </aside>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon = "",
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={url}
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary/10 transition-all"
      >
        {icon}
        {title}
      </a>
    </li>
  );
}

export default Sidebar;
