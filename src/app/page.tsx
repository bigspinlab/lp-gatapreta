import { Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">gata preta sapatilhas - sua melhor distribuidora de calçados femininos</h1>
      <section className="w-full">
        <article className="w-full flex flex-col gap-2 p-4 bg-lp-purple-300">
          <h2 className="text-white font-bold uppercase ">bem vindo a sua melhor distribuidora de calçados femininos</h2>
          <Button className="bg-lp-green-100 text-lp-purple-300 font-bold uppercase hover:bg-lp-green-100/[0.9]" asChild>
            <Link href="/" rel="noopenner">Comprar no site</Link>
          </Button>        
          
        </article>
      </section>

      <section>
        <article>
          <h2 className="sr-only">hero</h2>
          <div>
            <Image src="" alt="hero banner"/>
            <h2>Revenda calçados e <strong>ganhe dinheiro</strong> sem investir em estoque.</h2>
          </div>
        </article>
      </section>

      <section>
        <article>
          <h2>Revendedoras em todo o Brasil</h2>
          <ul>
            <li>
                <div>
                  <h3>+ 30 mil</h3>
                  <h4>pedidos enviados</h4>
                </div>
              </li>
              <li>
                <div>
                  <h3>+ 400 mil</h3>
                  <h4>modelos e entregas</h4>
                </div>
              </li>

              <li>
                <div>
                  <h3>+ 9 mil</h3>
                  <h4>clientes atendidos</h4>
                </div>
              </li>

              <li>
                <div>
                  <h3>+ 281 mil</h3>
                  <h4>seguidores no instagram</h4>
                </div>
              </li>
          </ul>
        </article>
      </section>


      <section>
        <article>
          <h2 className="sr-only">Banner</h2>

          <div>
            <span>Seja dona do própio negócio ou 
            tenha uma renda extra</span>
            <h2>Ganhe dinheiro</h2>
            <p>revendendo um dos itens mais comprados pelas mulheres: calçados</p>
            <Button>Acessar o site</Button>
            <Image src="" alt="hero banner"/>
          </div>
        </article>
      </section>


      <section>
        <article>
          <h2 className="sr-only">Video</h2>
          <video src=""></video>
        </article>
      </section>

      <section>
        <article>
          <h2>Como funciona o nosso atacado</h2>
          <ul>
            <li>
              <div>
                <Image src="" alt="hero banner"/>
                <h3>•O pedido mínimo no atacado 
                deve ser R$ 199,90 em produtos;</h3>
              </div>
            </li>

            <li>
              <div>
                <Image src="" alt="hero banner"/>
                <h3>•Você pode mesclar 
                modelos e numerações;</h3>
              </div>
            </li>

            <li>
              <div>
                <Image src="" alt="hero banner"/>
                <h3>Compre com CPF ou CNPJ;</h3>
              </div>
            </li>

            <li>
              <div>
                <Image src="" alt="hero banner"/>
                <h3>A mercadoria é a pronta entrega. Levamos de 1 a 2 dias úteis para despachar o seu pedido.</h3>
              </div>
            </li>
          </ul>
        </article>
      </section>

      <section>
        <article>
          <h2> O que dizem nossas clientes</h2>
          <div>carrousel here</div>
        </article>
      </section>

      <section>
        <article>
          <h2>Porque você vai amar revender Gata Preta</h2>
          <ul>
            <li>
              <div>
                <Image src="" alt="hero banner"/>

                <h3>•Faça seu horário de trabalho 
                e trabalhe em casa</h3>
              </div>
            </li>

            <li>
              <div>
                <Image src="" alt="hero banner"/>

                <h3>Receba fotos e vídeos profissionais dos produtos para divulgar</h3>
              </div>
            </li>

            <li>
              <div>
                <Image src="" alt="hero banner"/>

                <h3>Disponha de um catálogo virtual com todos os modelos e estoque atualizado, pronto para ser compartilhado com suas clientes</h3>
              </div>
            </li>
          </ul>
        </article>
      </section>


      <section>
        <article>
          <h2>garantia de satisfação</h2>
          <p>Caso receba nossos produtos e não goste, você poderá devolver o pedido integralmente e receber seu dinheiro de volta, desde que a mercadoria não tenha sido usada e que seja dentro do prazo de 7 dias.</p>
        </article>
      </section>


      <section>
        <article>
          <h1 className="sr-only">bem vindo</h1>
          <div>
            <h2>Venha fazer parte <strong>deste sucesso</strong> </h2>
            <Button>Entrar no grupo VIP</Button>
          </div>
        </article>
      </section>

      <section>
        <article>
          <h2>Dúvidas frequentes</h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>        
          
        </article>
      </section>
    </main>
  );
}
