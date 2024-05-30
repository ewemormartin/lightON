class Lampa
{
    #allapot;
    #aktHely = {};
    #divElem;

    constructor(x, y, allapot, szuloElem)
    {
        this.#aktHely["x"] = x;
        this.#aktHely["y"] = y;
        this.#allapot = allapot;
        szuloElem.append(`<div class="${allapot ? "sarga" : "zold"}"></div>`);
        this.#divElem = szuloElem.children(":last-child");
        this.#kattintsTrigger();
    }

    setAllapot()
    {
        this.#allapot = !this.#allapot;
        this.#szinBeallit();
    }

    getAllapot()
    {
        return this.#allapot;
    }

    #szinBeallit()
    {
        this.#divElem.toggleClass("zold");
        this.#divElem.toggleClass("sarga");
    }

    #kattintsTrigger()
    {
        this.#divElem.on("click", () => window.dispatchEvent(new CustomEvent("kapcsolas", { detail: this })));
    }

    getaktHely()
    {
        return this.#aktHely;
    }
}

export default Lampa;