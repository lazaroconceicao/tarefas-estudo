import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Prpos {
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Prpos) {
  const [tempo, setTempo] = useState<Number>();

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  },[selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}
