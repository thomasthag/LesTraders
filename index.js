import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [showFullArticle, setShowFullArticle] = useState(false);

  useEffect(() => {
    document.title = "Les Traders - Investissement Futuriste";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white p-4 overflow-x-hidden relative">
      <motion.nav 
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-md px-6 py-2 rounded-full shadow-xl z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ul className="flex space-x-6 text-sm">
          <li>Accueil</li>
          <li>Blog</li>
          <li>Conseils</li>
          <li>À propos</li>
        </ul>
      </motion.nav>

      <header className="flex flex-col items-center py-20 border-b border-gray-700">
        <Image src="/Annotation 2020-05-10 210416.png" alt="Les Traders Logo" width={200} height={80} />
        <motion.h1 className="text-4xl font-bold mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Les Traders — Investissement Futuriste
        </motion.h1>
      </header>

      <section className="py-12 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenue dans le futur de l'investissement
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explorez des analyses exclusives, des outils intelligents et des conseils personnalisés pour dominer les marchés de demain.
        </p>
      </section>

      <section className="py-12 px-4 md:px-24">
        <motion.div className="max-w-4xl mx-auto text-left bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">🧠 Les 5 règles d’or pour investir en période d’instabilité</h3>
          <p className="text-gray-300 mb-4">
            Dans un monde où les marchés sont de plus en plus volatils, il est crucial d’adopter une stratégie à la fois défensive et évolutive. Voici cinq principes essentiels :
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Diversifiez intelligemment :</strong> Actions, obligations, matières premières, cryptos, private equity… ne mettez pas tous vos œufs dans le même panier.</li>
            <li><strong>Gardez du cash disponible :</strong> Les meilleures opportunités apparaissent souvent dans les moments de panique. Ayez les liquidités pour les saisir.</li>
            <li><strong>Évitez l’émotion :</strong> L’instabilité génère peur et avidité. Gardez le cap sur votre plan stratégique.</li>
            <li><strong>Suivez des indicateurs concrets :</strong> Ne vous laissez pas piéger par l’actualité ou la rumeur. Appuyez-vous sur les fondamentaux et les signaux techniques solides.</li>
            <li><strong>Apprenez sans cesse :</strong> L’investissement est un métier qui évolue chaque jour. Lisez, testez, échangez… formez-vous !</li>
          </ul>

          {showFullArticle ? (
            <div className="mt-6 text-gray-300">
              <h4 className="text-xl font-semibold mb-2">📈 Exemple d’analyse de marché : Le cas Nvidia en 2024</h4>
              <p>
                Alors que le marché tech s’effondrait en début d’année, Nvidia a pris le contrepied avec une hausse spectaculaire. Pourquoi ? Une domination sur le secteur IA, des marges fortes, et une gestion saine du cash-flow.
              </p>
              <p className="mt-4">
                En résumé, investir en période d’instabilité n’est pas un risque… c’est une opportunité si vous êtes préparé et stratège. Et ce site est là pour vous y aider.
              </p>
            </div>
          ) : (
            <button className="mt-6" onClick={() => setShowFullArticle(true)}>Lire la suite de l’article</button>
          )}
        </motion.div>
      </section>

      <footer className="text-center py-10 mt-12 border-t border-gray-700 text-gray-500 text-sm">
        &copy; 2025 Les Traders. Tous droits réservés. Naviguez avec confiance.
      </footer>
    </main>
  );
}
