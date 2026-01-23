import { Link, useLocation } from "react-router";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border border-white";

    return location.pathname === path
      ? `${baseClass} text-secondary bg-aux`
      : baseClass;
  };

  return (
    <header className="mx-auto w-full px-4 pt-4 md:max-w-4xl md:px-0 md:pt-4">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src="casa-hamburguer-logo.png" alt="logo casa hamburguer" />
        </Link>

        {user ? (
          <div className="flex items-center gap-8 text-white">
            <div className="text-aux flex items-center gap-3">
              <Link to={"/"}>
                <div className={getNavItemClass("/")}>
                  <Box />
                </div>
              </Link>

              <Link to={"/pedidos"}>
                <div className={getNavItemClass("/pedidos")}>
                  <LayoutDashboard />
                </div>
              </Link>

              <Link to={""}>
                <div className={getNavItemClass("/teste")}>
                  <Plus />
                </div>
              </Link>
            </div>

            <div className="relative cursor-pointer">
              <ShoppingCart />
              <p className="bg-aux text-secondary absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full text-sm font-bold">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <LogOut className="cursor-pointer" size={20} />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-primary cursor-pointer rounded px-9 py-2 font-medium">
              Entrar
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
