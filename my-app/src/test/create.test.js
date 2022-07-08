import { render } from "@testing-library/react";
import Create from "../pages/Create/index";

test("render create user", () => {
  const componente = render(<Create test={"usuario"} />);
  componente.getByText("Crear usuario");
  componente.getByText("Datos de Usuario");
  componente.getByText("Datos personales");
});

test("render create proceso", () => {
  const componente = render(<Create test={"proceso"} />);
  componente.getByText("Crear proceso");
  componente.getByText("Datos del Proceso");
  componente.getByText("Añadir indicadores");
});

test("render create proyecto", () => {
  const componente = render(<Create test={"proyecto"} />);
  componente.getByText("Crear proyecto");
  componente.getByText("Datos del Proyecto");
});

test("render create objetivo", () => {
  const componente = render(<Create test={"objetivo"} />);
  componente.getByText("Crear objetivo");
  componente.getByText("Datos del Objetivo");
  componente.getByText("Iniciativas");
  componente.getByText("Indicadores");

});
