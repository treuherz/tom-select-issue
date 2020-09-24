import "jquery";
import "bootstrap";
import tomSelect from "tom-select";

tomSelect("#entity-select-00", {
  options: getEntities(),
  valueField: "id",
  labelField: "name"
})

function getEntities() {
  return [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ]
}

