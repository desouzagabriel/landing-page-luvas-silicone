new Vue({
    el: '#app',
    data: {
        botaoperguntas: [{
            titulobtn: 'Quantas luvas eu recebo?',
            descricaobtn: 'Você receberá um par de luvas (duas luvas) da cor que escolheu.'
        }, {
            titulobtn: 'Posso lavar alimentos com a luva?',
            descricaobtn: 'Sim, o material de silicone da luva pode conduzir e lavar alimentos sem problemas.'
        }, {
            titulobtn: 'Como esterilizar a minha luva?',
            descricaobtn: 'O processo de esterilização é simples. Basta ferver água em uma panela e deixar suas luvas por 2 minutos ou esquentar água no microondas e deixar as luvas também por 2 minutos.'
        }, {
            titulobtn: 'Posso utilizar as luvas para outras atividades, além de lavar louças?',
            descricaobtn: 'Sim, voce pode banhar seu pet, lavar o carro, limpar azuleijos e outros locais. O ideal é separar as luvas das louças das luvas que utiliza para as outras atividades.'
        }, {
            titulobtn: 'O sistema de pagamento online é seguro?',
            descricaobtn: 'Sim. Utilizamos como plataforma de pagamentos o Mercado Pago, líder da pagamentos no Brasil. É utilizado criptografia de 256 bits e outros diversos protocolos de segurança para manter sua informação segura, assim, ninguém possui acesso aos seus dados financeiros e pessoais.'
        }, {
            titulobtn: 'Já comprei! Como faço para rastrear meu produto?',
            descricaobtn: 'Todas as compras possuem código de rastreamento que pode ser acompanhado desde a origem até a chegada em sua residência. O código pode ser verificado no seu e-mail e rastreado no botão abaixo.'
        }, ],
        titulos: [{
            titulonome: 'Ideal para uso em diversos materiais',
            link: 'img-diversos.jpg'
        }, {
            titulonome: 'Diversas aplicações',
            link: 'img-cachorro.jpg'
        }, {
            titulonome: 'Suporta temperaturas extremas (-20ºC - +200ºC)',
            link: 'img-forno.jpg'
        }, {
            titulonome: 'Fácil de limpar',
            link: 'img-facil-limpar.jpg'
        }, {
            titulonome: 'Textura externa que não escorrega',
            link: 'img-carro.jpg'
        }, {
            titulonome: 'Impermeável e resistente',
            link: 'img-janela-carro.jpg'
        }],

        produtos: [{
            produtopreco: '1 PAR POR',
            real: 'R$79',
            centavo: ',97',
            texto: 'cada',
            total: 'unidade',
            tamanho: "13vh",
            link: 'img-produto-azul.png',
            economia: '',
            detalhebotoes: [{
                link: "https://enovidades.com/25709248605/checkouts/441a7e20bde331d8a12505c89114c51b",
                cor: [{
                    corluva: "#72AACB"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/4c5ab34431a766c6e427415908fab98f",
                cor: [{
                    corluva: "#FFCBDF"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/45a3fe377d083c1999f0c881f4f88290",
                cor: [{
                    corluva: "#8B8584"
                }]
            }]
        }, {
            produtopreco: '3 PARES POR',
            real: 'R$59',
            centavo: ',97',
            tamanho: '8vh',
            total: 'total: R$179,94',
            texto: 'cada',
            link: 'img-produto-triple.png',
            economia: 'ECONOMIZE R$50',
            detalhebotoes: [{
                link: "https://enovidades.com/25709248605/checkouts/3ffcee43b08fea5aae23a62ad0f433a5?discount=25OFFMAGICCLEANER",
                cor: [{
                    corluva: "#72AACB"
                }, {
                    corluva: "#72AACB"
                }, {
                    corluva: "#72AACB"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/dac10fe37b737cb4526510dad487a4ca?discount=25OFFMAGICCLEANER",
                cor: [{
                    corluva: "#FFCBDF"
                }, {
                    corluva: "#FFCBDF"
                }, {
                    corluva: "#FFCBDF"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/077a5644ebf8d41ab980f830edb9d2bf?discount=25OFFMAGICCLEANER",
                cor: [{
                    corluva: "#8B8584"
                }, {
                    corluva: "#8B8584"
                }, {
                    corluva: "#8B8584"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/018eaf870b3f8d9ed78c4a2026818df6?discount=25OFFMAGICCLEANER",
                cor: [{
                    corluva: "#72AACB"
                }, {
                    corluva: "#FFCBDF"
                }, {
                    corluva: "#8B8584"
                }]
            }]
        }, {
            produtopreco: '2 PARES POR',
            real: 'R$69',
            centavo: ',57',
            tamanho: '8vh',
            total: 'total: R$139,16',
            texto: 'cada',
            tamanho: "13vh",
            link: 'img-produto-double.png',
            economia: 'ECONOMIZE R$20',
            detalhebotoes: [{
                link: "https://enovidades.com/25709248605/checkouts/76a15fe51511a37ad076ec273dfc0296?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#72AACB"
                }, {
                    corluva: "#72AACB"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/358bbf1cd64aa0020b0e3c2d20d40f7d?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#72AACB"
                }, {
                    corluva: "#FFCBDF"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/239493a82678e0c3639b046c6b6750c9?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#72AACB"
                }, {
                    corluva: "#8B8584"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/282432fc633f2d3c8f8acb79855bd88d?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#FFCBDF"
                }, {
                    corluva: "#FFCBDF"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/6457d01e4fedeed922b5b2f4e5311ac5?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#FFCBDF"
                }, {
                    corluva: "#8B8584"
                }]
            }, {
                link: "https://enovidades.com/25709248605/checkouts/474b158323ad9dab47bb4ae90d839e2e?discount=13OFFMAGICCLEANER",
                cor: [{
                    corluva: "#8B8584"
                }, {
                    corluva: "#8B8584"
                }]
            }]
        }, ],

    }
})