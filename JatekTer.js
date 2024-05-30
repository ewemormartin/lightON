import Lampa from "./Lampa.js";

class Jatekter
{
    #db;
    #allapotLista = [];
    #meret;
    #lepes;

    constructor()
    {
        this.#meret = 3;
        const JATEKTER = $("#jatekter");
        for (let y = 0; y < this.#meret; y++)
        {
            this.#allapotLista.push((() => {
                const LISTA = [];
                for (let x = 0; x < this.#meret; x++)
                {
                    const FELKAPCSOLVA = Math.random() < 0.5;
                    LISTA.push(new Lampa(x, y, FELKAPCSOLVA, JATEKTER));
                    if (FELKAPCSOLVA)
                    {
                        this.#db++;
                    }
                }
                return LISTA;
            })());
        }
        this.#lepes = 0;
        $(window).on("kapcsolas", event => {
            event.detail.setAllapot();
            this.#setAllapotLista(event.detail.getaktHely());
            this.#lepes++;
        });
        
    }

    #setAllapotLista(aktHely)
    {
        const X = aktHely.x;
        const Y = aktHely.y;
        this.#szomszed(Y + 1, X);
        this.#szomszed(Y - 1, X);
        this.#szomszed(Y, X + 1);
        this.#szomszed(Y, X - 1);
    }

    #szomszed(x, y)
    {
        if (x >= 0 && x < this.#meret && y >= 0 && y < this.#meret)
        {
            this.#allapotLista[x,y].setAllapot();
        }
    }

  
}

export default Jatekter;