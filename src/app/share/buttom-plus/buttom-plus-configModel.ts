// Pode configurar os labels dos botoes atraves do exemplo 
// abaixo no seu componente!

// cfgBtnPlus(): buttomPlusCfg {
//     const cfgBtn =  new buttomPlusCfg();
//     cfgBtn.btnEditar.toolTip.descricao = 'Editar';
//     cfgBtn.btnVisualizar.toolTip.descricao = 'Visualizar';
//     cfgBtn.btnExcluir.toolTip.descricao = 'Eliminar';
//     return cfgBtn;
// }

// Na chamada do HTML pode ser feita como no exemplo abaixo
// <app-buttom-plus [btns]="cfgBtnPlus()"></app-buttom-plus>


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
    public rota : string = '';

    constructor (){}
}