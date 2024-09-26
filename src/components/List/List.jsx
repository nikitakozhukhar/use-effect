import "./list.css";

import { useJsonFetch } from "../../hooks/useJsonFetch";

export function List({ handleClick, selectedID, isLoading }) {
  const { data } = useJsonFetch({
    url: "/users.json",
    initialData: [],
    dataName: "list",
  });

  const setListItemClasses = (item) => {
    const classes = ["list-item"];
    if (item.id === selectedID) classes.push("active");
    if (isLoading.details)
      classes.push("profiles__loading", "profiles__loading-details");

    return classes.join(" ");
  };

  return (
    <div className="list-wrapper">
      <ul className="list-profiles">
        {isLoading.list ? (
          <li className={"profiles__loading profiles__loading-list"}>
            <div className="profiles__text">Loading...</div>
          </li>
        ) : null}
        {data &&
          data.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={`${setListItemClasses(item)}`}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
