'use client';
import { HoverEffect } from "../ui/card-hover-effect";
import {motion} from 'framer-motion'
import style from './Certificates.module.css'

const Certificates = () => {
  return (
    <div id='certificates' className={style.container}>
        <motion.h2 
         initial={{opacity: 0, scale: 0}}
         whileInView={{ opacity: 1, scale: 1}}
         viewport={{ once: false, amount: 0.8 }}
         transition={{duration: 1}}
         className={style.title}>
            Certificates
        </motion.h2>
        <HoverEffect items={certificates} />
    </div>
  )
}

export default Certificates

export const certificates = [
    {
      title: "Machine Learning",
      link: "https://coursera.org/verify/specialization/DXJWZQ78LPK7",
      img_link: "/certificates/ml.png",
      tags: ["Coursera", "DeepLearning.AI", "Stanford"]
    },
    {
      title: "Deep Learning",
      link: "https://coursera.org/verify/specialization/GBJWUJQR5Z2G",
      img_link: "/certificates/dl.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      link: "https://coursera.org/verify/884PSS98LW32",
      img_link: "/certificates/improving_dnn.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
    {
      title: "Sequence Models",
      link: "https://coursera.org/verify/3NZK9M6YP4NL",
      img_link: "/certificates/sequence_models.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
    {
      title: "Convolutional Neural Networks",
      link: "https://coursera.org/verify/T3LUQRVZB2GE",
      img_link: "/certificates/cnn.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
    {
      title: "Advanced Learning Algorithms",
      link: "https://coursera.org/verify/ZRMKMFS5AMH5",
      img_link: "/certificates/adv_learning_alg.png",
      tags: ["Coursera", "DeepLearning.AI", "Stanford"]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      link: "https://coursera.org/verify/RKNBX48EX7NJ",
      img_link: "/certificates/supervised_ml.png",
      tags: ["Coursera", "DeepLearning.AI", "Stanford"]
    },
    {
      title: "Neural Networks and Deep Learning",
      link: "https://coursera.org/verify/NEDJ54ZSZ9V7",
      img_link: "/certificates/nn_dl.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      link: "https://coursera.org/verify/STKQVERV29UV",
      img_link: "/certificates/unsupervised_learning.png",
      tags: ["Coursera", "DeepLearning.AI", "Stanford"]
    },
    {
      title: "Structuring Machine Learning Projects",
      link: "https://coursera.org/verify/R7DYVXDZXWUK",
      img_link: "/certificates/structuring_ml_projects.png",
      tags: ["Coursera", "DeepLearning.AI"]
    },
  ];