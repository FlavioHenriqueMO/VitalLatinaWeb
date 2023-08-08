export class buttomPlusCfg {
    public btnEditar : btnPlus = new btnPlus;
    public btnExcluir : btnPlus = new btnPlus;
    public btnVisualizar : btnPlus = new btnPlus;
    constructor (){}
}

export class toolTipProperty {
    public descricao : string = '';
    constructor (){}

}

export class btnPlus {
    public toolTip : toolTipProperty = new toolTipProperty;

    constructor (){}
}