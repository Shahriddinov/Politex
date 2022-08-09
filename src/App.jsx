import { Route, Routes, Navigate } from "react-router-dom";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { get } from "lodash";
import Layouts from "./layouts";
import routes from "./routes";
import SiteMap from "./pages/SiteMap";
import { menus } from "./components/Menu/data";
import useList from "./modules/hooks/useCorruption";

function App() {
  const { t, i18n } = useTranslation();
  const id = useId();

  useList({
    onSuccess: ({ items }) => {
      if (items) {
        menus.push({
          id,
          title: t("no_corruption"),
          children: items?.map(item => ({
            id: item.id,
            title: get(item, `title[${i18n.language}]`),
            path: `/no_corruption/${item.id}`
          }))
        });
      }
    }
  });

  return (
    <Routes>
      <Route path="/sitemap" element={<SiteMap />} />
      {routes.map(route => (
        <Route
          key={route.name}
          path={route.path}
          element={
            <Layouts>
              <route.component />
            </Layouts>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
