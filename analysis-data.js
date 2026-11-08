/* Authored sentence annotations, independent from personal progress. */
window.ClaroAnalysisData = {
  "tengo hambre": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 现在时，表示“我有”。"
      },
      {
        "text": "hambre.",
        "role": "object",
        "note": "hambre 是阴性名词，这里不加冠词。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "tener hambre 是“饿了”的固定表达，字面是“有饥饿感”。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "我饿了。"
  },
  "quiero comer": {
    "parts": [
      {
        "text": "Quiero",
        "role": "verb",
        "note": "querer 的 yo 现在时：我想要。"
      },
      {
        "text": "comer.",
        "role": "object",
        "note": "comer 是不定式，作 quiero 的补语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "只有 quiero 随人称变化；后面的 comer 保持原形。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "我想吃东西。"
  },
  "así que voy a preparar la comida": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "连接前面的原因，表示“所以”。"
      },
      {
        "text": "voy a preparar",
        "role": "verb",
        "note": "ir a + 不定式，表示接下来打算做。"
      },
      {
        "text": "la comida.",
        "role": "object",
        "note": "la comida 是阴性单数，表示这顿饭。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先抓主干：voy a preparar la comida，再加 así que 连接上句。",
    "grammarIds": [
      "g19",
      "g8",
      "g1"
    ],
    "fragment": false,
    "translation": "所以我打算做饭。"
  },
  "la comida de hoy es curry": {
    "parts": [
      {
        "text": "La comida de hoy",
        "role": "subject",
        "note": "主语的中心词是 comida；de hoy 说明“今天的”。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数现在时。"
      },
      {
        "text": "curry.",
        "role": "attribute",
        "note": "说明主语是什么，是表语。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是“某物是什么”的系表结构；curry 在这里不是直接宾语。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "今天这顿饭是咖喱。"
  },
  "¿qué ingredientes necesito para preparar curry": {
    "parts": [
      {
        "text": "¿Qué ingredientes",
        "role": "object",
        "note": "疑问词 qué + 名词复数，问“哪些食材”。"
      },
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "para preparar curry?",
        "role": "purpose",
        "note": "para + 不定式，说明需要食材的用途。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "疑问句把要问的宾语提到前面：需要什么？为了做什么？",
    "grammarIds": [
      "g19",
      "g10",
      "g11"
    ],
    "fragment": false,
    "translation": "做咖喱需要哪些食材呢？"
  },
  "hmmm": {
    "parts": [
      {
        "text": "HMMM",
        "role": "other",
        "note": "这是思考时的声音，不是一个需要分析主谓宾的完整句子。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是思考时的声音，不是一个需要分析主谓宾的完整句子。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "嗯……"
  },
  "hmmmmm": {
    "parts": [
      {
        "text": "hmmmmm",
        "role": "other",
        "note": "这是思考时的声音，不是一个需要分析主谓宾的完整句子。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是思考时的声音，不是一个需要分析主谓宾的完整句子。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "嗯……"
  },
  "especias": {
    "parts": [
      {
        "text": "Especias.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "香料。"
  },
  "curry, garam masala, comino": {
    "parts": [
      {
        "text": "curry, garam masala, comino",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "咖喱粉、葛拉姆马萨拉、孜然。"
  },
  "ajos": {
    "parts": [
      {
        "text": "ajos",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "大蒜。"
  },
  "una cabeza": {
    "parts": [
      {
        "text": "Una cabeza.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一整头。"
  },
  "un diente de ajo": {
    "parts": [
      {
        "text": "Un diente de ajo.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一瓣蒜。"
  },
  "una cabeza de ajo": {
    "parts": [
      {
        "text": "Una cabeza de ajo",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一整头蒜，"
  },
  "tres, cuatro dientes de ajo": {
    "parts": [
      {
        "text": "tres, cuatro dientes de ajo.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "三四瓣蒜。"
  },
  "tres o cuatro dientes de ajo": {
    "parts": [
      {
        "text": "Tres o cuatro dientes de ajo.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "三或四瓣蒜。"
  },
  "y una cebolla": {
    "parts": [
      {
        "text": "y una cebolla.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "以及一个洋葱。"
  },
  "zanahorias": {
    "parts": [
      {
        "text": "zanahorias",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "胡萝卜。"
  },
  "dos zanahorias": {
    "parts": [
      {
        "text": "Dos zanahorias.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "两根胡萝卜。"
  },
  "una batata": {
    "parts": [
      {
        "text": "Una batata",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一个红薯，"
  },
  "una papa, no": {
    "parts": [
      {
        "text": "Una papa, No.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "土豆？不是。"
  },
  "tomates": {
    "parts": [
      {
        "text": "Tomates,",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "西红柿，"
  },
  "dos zanahorias, una y dos": {
    "parts": [
      {
        "text": "dos zanahorias, Una y dos.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "两根胡萝卜，一根、两根。"
  },
  "y dos tomates": {
    "parts": [
      {
        "text": "y dos tomates.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "以及两个西红柿。"
  },
  "¡tofu": {
    "parts": [
      {
        "text": "¡Tofu!",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "豆腐！"
  },
  "las lentejas, los garbanzos": {
    "parts": [
      {
        "text": "Las lentejas, los garbanzos",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "小扁豆、鹰嘴豆，"
  },
  "dos zanahorias, una batata": {
    "parts": [
      {
        "text": "dos zanahorias, una batata.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "两根胡萝卜、一个红薯。"
  },
  "dos tomates. dos": {
    "parts": [
      {
        "text": "Dos tomates. Dos.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "两个西红柿。两个。"
  },
  "la leche de coco": {
    "parts": [
      {
        "text": "La leche de coco.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "椰奶。"
  },
  "leche de coco": {
    "parts": [
      {
        "text": "leche de coco.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "椰奶。"
  },
  "tres o cuatro": {
    "parts": [
      {
        "text": "Tres o cuatro:",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "三或四……"
  },
  "dientes de ajo": {
    "parts": [
      {
        "text": "Dientes de ajo.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "瓣蒜。"
  },
  "una": {
    "parts": [
      {
        "text": "una:",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一个……"
  },
  "cebolla amarilla": {
    "parts": [
      {
        "text": "Cebolla amarilla.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "黄洋葱。"
  },
  "dos": {
    "parts": [
      {
        "text": "Dos:",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "两个……"
  },
  "batata": {
    "parts": [
      {
        "text": "Batata.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "红薯。"
  },
  "lentejas": {
    "parts": [
      {
        "text": "lentejas,",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "小扁豆，"
  },
  "tofu": {
    "parts": [
      {
        "text": "tofu",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "豆腐，"
  },
  "y leche de coco": {
    "parts": [
      {
        "text": "y leche de coco.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "以及椰奶。"
  },
  "una olla": {
    "parts": [
      {
        "text": "Una olla.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一口锅。"
  },
  "esta olla": {
    "parts": [
      {
        "text": "esta olla",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "这口锅"
  },
  "las zanahorias, la cebolla, la batata": {
    "parts": [
      {
        "text": "las zanahorias, la cebolla, la batata.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "胡萝卜、洋葱、红薯。"
  },
  "ajo, cebolla, zanahorias, batata": {
    "parts": [
      {
        "text": "Ajo, cebolla, Zanahorias, batata,",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "大蒜、洋葱、胡萝卜、红薯，"
  },
  "tomate, tofu, lentejas y leche de coco": {
    "parts": [
      {
        "text": "tomate, tofu, lentejas y leche de coco.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "西红柿、豆腐、小扁豆，还有椰奶。"
  },
  "una espátula de metal": {
    "parts": [
      {
        "text": "Una espátula de metal.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一把金属锅铲。"
  },
  "una olla y una espátula": {
    "parts": [
      {
        "text": "Una olla y una espátula.",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一口锅和一把锅铲。"
  },
  "una tapa y una espátula": {
    "parts": [
      {
        "text": "Una tapa y una espátula",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一个盖子和一把锅铲，"
  },
  "una espátula, una tapa": {
    "parts": [
      {
        "text": "Una espátula, una tapa,",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一把锅铲、一个盖子，"
  },
  "un pelador y": {
    "parts": [
      {
        "text": "un pelador y...",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "一个削皮器，还有……"
  },
  "los ingredientes": {
    "parts": [
      {
        "text": "Los ingredientes",
        "role": "nominal",
        "note": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条是列举或名词短语，没有独立的限定动词；它的句法作用要连着前后字幕看。冠词、数词和修饰词都放回名词词块里记。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "这些食材。"
  },
  "como el curry": {
    "parts": [
      {
        "text": "Como",
        "role": "connector",
        "note": "这里是“例如”，不是 comer 的“我吃”。"
      },
      {
        "text": "el curry.",
        "role": "nominal",
        "note": "举出一种香料。"
      }
    ],
    "implicitSubject": "",
    "focus": "接着上一条 especias，用 como 举例。不要因为拼写相同就判为动词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "比如咖喱粉。"
  },
  "esto es curry": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "curry.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是咖喱粉。"
  },
  "esto es comino": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "comino.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是孜然。"
  },
  "esto es una cabeza de ajo": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "una cabeza de ajo.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是一整头蒜。"
  },
  "esto es un diente de ajo": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "un diente de ajo.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是一瓣蒜。"
  },
  "esto es tofu": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "tofu.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是豆腐。"
  },
  "esto es una tapa": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前的东西。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "una tapa.",
        "role": "attribute",
        "note": "表语：说明这个东西是什么。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto 是中性代词；后面的名词短语介绍眼前物品。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这是一个盖子。"
  },
  "es curry en polvo": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "curry",
        "role": "attribute",
        "note": "说明是什么。"
      },
      {
        "text": "en polvo.",
        "role": "modifier",
        "note": "介词短语，表示“粉末状的”。"
      }
    ],
    "implicitSubject": "esto / 眼前的东西",
    "focus": "en polvo 修饰 curry。把 curry en polvo 当作一个完整词块。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "是粉末状的咖喱。"
  },
  "curry amarillo": {
    "parts": [
      {
        "text": "Curry",
        "role": "nominal",
        "note": "名词及其限定成分。"
      },
      {
        "text": "amarillo.",
        "role": "modifier",
        "note": "形容词修饰前面的名词；留意阴阳性与单复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认出名词，再把形容词加回去。例如 cebolla amarilla 中两者都是阴性单数。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "黄色咖喱。"
  },
  "una cebolla amarilla": {
    "parts": [
      {
        "text": "Una cebolla",
        "role": "nominal",
        "note": "名词及其限定成分。"
      },
      {
        "text": "amarilla",
        "role": "modifier",
        "note": "形容词修饰前面的名词；留意阴阳性与单复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认出名词，再把形容词加回去。例如 cebolla amarilla 中两者都是阴性单数。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "一个黄洋葱，"
  },
  "una batata naranja": {
    "parts": [
      {
        "text": "Una batata",
        "role": "nominal",
        "note": "名词及其限定成分。"
      },
      {
        "text": "naranja.",
        "role": "modifier",
        "note": "形容词修饰前面的名词；留意阴阳性与单复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认出名词，再把形容词加回去。例如 cebolla amarilla 中两者都是阴性单数。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "一个橙色的红薯。"
  },
  "judías rojas": {
    "parts": [
      {
        "text": "Judías",
        "role": "nominal",
        "note": "名词及其限定成分。"
      },
      {
        "text": "rojas.",
        "role": "modifier",
        "note": "形容词修饰前面的名词；留意阴阳性与单复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认出名词，再把形容词加回去。例如 cebolla amarilla 中两者都是阴性单数。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "红色的菜豆。"
  },
  "una olla grande": {
    "parts": [
      {
        "text": "Una olla",
        "role": "nominal",
        "note": "名词及其限定成分。"
      },
      {
        "text": "grande.",
        "role": "modifier",
        "note": "形容词修饰前面的名词；留意阴阳性与单复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认出名词，再把形容词加回去。例如 cebolla amarilla 中两者都是阴性单数。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "一口大锅。"
  },
  "huele muy bien": {
    "parts": [
      {
        "text": "Huele",
        "role": "verb",
        "note": "oler 的第三人称单数，词干 o 变 hue。"
      },
      {
        "text": "muy bien.",
        "role": "modifier",
        "note": "muy 修饰 bien，表示“非常好”。"
      }
    ],
    "implicitSubject": "眼前的咖喱粉",
    "focus": "huele bien 表示“闻起来很好”。bien 是副词，不随名词性数变化。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "闻起来很好。"
  },
  "tengo curry, pero también tengo comino": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 形式。"
      },
      {
        "text": "curry,",
        "role": "object",
        "note": "第一项拥有的东西。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "转折连接词。"
      },
      {
        "text": "también",
        "role": "modifier",
        "note": "副词：也。"
      },
      {
        "text": "tengo",
        "role": "verb",
        "note": "第二分句仍是 yo。"
      },
      {
        "text": "comino.",
        "role": "object",
        "note": "第二项拥有的东西。"
      }
    ],
    "implicitSubject": "两个分句都省略 yo",
    "focus": "两个“我有……”用 pero 连接；también 修饰第二个 tengo。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "我有咖喱粉，但也有孜然。"
  },
  "y también tengo garam masala": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着前面的列举。"
      },
      {
        "text": "también",
        "role": "modifier",
        "note": "副词：也。"
      },
      {
        "text": "tengo",
        "role": "verb",
        "note": "tener 的 yo 现在时。"
      },
      {
        "text": "Garam Masala.",
        "role": "object",
        "note": "另一种混合香料。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 tengo Garam Masala；y、también 补上与前文的联系。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "我还有葛拉姆马萨拉混合香料。"
  },
  "esto son especias": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "esto 指眼前这一堆东西。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 的第三人称复数，与后面的复数名词呼应。"
      },
      {
        "text": "especias.",
        "role": "attribute",
        "note": "说明所指物品的类别。"
      }
    ],
    "implicitSubject": "",
    "focus": "口语里可以用中性 esto 指眼前一组东西，再用 son 引出复数名词；指具体阴性复数物品，也可以说 Estas son especias / legumbres。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这些是香料。"
  },
  "esto son legumbres": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "esto 指眼前这一堆东西。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 的第三人称复数，与后面的复数名词呼应。"
      },
      {
        "text": "legumbres.",
        "role": "attribute",
        "note": "说明所指物品的类别。"
      }
    ],
    "implicitSubject": "",
    "focus": "口语里可以用中性 esto 指眼前一组东西，再用 son 引出复数名词；指具体阴性复数物品，也可以说 Estas son especias / legumbres。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "这些是豆类。"
  },
  "pero necesito más ingredientes": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 形式。"
      },
      {
        "text": "más ingredientes",
        "role": "object",
        "note": "más 表示更多，ingredientes 是复数。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "这句的用途说明在下一条 para la base del curry 里。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "但我还需要更多食材，"
  },
  "para la base del curry": {
    "parts": [
      {
        "text": "para",
        "role": "purpose",
        "note": "介词：用于。"
      },
      {
        "text": "la base del curry.",
        "role": "nominal",
        "note": "la base 是底料，del = de + el，说明咖喱的底料。"
      }
    ],
    "implicitSubject": "",
    "focus": "接上句：necesito más ingredientes para la base del curry。这里 para 后接名词，不是不定式。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "用来做咖喱底料。"
  },
  "puedo usar las especias y": {
    "parts": [
      {
        "text": "Puedo usar",
        "role": "verb",
        "note": "poder 的 yo 形式 + usar 原形。"
      },
      {
        "text": "las especias",
        "role": "object",
        "note": "使用的东西。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "后面还有一项，接下一条 ajos。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "puedo 负责变位，usar 不变。字幕在 y 后断开，句意还没有结束。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": true,
    "translation": "我可以用这些香料，还有"
  },
  "y un diente de ajo": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接着列举。"
      },
      {
        "text": "un diente de ajo.",
        "role": "nominal",
        "note": "un diente 是一瓣，de ajo 说明是蒜瓣。"
      }
    ],
    "implicitSubject": "",
    "focus": "整头蒜是 cabeza de ajo，一瓣蒜是 diente de ajo；这是接上条的名词短语。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "和一瓣蒜。"
  },
  "voy a usar": {
    "parts": [
      {
        "text": "Voy a usar",
        "role": "verb",
        "note": "ir a + usar，近未来结构。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "这是谓语片段，宾语在下一条 tres, cuatro dientes de ajo 里。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": true,
    "translation": "我打算用"
  },
  "así que para la base": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以，承接前面的想法。"
      },
      {
        "text": "para la base,",
        "role": "purpose",
        "note": "用于底料；para 后面接名词短语。"
      }
    ],
    "implicitSubject": "",
    "focus": "当前只有连接词和用途短语。接下一条才看到主干：voy a usar las especias。不要给这条硬补一个谓语。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "所以，做底料时，"
  },
  "voy a usar las especias": {
    "parts": [
      {
        "text": "voy a usar",
        "role": "verb",
        "note": "ir a + 不定式，表示打算使用。"
      },
      {
        "text": "las especias.",
        "role": "object",
        "note": "阴性复数，las 与 especias 一致。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "这条补全上一条：Así que para la base, voy a usar las especias。",
    "grammarIds": [
      "g19",
      "g8",
      "g1"
    ],
    "fragment": false,
    "translation": "我打算用这些香料。"
  },
  "¿qué más puedo poner en este curry": {
    "parts": [
      {
        "text": "¿Qué más",
        "role": "object",
        "note": "“还有什么”，是被询问的宾语。"
      },
      {
        "text": "puedo poner",
        "role": "verb",
        "note": "poder 的 yo 形式 + poner 原形。"
      },
      {
        "text": "en este curry?",
        "role": "place",
        "note": "放进这份咖喱里；este 与阳性单数 curry 配合。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "把主干看成 puedo poner algo，再用 qué más 提问，把 en este curry 说明的范围加回来。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "这份咖喱里还能放什么呢？"
  },
  "voy a poner dos zanahorias": {
    "parts": [
      {
        "text": "Voy a poner",
        "role": "verb",
        "note": "ir a + poner：打算放入。"
      },
      {
        "text": "dos zanahorias.",
        "role": "object",
        "note": "数词 dos 后用复数名词。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "voy 随 yo 变位；poner 保持不定式。",
    "grammarIds": [
      "g19",
      "g8",
      "g1"
    ],
    "fragment": false,
    "translation": "我打算放两根胡萝卜。"
  },
  "voy a poner dos tomates": {
    "parts": [
      {
        "text": "Voy a poner",
        "role": "verb",
        "note": "ir a + poner：打算放入。"
      },
      {
        "text": "dos tomates.",
        "role": "object",
        "note": "数词 dos 后用复数名词。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "voy 随 yo 变位；poner 保持不定式。",
    "grammarIds": [
      "g19",
      "g8",
      "g1"
    ],
    "fragment": false,
    "translation": "我打算放两个西红柿。"
  },
  "así que mi curry va a llevar": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以。"
      },
      {
        "text": "mi curry",
        "role": "subject",
        "note": "mi curry 是主语。"
      },
      {
        "text": "va a llevar",
        "role": "verb",
        "note": "ir 的第三人称单数 va + a + llevar。"
      }
    ],
    "implicitSubject": "",
    "focus": "主语是 mi curry，所以是 va，不是 voy。这里 llevar 是“包含食材”；宾语接在下一条。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": true,
    "translation": "所以，我的咖喱会放"
  },
  "¿y qué más": {
    "parts": [
      {
        "text": "¿Y qué más?",
        "role": "other",
        "note": "qué más 表示“还有什么”。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是省略问句，可结合语境理解为“还要放什么？”；字幕可能同时带着上一个列举词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "还有什么呢？"
  },
  "¿qué más": {
    "parts": [
      {
        "text": "¿Qué más?",
        "role": "other",
        "note": "qué más 表示“还有什么”。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是省略问句，可结合语境理解为“还要放什么？”；字幕可能同时带着上一个列举词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "还有什么？"
  },
  "una batata ¿y qué más": {
    "parts": [
      {
        "text": "Una batata ¿Y qué más?",
        "role": "other",
        "note": "qué más 表示“还有什么”。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是省略问句，可结合语境理解为“还要放什么？”；字幕可能同时带着上一个列举词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "一个红薯。还有什么呢？"
  },
  "no es una patata": {
    "parts": [
      {
        "text": "No",
        "role": "modifier",
        "note": "否定放在动词前。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "una patata.",
        "role": "attribute",
        "note": "不定冠词 + 阴性单数名词。"
      }
    ],
    "implicitSubject": "眼前的食材",
    "focus": "patata 常指土豆，batata 指甘薯。这里通过否定再肯定区分两种食材。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "它不是土豆。"
  },
  "es una batata": {
    "parts": [
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "una batata.",
        "role": "attribute",
        "note": "不定冠词 + 阴性单数名词。"
      }
    ],
    "implicitSubject": "眼前的食材",
    "focus": "patata 常指土豆，batata 指甘薯。这里通过否定再肯定区分两种食材。",
    "grammarIds": [
      "g19",
      "g2",
      "g1"
    ],
    "fragment": false,
    "translation": "它是红薯。"
  },
  "mi favorita": {
    "parts": [
      {
        "text": "Mi favorita.",
        "role": "nominal",
        "note": "mi 是“我的”；favorita 阴性单数，承接 batata。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里把形容词 favorita 当作省略中心名词的表达：我最喜欢的那一种。",
    "grammarIds": [
      "g19",
      "g6"
    ],
    "fragment": true,
    "translation": "我最喜欢的那种。"
  },
  "así que este curry lleva": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以；承接前文。"
      },
      {
        "text": "este curry",
        "role": "subject",
        "note": "这份咖喱，第三人称单数。"
      },
      {
        "text": "lleva:",
        "role": "verb",
        "note": "llevar 的第三人称单数，现在时。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里 llevar 表示“含有、用到某种食材”。如果冒号后另起字幕，要把列举当作后续宾语。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": true,
    "translation": "所以，这份咖喱里有："
  },
  "así que este curry lleva especias": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以；承接前文。"
      },
      {
        "text": "este curry",
        "role": "subject",
        "note": "这份咖喱，第三人称单数。"
      },
      {
        "text": "lleva",
        "role": "verb",
        "note": "llevar 的第三人称单数，现在时。"
      },
      {
        "text": "especias.",
        "role": "object",
        "note": "包含的食材，阴性复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里 llevar 表示“含有、用到某种食材”。如果冒号后另起字幕，要把列举当作后续宾语。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "所以，这份咖喱里有香料。"
  },
  "entonces este curry lleva especias": {
    "parts": [
      {
        "text": "Entonces",
        "role": "connector",
        "note": "所以；承接前文。"
      },
      {
        "text": "este curry",
        "role": "subject",
        "note": "这份咖喱，第三人称单数。"
      },
      {
        "text": "lleva",
        "role": "verb",
        "note": "llevar 的第三人称单数，现在时。"
      },
      {
        "text": "especias.",
        "role": "object",
        "note": "包含的食材，阴性复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里 llevar 表示“含有、用到某种食材”。如果冒号后另起字幕，要把列举当作后续宾语。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "那么，这份咖喱里有香料。"
  },
  "este curry lleva": {
    "parts": [
      {
        "text": "Este curry",
        "role": "subject",
        "note": "这份咖喱，第三人称单数。"
      },
      {
        "text": "lleva:",
        "role": "verb",
        "note": "llevar 的第三人称单数，现在时。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里 llevar 表示“含有、用到某种食材”。如果冒号后另起字幕，要把列举当作后续宾语。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": true,
    "translation": "这份咖喱里有："
  },
  "tengo dos tomates": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 现在时。"
      },
      {
        "text": "dos tomates.",
        "role": "object",
        "note": "dos 后的 tomate 变复数 tomates。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "动词形式是 tengo；宾语是 dos tomates。",
    "grammarIds": [
      "g19",
      "g9",
      "g1"
    ],
    "fragment": false,
    "translation": "我有两个西红柿。"
  },
  "pero necesito algo de proteína": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "algo de proteína.",
        "role": "object",
        "note": "algo de + 名词：一些蛋白质。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "algo de 表示不确定的量；不要只把 de 单独翻成“的”。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "但我需要一些蛋白质。"
  },
  "pero también me gustaría": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "también",
        "role": "modifier",
        "note": "也。"
      },
      {
        "text": "me",
        "role": "indirect",
        "note": "me 表示喜欢／想要的人是我。"
      },
      {
        "text": "gustaría",
        "role": "verb",
        "note": "gustar 的条件式第三人称单数用法。"
      }
    ],
    "implicitSubject": "",
    "focus": "me gustaría + 不定式是比较委婉的“我还想……”。想做的事情在下一条 poner alguna legumbre 里。",
    "grammarIds": [
      "g19",
      "g5",
      "g15"
    ],
    "fragment": true,
    "translation": "但我还想"
  },
  "poner alguna legumbre": {
    "parts": [
      {
        "text": "poner",
        "role": "infinitive",
        "note": "poner 不定式，接上条 me gustaría。"
      },
      {
        "text": "alguna legumbre.",
        "role": "object",
        "note": "alguna 与阴性单数 legumbre 一致，表示某种豆类。"
      }
    ],
    "implicitSubject": "",
    "focus": "连起来读：me gustaría poner alguna legumbre。不要把这条当作独立变位句。",
    "grammarIds": [
      "g19",
      "g5",
      "g15"
    ],
    "fragment": true,
    "translation": "放一些豆类食材。"
  },
  "legumbres en lata": {
    "parts": [
      {
        "text": "Legumbres",
        "role": "nominal",
        "note": "豆类食材，阴性复数。"
      },
      {
        "text": "en lata.",
        "role": "modifier",
        "note": "en lata：罐装的；lata 在固定短语里用单数。"
      }
    ],
    "implicitSubject": "",
    "focus": "把 legumbres en lata 一起记，修饰成分放在名词后。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "罐装豆类。"
  },
  "estos son garbanzos": {
    "parts": [
      {
        "text": "Estos",
        "role": "subject",
        "note": "指示代词，指眼前的豆子。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 第三人称复数。"
      },
      {
        "text": "garbanzos.",
        "role": "attribute",
        "note": "名词复数，说明种类。"
      }
    ],
    "implicitSubject": "",
    "focus": "estos、son、garbanzos 都与复数一致。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这些是鹰嘴豆。"
  },
  "estos son judías": {
    "parts": [
      {
        "text": "Estos",
        "role": "subject",
        "note": "指示代词，指眼前的豆子。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 第三人称复数。"
      },
      {
        "text": "judías.",
        "role": "attribute",
        "note": "名词复数，说明种类。"
      }
    ],
    "implicitSubject": "",
    "focus": "garbanzos 为阳性复数，可用 estos；judías、lentejas 为阴性复数，标准配合应为 estas。保留原字幕，学习时注意修正。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这些是菜豆。"
  },
  "y estos son lentejas": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着列举。"
      },
      {
        "text": "estos",
        "role": "subject",
        "note": "指示代词，指眼前的豆子。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 第三人称复数。"
      },
      {
        "text": "lentejas.",
        "role": "attribute",
        "note": "名词复数，说明种类。"
      }
    ],
    "implicitSubject": "",
    "focus": "garbanzos 为阳性复数，可用 estos；judías、lentejas 为阴性复数，标准配合应为 estas。保留原字幕，学习时注意修正。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "还有，这些是小扁豆。"
  },
  "y las judías son legumbres": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "承接上条的并列主语。"
      },
      {
        "text": "las judías",
        "role": "subject",
        "note": "与前一条的 lentejas、garbanzos 一起组成主语。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 第三人称复数。"
      },
      {
        "text": "legumbres.",
        "role": "attribute",
        "note": "表语，说明它们属于豆类。"
      }
    ],
    "implicitSubject": "",
    "focus": "整句跨两条字幕，主语是 Las lentejas, los garbanzos y las judías。",
    "grammarIds": [
      "g19",
      "g1",
      "g2"
    ],
    "fragment": false,
    "translation": "以及菜豆，都属于豆类。"
  },
  "para este curry": {
    "parts": [
      {
        "text": "Para",
        "role": "purpose",
        "note": "用于。"
      },
      {
        "text": "este curry.",
        "role": "nominal",
        "note": "este 与阳性单数 curry 一致。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是一段用途短语，联系下条“我会用小扁豆”理解。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "做这份咖喱时，"
  },
  "yo voy a usar lentejas": {
    "parts": [
      {
        "text": "Yo",
        "role": "subject",
        "note": "明确说出的主语：我。"
      },
      {
        "text": "voy a usar",
        "role": "verb",
        "note": "ir a + usar，打算使用。"
      },
      {
        "text": "lentejas.",
        "role": "object",
        "note": "小扁豆，复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "西语主语 yo 可省略；这里说出来，和 voy 的人称一致。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": false,
    "translation": "我打算用小扁豆。"
  },
  "también se puede llamar boniato": {
    "parts": [
      {
        "text": "También",
        "role": "modifier",
        "note": "也。"
      },
      {
        "text": "se puede llamar",
        "role": "verb",
        "note": "se + poder + llamar，表示“可以被叫作”。"
      },
      {
        "text": "boniato.",
        "role": "attribute",
        "note": "名称补语，说明叫什么。"
      }
    ],
    "implicitSubject": "前面提到的 batata",
    "focus": "也可以叫 boniato。这里是命名表达，不要将 se 机械翻成“他自己”。",
    "grammarIds": [
      "g19",
      "g7",
      "g10"
    ],
    "fragment": false,
    "translation": "它也可以叫作 boniato（红薯）。"
  },
  "tofu para proteína y lentejas": {
    "parts": [
      {
        "text": "tofu",
        "role": "nominal",
        "note": "豆腐。"
      },
      {
        "text": "para proteína",
        "role": "purpose",
        "note": "用于提供蛋白质，口语压缩表达。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接列举。"
      },
      {
        "text": "lentejas.",
        "role": "nominal",
        "note": "小扁豆。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是一段继续列举食材的字幕，没有独立限定动词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "提供蛋白质的豆腐，还有小扁豆。"
  },
  "algo más": {
    "parts": [
      {
        "text": "Algo",
        "role": "nominal",
        "note": "某样东西。"
      },
      {
        "text": "más...",
        "role": "modifier",
        "note": "更多的；别的。"
      }
    ],
    "implicitSubject": "",
    "focus": "algo más 是“还有别的东西”。这里省略了完整问句。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "还差点什么……"
  },
  "lo más importante": {
    "parts": [
      {
        "text": "lo más importante.",
        "role": "nominal",
        "note": "lo + más + 形容词，表示“最重要的事情／东西”。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里 lo 是中性冠词，把形容词短语名词化；不是代替某个阳性名词的直接宾语代词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "最重要的东西。"
  },
  "todo buen curry tiene que llevar": {
    "parts": [
      {
        "text": "Todo buen curry",
        "role": "subject",
        "note": "todo + 单数名词：每一份好咖喱；bueno 放在阳性单数名词前变 buen。"
      },
      {
        "text": "tiene que llevar",
        "role": "verb",
        "note": "tener que + 不定式，表示必须包含。"
      }
    ],
    "implicitSubject": "",
    "focus": "tiene 与主语 curry 配合；llevar 保持原形。宾语 leche de coco 在下一条。",
    "grammarIds": [
      "g19",
      "g13",
      "g6"
    ],
    "fragment": true,
    "translation": "每一份好咖喱都得放"
  },
  "entonces, a ver si lo habéis aprendido": {
    "parts": [
      {
        "text": "Entonces,",
        "role": "connector",
        "note": "那么。"
      },
      {
        "text": "a ver si",
        "role": "other",
        "note": "口语引导语：看看是否……。"
      },
      {
        "text": "lo",
        "role": "object",
        "note": "指前面列举的内容，直接宾语代词。"
      },
      {
        "text": "habéis aprendido.",
        "role": "verb",
        "note": "haber 的 vosotros 形式 + 过去分词 aprendido。"
      }
    ],
    "implicitSubject": "vosotros/as（你们，西班牙常用）",
    "focus": "habéis aprendido 是现在完成时，不是单独的过去时变位；lo 放在助动词前。",
    "grammarIds": [
      "g19",
      "g16",
      "g14"
    ],
    "fragment": false,
    "translation": "那么，来看看你们记住了没有。"
  },
  "para cocinar todo esto": {
    "parts": [
      {
        "text": "para cocinar",
        "role": "purpose",
        "note": "para + cocinar，说明目的。"
      },
      {
        "text": "Todo esto,",
        "role": "object",
        "note": "todo esto 是 cocinar 的宾语。"
      }
    ],
    "implicitSubject": "",
    "focus": "接下条：Para cocinar todo esto, necesito una olla。字幕大写 Todo 不改变句法。",
    "grammarIds": [
      "g19",
      "g11"
    ],
    "fragment": true,
    "translation": "为了烹饪这些食材，"
  },
  "necesito una olla": {
    "parts": [
      {
        "text": "Necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "una olla.",
        "role": "object",
        "note": "需要的东西；名词短语作宾语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito + 需要的东西；名词后的 para 短语说明用途。más grande 是“更大的”。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "我需要一口锅。"
  },
  "necesito una olla más grande": {
    "parts": [
      {
        "text": "Necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "una olla más grande.",
        "role": "object",
        "note": "需要的东西；名词短语作宾语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito + 需要的东西；名词后的 para 短语说明用途。más grande 是“更大的”。",
    "grammarIds": [
      "g19",
      "g10",
      "g12"
    ],
    "fragment": false,
    "translation": "我需要一口更大的锅。"
  },
  "necesito una tapa para tapar la olla": {
    "parts": [
      {
        "text": "Necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "una tapa para tapar la olla.",
        "role": "object",
        "note": "需要的东西；名词短语作宾语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito + 需要的东西；名词后的 para 短语说明用途。más grande 是“更大的”。",
    "grammarIds": [
      "g19",
      "g10",
      "g11"
    ],
    "fragment": false,
    "translation": "我需要一个盖子来盖锅。"
  },
  "necesito un pelador": {
    "parts": [
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "un pelador",
        "role": "object",
        "note": "需要的东西；名词短语作宾语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito + 需要的东西；名词后的 para 短语说明用途。más grande 是“更大的”。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "我需要一个削皮器，"
  },
  "y necesito un cuchillo": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接着前文。"
      },
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      },
      {
        "text": "un cuchillo.",
        "role": "object",
        "note": "需要的东西；名词短语作宾语。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito + 需要的东西；名词后的 para 短语说明用途。más grande 是“更大的”。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "还需要一把刀。"
  },
  "pero también necesito": {
    "parts": [
      {
        "text": "Pero también",
        "role": "connector",
        "note": "接着前文。"
      },
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 现在时。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "这一条还没有说完，需要做的事情在下一条 preparar los ingredientes。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": true,
    "translation": "不过，我还需要"
  },
  "pero": {
    "parts": [
      {
        "text": "Pero...",
        "role": "connector",
        "note": "pero 是“但是”，这条只留下一个连接词，后面的内容接在下一条。"
      }
    ],
    "implicitSubject": "",
    "focus": "pero 是“但是”，这条只留下一个连接词，后面的内容接在下一条。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "但是……"
  },
  "es muy pequeña": {
    "parts": [
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "muy pequeña.",
        "role": "attribute",
        "note": "muy 是副词；pequeña 阴性单数，与上条 olla 配合。"
      }
    ],
    "implicitSubject": "esta olla（这口锅，在上一条）",
    "focus": "主语在上一条 esta olla；连起来是 esta olla es muy pequeña。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "太小了。"
  },
  "a ver": {
    "parts": [
      {
        "text": "A ver.",
        "role": "other",
        "note": "a ver 是口语里的“看看／让我看看”，不等于 haber。"
      }
    ],
    "implicitSubject": "",
    "focus": "a ver 是口语里的“看看／让我看看”，不等于 haber。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "让我看看。"
  },
  "caben los dientes de ajo": {
    "parts": [
      {
        "text": "Caben",
        "role": "verb",
        "note": "caber 的第三人称复数。"
      },
      {
        "text": "los dientes de ajo,",
        "role": "subject",
        "note": "真正的主语放在动词后：蒜瓣。"
      }
    ],
    "implicitSubject": "",
    "focus": "意思是“蒜瓣放得下”。后面还会列举其他主语；不要把动词后所有名词都判为宾语。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": true,
    "translation": "蒜瓣放得下，"
  },
  "y ya": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "和；接着。"
      },
      {
        "text": "ya.",
        "role": "other",
        "note": "到此为止。"
      }
    ],
    "implicitSubject": "",
    "focus": "口语中 y ya 可以表示“就这样／只能这些了”。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "也就这些了。"
  },
  "ya no caben más ingredientes": {
    "parts": [
      {
        "text": "Ya",
        "role": "time",
        "note": "到这时；已经。"
      },
      {
        "text": "no",
        "role": "modifier",
        "note": "否定在变位动词前。"
      },
      {
        "text": "caben",
        "role": "verb",
        "note": "caber 第三人称复数。"
      },
      {
        "text": "más ingredientes.",
        "role": "subject",
        "note": "主语：更多食材，放在动词后。"
      }
    ],
    "implicitSubject": "",
    "focus": "caber 表示“放得下”，是食材能否放入锅里；más ingredientes 决定用 caben。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "已经放不下更多食材了。"
  },
  "no, no caben": {
    "parts": [
      {
        "text": "No,",
        "role": "other",
        "note": "先独立回答“不”。"
      },
      {
        "text": "no",
        "role": "modifier",
        "note": "第二个 no 是否定动词。"
      },
      {
        "text": "caben.",
        "role": "verb",
        "note": "caber 第三人称复数。"
      }
    ],
    "implicitSubject": "los ingredientes（前文的食材）",
    "focus": "两个 no 各有作用：前者是回答，后者属于 no caben。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "不，放不下了。"
  },
  "esta olla es muy pequeña": {
    "parts": [
      {
        "text": "Esta olla",
        "role": "subject",
        "note": "esta + 阴性单数名词。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "muy pequeña",
        "role": "attribute",
        "note": "muy 修饰形容词；pequeña 与 olla 配合。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是主语 + 系动词 + 表语，表达锅的尺寸特征。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这口锅太小了。"
  },
  "vamos a ver si caben los ingredientes": {
    "parts": [
      {
        "text": "Vamos a ver",
        "role": "verb",
        "note": "ir 的 nosotros 形式 + a + ver，口语里“我们来看看”。"
      },
      {
        "text": "si caben los ingredientes.",
        "role": "object",
        "note": "si 引出“是否”；内部 caben 的主语是 los ingredientes。"
      }
    ],
    "implicitSubject": "nosotros/as（主句）",
    "focus": "主句是 vamos a ver；宾语从句里主语后置。分清两层，不能让 ingredientes 决定 vamos 的人称。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": false,
    "translation": "我们来看看这些食材放不放得下。"
  },
  "cabe todo dentro de la olla": {
    "parts": [
      {
        "text": "Cabe",
        "role": "verb",
        "note": "caber 的第三人称单数。"
      },
      {
        "text": "todo",
        "role": "subject",
        "note": "todo：所有东西，整体看作单数主语。"
      },
      {
        "text": "dentro de la olla.",
        "role": "place",
        "note": "dentro de：在……里面。"
      }
    ],
    "implicitSubject": "",
    "focus": "todo 是主语，所以用 cabe；前面的复数 ingredientes 则用 caben。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "所有东西都能放进锅里。"
  },
  "es el tamaño perfecto": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "el tamaño perfecto.",
        "role": "attribute",
        "note": "阳性单数名词 tamaño，perfecto 与之配合。"
      }
    ],
    "implicitSubject": "这口锅的尺寸",
    "focus": "表示“尺寸正合适”。这是系表结构。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "尺寸正合适。"
  },
  "están todos los ingredientes": {
    "parts": [
      {
        "text": "Están",
        "role": "verb",
        "note": "estar 第三人称复数。"
      },
      {
        "text": "todos los ingredientes.",
        "role": "subject",
        "note": "主语后置，todos 与 ingredientes 都是阳性复数。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里表示食材都在（锅里），用 estar；不是 hay 引入新东西。",
    "grammarIds": [
      "g19",
      "g2",
      "g4"
    ],
    "fragment": false,
    "translation": "所有食材都在里面了。"
  },
  "pero aparte de una olla grande": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "aparte de una olla grande,",
        "role": "modifier",
        "note": "aparte de：除了……之外；grande 修饰 olla。"
      }
    ],
    "implicitSubject": "",
    "focus": "当前是补充条件，主干 necesito algo 在下一条。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "不过，除了一口大锅，"
  },
  "necesito algo para remover": {
    "parts": [
      {
        "text": "necesito",
        "role": "verb",
        "note": "necesitar 的 yo 形式。"
      },
      {
        "text": "algo",
        "role": "object",
        "note": "某样东西。"
      },
      {
        "text": "para remover.",
        "role": "purpose",
        "note": "para + remover，说明工具用途：用来搅拌。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 necesito algo，再用 para remover 说明“要它做什么”。",
    "grammarIds": [
      "g19",
      "g10",
      "g11"
    ],
    "fragment": false,
    "translation": "我还需要一个用来搅拌的东西。"
  },
  "para remover los ingredientes": {
    "parts": [
      {
        "text": "para remover",
        "role": "purpose",
        "note": "para + 不定式，说明目的。"
      },
      {
        "text": "los ingredientes.",
        "role": "object",
        "note": "是这个不定式的宾语。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是目的短语，需连着前后字幕看；para 后的动词保持原形。",
    "grammarIds": [
      "g19",
      "g11"
    ],
    "fragment": true,
    "translation": "用来搅拌食材。"
  },
  "para preparar los ingredientes": {
    "parts": [
      {
        "text": "Para preparar",
        "role": "purpose",
        "note": "para + 不定式，说明目的。"
      },
      {
        "text": "los ingredientes",
        "role": "object",
        "note": "是这个不定式的宾语。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是目的短语，需连着前后字幕看；para 后的动词保持原形。",
    "grammarIds": [
      "g19",
      "g11"
    ],
    "fragment": true,
    "translation": "为了处理食材，"
  },
  "perfecto": {
    "parts": [
      {
        "text": "Perfecto.",
        "role": "other",
        "note": "Perfecto 是口语里的“好极了／就这样”，这里是独立回应。"
      }
    ],
    "implicitSubject": "",
    "focus": "Perfecto 是口语里的“好极了／就这样”，这里是独立回应。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "太好了。"
  },
  "tenemos los ingredientes": {
    "parts": [
      {
        "text": "Tenemos",
        "role": "verb",
        "note": "tener 的 nosotros 现在时。"
      },
      {
        "text": "los ingredientes.",
        "role": "object",
        "note": "已说过的食材，用定冠词 los。"
      }
    ],
    "implicitSubject": "nosotros/as（我们）",
    "focus": "tenemos 表示“我们有”；主语人称已经包含在变位里。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "我们有这些食材了。"
  },
  "pero necesito tapar": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "necesito tapar.",
        "role": "verb",
        "note": "necesitar 的 yo 形式 + tapar 原形。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "需要盖上（锅）。具体盖什么在下一条 tapar la olla 里补出。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": false,
    "translation": "但我还需要把锅盖上。"
  },
  "tapar la olla": {
    "parts": [
      {
        "text": "Tapar",
        "role": "infinitive",
        "note": "tapar 原形。"
      },
      {
        "text": "la olla.",
        "role": "object",
        "note": "被盖上的东西，阴性单数。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是补充上条的动作短语，tapar 没有独立的人称时态。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": true,
    "translation": "盖上这口锅。"
  },
  "necesito cubrirla": {
    "parts": [
      {
        "text": "Necesito",
        "role": "verb",
        "note": "necesitar 的 yo 形式。"
      },
      {
        "text": "cubrirla.",
        "role": "object",
        "note": "cubrir + la；la 指前文阴性单数 olla。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "不定式后的直接宾语代词可以连写：cubrir + la → cubrirla。",
    "grammarIds": [
      "g19",
      "g10",
      "g14"
    ],
    "fragment": false,
    "translation": "我需要把它盖住。"
  },
  "tengo una olla": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 形式。"
      },
      {
        "text": "una olla.",
        "role": "object",
        "note": "不定冠词 + 阴性单数名词。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先抓“我有一口锅”，再听下一条继续列举。",
    "grammarIds": [
      "g19",
      "g9",
      "g1"
    ],
    "fragment": false,
    "translation": "我有一口锅。"
  },
  "preparar los ingredientes": {
    "parts": [
      {
        "text": "preparar",
        "role": "infinitive",
        "note": "原形，接上条 necesito。"
      },
      {
        "text": "los ingredientes.",
        "role": "object",
        "note": "准备的东西。"
      }
    ],
    "implicitSubject": "与上条一致，yo",
    "focus": "与上条合起来是 necesito preparar los ingredientes。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": true,
    "translation": "准备这些食材。"
  },
  "con este pelador pelo las zanahorias": {
    "parts": [
      {
        "text": "con este pelador",
        "role": "companion",
        "note": "con + 工具；este 与阳性 pelador 配合。"
      },
      {
        "text": "pelo",
        "role": "verb",
        "note": "pelar 的 yo 现在时，意为“我削皮”。"
      },
      {
        "text": "las zanahorias",
        "role": "object",
        "note": "削皮的对象，阴性复数。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "此处 pelo 是动词 pelar 的变位，不是名词“头发”。工具短语放到句首，用来强调用什么。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "我用这个削皮器给胡萝卜削皮，"
  },
  "y pelo la batata": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接上条，表示“还”。"
      },
      {
        "text": "pelo",
        "role": "verb",
        "note": "pelar 的 yo 现在时。"
      },
      {
        "text": "la batata",
        "role": "object",
        "note": "削皮的对象，阴性单数。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "主语继续省略；pelo 随 yo 变位。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": false,
    "translation": "也给红薯削皮。"
  },
  "tengo un cuchillo pequeño": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 形式。"
      },
      {
        "text": "un cuchillo pequeño",
        "role": "object",
        "note": "宾语内 pequeño 修饰阳性单数 cuchillo。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "形容词在名词后，性数一致。后续的“和一把大刀”仍是并列宾语。",
    "grammarIds": [
      "g19",
      "g9",
      "g6"
    ],
    "fragment": false,
    "translation": "我有一把小刀，"
  },
  "y un cuchillo grande": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接着并列列举。"
      },
      {
        "text": "un cuchillo grande.",
        "role": "nominal",
        "note": "grande 修饰 cuchillo，阳性阴性都用 grande。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条没有新的动词，承接上条 tengo。",
    "grammarIds": [
      "g19",
      "g6"
    ],
    "fragment": true,
    "translation": "以及一把大刀。"
  },
  "voy a usar el cuchillo grande": {
    "parts": [
      {
        "text": "Voy a usar",
        "role": "verb",
        "note": "ir a + usar：打算使用。"
      },
      {
        "text": "el cuchillo grande.",
        "role": "object",
        "note": "el 表示这里已经提到的那把大刀。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 voy a usar，再用名词短语说明用哪一把。",
    "grammarIds": [
      "g19",
      "g8",
      "g1"
    ],
    "fragment": false,
    "translation": "我打算用这把大刀。"
  },
  "así que tenemos una olla": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以。"
      },
      {
        "text": "tenemos",
        "role": "verb",
        "note": "tener 的 nosotros 现在时。"
      },
      {
        "text": "una olla.",
        "role": "object",
        "note": "列举拥有的第一样工具。"
      }
    ],
    "implicitSubject": "nosotros/as（我们）",
    "focus": "tenemos 是“我们有”，与 tengo（我有）区分。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "所以，我们有一口锅。"
  },
  "un cuchillo grande para cortar": {
    "parts": [
      {
        "text": "un cuchillo grande",
        "role": "nominal",
        "note": "一把大刀，接上面的列举。"
      },
      {
        "text": "para cortar.",
        "role": "purpose",
        "note": "para + cortar，说明用途。"
      }
    ],
    "implicitSubject": "",
    "focus": "先看是什么工具，再补“用来切东西”。",
    "grammarIds": [
      "g19",
      "g11",
      "g6"
    ],
    "fragment": true,
    "translation": "一把用来切东西的大刀。"
  },
  "y solo faltaría una cosa más": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着前文。"
      },
      {
        "text": "solo",
        "role": "modifier",
        "note": "只；仅。"
      },
      {
        "text": "faltaría",
        "role": "verb",
        "note": "faltar 的条件式第三人称单数。"
      },
      {
        "text": "una cosa más.",
        "role": "subject",
        "note": "主语放在后面：还剩的一样东西。"
      }
    ],
    "implicitSubject": "",
    "focus": "faltar 表示“缺少”，缺的东西是主语；una cosa 单数，对应 faltaría。条件式使表达更委婉。",
    "grammarIds": [
      "g19",
      "g15"
    ],
    "fragment": false,
    "translation": "只差一样东西了。"
  },
  "la tabla de cortar": {
    "parts": [
      {
        "text": "La tabla",
        "role": "nominal",
        "note": "砧板的中心名词，阴性单数。"
      },
      {
        "text": "de cortar",
        "role": "modifier",
        "note": "de + 不定式构成名称的一部分，说明用途。"
      }
    ],
    "implicitSubject": "",
    "focus": "tabla de cortar 是砧板。固定名称里的 de 不要直接换成 para。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "砧板。"
  },
  "en la tabla de cortar": {
    "parts": [
      {
        "text": "en",
        "role": "place",
        "note": "介词，表示在……上。"
      },
      {
        "text": "la tabla de cortar",
        "role": "nominal",
        "note": "砧板，定冠词 la 对应阴性单数 tabla。"
      }
    ],
    "implicitSubject": "",
    "focus": "这条是地点短语，接下一条 corto con el cuchillo。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "在砧板上，"
  },
  "corto con el cuchillo": {
    "parts": [
      {
        "text": "corto",
        "role": "verb",
        "note": "cortar 的 yo 现在时。"
      },
      {
        "text": "con el cuchillo",
        "role": "companion",
        "note": "con + 工具：用这把刀。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "地点在上一条，宾语在下一条。连读：en la tabla de cortar, corto con el cuchillo los ingredientes。",
    "grammarIds": [
      "g19",
      "g3"
    ],
    "fragment": true,
    "translation": "我用刀切"
  },
  "y ya estaría": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着前面。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "到这里；这就。"
      },
      {
        "text": "estaría.",
        "role": "verb",
        "note": "estar 条件式，口语里表示“这样就好了”。"
      }
    ],
    "implicitSubject": "这件事 / 准备工作",
    "focus": "这里 estaría 是收尾的委婉说法，不应机械理解为未来一定发生的事。",
    "grammarIds": [
      "g19",
      "g15"
    ],
    "fragment": false,
    "translation": "这样就好了。"
  },
  "estoy lista para preparar el curry": {
    "parts": [
      {
        "text": "Estoy",
        "role": "verb",
        "note": "estar 的 yo 现在时，表示状态。"
      },
      {
        "text": "lista",
        "role": "attribute",
        "note": "lista 阴性单数，与说话者配合。"
      },
      {
        "text": "para preparar el curry.",
        "role": "purpose",
        "note": "para + preparar，说明准备好做什么。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "estar listo/a para + 不定式：准备好做……。女性说话者用 lista，男性通常用 listo。",
    "grammarIds": [
      "g19",
      "g2",
      "g6",
      "g11"
    ],
    "fragment": false,
    "translation": "我已经准备好做咖喱了。"
  },
  "¡hola! me llamo ana y vivo en madrid": {
    "parts": [
      {
        "text": "¡Hola!",
        "role": "other",
        "note": "独立的问候语。"
      },
      {
        "text": "Me llamo",
        "role": "verb",
        "note": "llamarse 的 yo 形式；me 与 llamo 一起变化。"
      },
      {
        "text": "Ana",
        "role": "attribute",
        "note": "名字补语。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接两个分句。"
      },
      {
        "text": "vivo",
        "role": "verb",
        "note": "vivir 的 yo 现在时。"
      },
      {
        "text": "en Madrid.",
        "role": "place",
        "note": "居住地点。"
      }
    ],
    "implicitSubject": "yo（两个分句）",
    "focus": "两个分句都以 yo 为隐含主语；先看 me llamo Ana 和 vivo，再补地点。",
    "grammarIds": [
      "g19",
      "g7",
      "g3"
    ],
    "fragment": false
  },
  "soy estudiante y tengo veinte años": {
    "parts": [
      {
        "text": "Soy",
        "role": "verb",
        "note": "ser 的 yo 形式。"
      },
      {
        "text": "estudiante",
        "role": "attribute",
        "note": "身份，职业／身份常不加不定冠词。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "并列连接。"
      },
      {
        "text": "tengo",
        "role": "verb",
        "note": "tener 的 yo 形式。"
      },
      {
        "text": "veinte años.",
        "role": "object",
        "note": "年龄表达。"
      }
    ],
    "implicitSubject": "yo（两个分句）",
    "focus": "身份用 ser；年龄用 tener。两个动词都与 yo 配合。",
    "grammarIds": [
      "g19",
      "g2",
      "g9"
    ],
    "fragment": false
  },
  "por la mañana, voy a un café cerca de mi casa": {
    "parts": [
      {
        "text": "Por la mañana,",
        "role": "time",
        "note": "时间短语：在早上。"
      },
      {
        "text": "voy",
        "role": "verb",
        "note": "ir 的 yo 现在时。"
      },
      {
        "text": "a un café",
        "role": "place",
        "note": "a + 地点，表示去哪里。"
      },
      {
        "text": "cerca de mi casa.",
        "role": "modifier",
        "note": "修饰 café：在我家附近。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "这里 voy a 后面是地点，不是动词原形，所以不是近未来结构。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": false
  },
  "el café es pequeño y tranquilo": {
    "parts": [
      {
        "text": "El café",
        "role": "subject",
        "note": "阳性单数名词，指咖啡馆。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "pequeño y tranquilo.",
        "role": "attribute",
        "note": "两个形容词作表语，都与 café 配合。"
      }
    ],
    "implicitSubject": "",
    "focus": "pequeño 与 tranquilo 都用阳性单数，描述咖啡馆的特征。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false
  },
  "hay dos libros en la mesa": {
    "parts": [
      {
        "text": "Hay",
        "role": "verb",
        "note": "haber 的非人称存在用法。"
      },
      {
        "text": "dos libros",
        "role": "object",
        "note": "存在的东西；这里是直接宾语。"
      },
      {
        "text": "en la mesa.",
        "role": "place",
        "note": "存在的地点。"
      }
    ],
    "implicitSubject": "",
    "focus": "hay 没有普通人称主语，后面即使是复数也不变成复数形式。",
    "grammarIds": [
      "g19",
      "g4",
      "g1"
    ],
    "fragment": false
  },
  "me gusta leer junto a la ventana": {
    "parts": [
      {
        "text": "Me",
        "role": "indirect",
        "note": "喜欢的人是我，间接宾语。"
      },
      {
        "text": "gusta",
        "role": "verb",
        "note": "gustar 第三人称单数。"
      },
      {
        "text": "leer",
        "role": "subject",
        "note": "不定式短语作主语：阅读这件事。"
      },
      {
        "text": "junto a la ventana.",
        "role": "place",
        "note": "修饰 leer，说明在哪里读书。"
      }
    ],
    "implicitSubject": "",
    "focus": "先认结构“阅读使我喜欢”；主语是 leer，不是 me，所以用 gusta。",
    "grammarIds": [
      "g19",
      "g5"
    ],
    "fragment": false
  },
  "la biblioteca está cerca de mi casa": {
    "parts": [
      {
        "text": "La biblioteca",
        "role": "subject",
        "note": "已确定的图书馆，阴性单数。"
      },
      {
        "text": "está",
        "role": "verb",
        "note": "estar 的第三人称单数。"
      },
      {
        "text": "cerca de mi casa.",
        "role": "place",
        "note": "cerca de：在……附近。"
      }
    ],
    "implicitSubject": "",
    "focus": "说明已知事物的位置用 estar；首次介绍存在某物可用 hay。",
    "grammarIds": [
      "g19",
      "g2",
      "g4"
    ],
    "fragment": false
  },
  "hoy voy a estudiar español, poco a poco": {
    "parts": [
      {
        "text": "Hoy",
        "role": "time",
        "note": "时间：今天。"
      },
      {
        "text": "voy a estudiar",
        "role": "verb",
        "note": "ir a + estudiar，打算学习。"
      },
      {
        "text": "español,",
        "role": "object",
        "note": "学习的内容。"
      },
      {
        "text": "poco a poco.",
        "role": "modifier",
        "note": "方式：一点一点地。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先抓 voy a estudiar español，再加时间 hoy 和方式 poco a poco。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": false
  },
  "ayer pasé una noche horrible": {
    "parts": [
      {
        "text": "Ayer",
        "role": "time",
        "note": "昨天，交代动作发生的时间。"
      },
      {
        "text": "pasé",
        "role": "verb",
        "note": "pasar 的 yo 简单过去时；pasé 的 é 有重音。"
      },
      {
        "text": "una noche horrible.",
        "role": "object",
        "note": "度过的那一晚；horrible 修饰阴性名词 noche，词尾不因性别改变。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先看 pasé una noche，再加 ayer 和 horrible：我昨天度过了怎样的一晚。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "昨天我度过了一个糟糕的夜晚。",
    "vocabulary": [
      {
        "word": "noche",
        "meaning": "夜晚",
        "lexical": {
          "part": "noun",
          "lemma": "noche",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "pasé",
        "meaning": "我度过了",
        "lexical": {
          "part": "verb",
          "lemma": "pasar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "preterito",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "fue la noche más calurosa": {
    "parts": [
      {
        "text": "Fue",
        "role": "verb",
        "note": "ser 的第三人称单数简单过去时。"
      },
      {
        "text": "la noche más calurosa",
        "role": "attribute",
        "note": "说明那晚是什么样的；la + 名词 + más + 形容词构成最高级。"
      }
    ],
    "implicitSubject": "前文那一晚",
    "focus": "主干是“那晚是最热的一晚”。下一段 que he pasado… 限定“在什么范围内最热”。",
    "grammarIds": [
      "g19",
      "g2",
      "g6",
      "g12"
    ],
    "fragment": true,
    "translation": "那是最热的一晚……",
    "vocabulary": [
      {
        "word": "noche",
        "meaning": "夜晚",
        "lexical": {
          "part": "noun",
          "lemma": "noche",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Fue",
        "meaning": "那是；ser 的过去时",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "preterito",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "calurosa",
        "meaning": "炎热的",
        "lexical": {
          "part": "adjective",
          "lemma": "caluroso",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "que he pasado en toda mi estancia en la furgoneta": {
    "parts": [
      {
        "text": "que",
        "role": "object",
        "note": "关系代词承接上一段 noche；在 he pasado 内充当“度过”的宾语。"
      },
      {
        "text": "he pasado",
        "role": "verb",
        "note": "haber 的 yo 现在时 he + 过去分词 pasado。"
      },
      {
        "text": "en toda mi estancia en la furgoneta.",
        "role": "time",
        "note": "在住厢式车的整个期间，限定经历的时间范围。"
      }
    ],
    "implicitSubject": "yo（我，关系从句）",
    "focus": "接上条：la noche más calurosa que he pasado…；这里 que 不是新主语，做出经历的人仍是 yo。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": true,
    "translation": "……是我住在这辆厢式车以来经历过的最热的一晚。",
    "vocabulary": [
      {
        "word": "estancia",
        "meaning": "停留／居住的这段期间",
        "lexical": {
          "part": "noun",
          "lemma": "estancia",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "furgoneta",
        "meaning": "厢式车；这里是旅行住的车",
        "lexical": {
          "part": "noun",
          "lemma": "furgoneta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "he pasado",
        "meaning": "我经历过；现在完成时",
        "lexical": {
          "part": "verb",
          "lemma": "pasar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "y ahora son las 10:00 de la mañana": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着讲现在的情况。"
      },
      {
        "text": "ahora",
        "role": "time",
        "note": "现在。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "ser 的报时用法，十点用复数 son。"
      },
      {
        "text": "las 10:00",
        "role": "attribute",
        "note": "所报的时刻；这是时间表达，不是直接宾语。"
      },
      {
        "text": "de la mañana,",
        "role": "modifier",
        "note": "说明是上午的十点。"
      }
    ],
    "implicitSubject": "报时表达",
    "focus": "先认 son las diez，再补 ahora 与 de la mañana。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "现在是上午十点，",
    "vocabulary": [
      {
        "word": "son",
        "meaning": "是；这里用于报时或指认",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      }
    ]
  },
  "así que voy a aprovechar e ir a visitar el pueblo de hoy": {
    "parts": [
      {
        "text": "así que",
        "role": "connector",
        "note": "所以，连接前面的时间情况。"
      },
      {
        "text": "voy a aprovechar e ir a visitar",
        "role": "verb",
        "note": "voy a 管辖 aprovechar 和 ir a visitar 两个计划；ir 以 /i/ 起头，前面的 y 变成 e。"
      },
      {
        "text": "el pueblo de hoy.",
        "role": "object",
        "note": "今天要逛的小镇；de hoy 修饰 pueblo。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "主干是“我打算利用时间去参观小镇”；前后两个 a 所在结构要连着理解。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": false,
    "translation": "所以我打算利用这会儿时间，去逛逛今天要去的小镇。",
    "vocabulary": [
      {
        "word": "pueblo",
        "meaning": "小镇",
        "lexical": {
          "part": "noun",
          "lemma": "pueblo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "así que",
        "meaning": "所以",
        "lexical": {
          "part": "expression",
          "lemma": "así que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "voy",
        "meaning": "我去；voy a + 原形表示计划",
        "lexical": {
          "part": "verb",
          "lemma": "ir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "sirmione": {
    "parts": [
      {
        "text": "Sirmione",
        "role": "nominal",
        "note": "意大利地名“西尔苗内”，给上一段 pueblo 补上名字。"
      }
    ],
    "implicitSubject": "",
    "focus": "独立地名，没有变位动词；按专名词块记即可。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "西尔苗内。",
    "vocabulary": [
      {
        "word": "Sirmione",
        "meaning": "西尔苗内，意大利地名",
        "lexical": {
          "part": "noun",
          "lemma": "Sirmione",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "unknown",
          "number": "singular",
          "nounTypes": [
            "proper",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "creo que acabo de perder el autobús que quería coger": {
    "parts": [
      {
        "text": "Creo",
        "role": "verb",
        "note": "creer 的 yo 现在时：我想、我认为。"
      },
      {
        "text": "que acabo de perder el autobús que quería coger.",
        "role": "object",
        "note": "creo 的内容从句：acabo de perder 表刚刚错过；内部 que quería coger 修饰 autobús。"
      }
    ],
    "implicitSubject": "yo（creo、acabo、quería 的主语）",
    "focus": "两层主干：我认为［我刚错过公交］；最后的 que quería coger 是“我原本想坐的”。两个 que 的作用不同。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "我想，我刚错过了原本想坐的那班公交。",
    "vocabulary": [
      {
        "word": "autobús",
        "meaning": "公交车",
        "lexical": {
          "part": "noun",
          "lemma": "autobús",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "acabo de",
        "meaning": "我刚刚……；后接不定式",
        "lexical": {
          "part": "expression",
          "lemma": "acabo de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "quería coger",
        "meaning": "我本来想坐／搭乘",
        "lexical": {
          "part": "expression",
          "lemma": "quería coger",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "Creo",
        "meaning": "我认为；我想",
        "lexical": {
          "part": "verb",
          "lemma": "creer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "creo que era ese": {
    "parts": [
      {
        "text": "Creo",
        "role": "verb",
        "note": "我觉得。"
      },
      {
        "text": "que era ese.",
        "role": "object",
        "note": "判断的内容：era 是 ser 的未完成过去时，ese 指刚才那辆公交。"
      }
    ],
    "implicitSubject": "主句 yo；从句承接 el autobús",
    "focus": "主句 creo 的主语是我；从句里“是那辆”的主语是刚才想坐的公交。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "我觉得就是刚才那辆。",
    "vocabulary": [
      {
        "word": "Creo",
        "meaning": "我认为；我想",
        "lexical": {
          "part": "verb",
          "lemma": "creer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "era",
        "meaning": "当时是",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "imperfecto",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "la idea que tengo es ir al centro de sirmione": {
    "parts": [
      {
        "text": "La idea que tengo",
        "role": "subject",
        "note": "主语中心词 idea；que tengo 修饰它，意思是我所想到的计划。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "系动词 ser，连接计划与内容。"
      },
      {
        "text": "ir al centro de Sirmione.",
        "role": "attribute",
        "note": "不定式短语作表语，说明计划的内容；al = a + el。"
      }
    ],
    "implicitSubject": "",
    "focus": "先抓 La idea es ir…，再展开 que tengo 和目的地。这里 ir al centro 的 a 后接地点。",
    "grammarIds": [
      "g19",
      "g2",
      "g8"
    ],
    "fragment": false,
    "translation": "我的计划是去西尔苗内的中心。",
    "vocabulary": [
      {
        "word": "Sirmione",
        "meaning": "西尔苗内，意大利地名",
        "lexical": {
          "part": "noun",
          "lemma": "Sirmione",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "unknown",
          "number": "singular",
          "nounTypes": [
            "proper",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "idea",
        "meaning": "想法；计划",
        "lexical": {
          "part": "noun",
          "lemma": "idea",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "centro",
        "meaning": "中心；市中心",
        "lexical": {
          "part": "noun",
          "lemma": "centro",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "tengo",
        "meaning": "我有",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "pero está a 50 minutos caminando": {
    "parts": [
      {
        "text": "Pero",
        "role": "connector",
        "note": "但是。"
      },
      {
        "text": "está",
        "role": "verb",
        "note": "estar 的第三人称单数，说目的地与此处的距离。"
      },
      {
        "text": "a 50 minutos",
        "role": "place",
        "note": "以路程时间说明距离。"
      },
      {
        "text": "caminando",
        "role": "modifier",
        "note": "步行的方式；caminar 的副动词。"
      }
    ],
    "implicitSubject": "el centro de Sirmione（市中心）",
    "focus": "estar a + 距离／路程时间：走过去有五十分钟。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "可是走过去要五十分钟，",
    "vocabulary": [
      {
        "word": "minutos",
        "meaning": "分钟",
        "lexical": {
          "part": "noun",
          "lemma": "minuto",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "caminando",
        "meaning": "步行；副动词",
        "lexical": {
          "part": "verb",
          "lemma": "caminar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "gerundio",
          "persons": []
        }
      }
    ]
  },
  "y ya es tarde, ya son las diez, ya hace mucho sol": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "连接前一句。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "已经。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的时间用法。"
      },
      {
        "text": "tarde,",
        "role": "attribute",
        "note": "说时间不早了。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "已经。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "报时用 son。"
      },
      {
        "text": "las diez,",
        "role": "attribute",
        "note": "十点。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "已经。"
      },
      {
        "text": "hace",
        "role": "verb",
        "note": "hacer 的非人称天气用法。"
      },
      {
        "text": "mucho sol,",
        "role": "object",
        "note": "表示日照很强；不是天气句的主语。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是三个并列的时间／天气表达：es tarde、son las diez、hace mucho sol；它们不共享一个普通人称主语。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "而且已经不早了，已经十点了，太阳也很晒，",
    "vocabulary": [
      {
        "word": "sol",
        "meaning": "太阳；日照",
        "lexical": {
          "part": "noun",
          "lemma": "sol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "son",
        "meaning": "是；这里用于报时或指认",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      }
    ]
  },
  "así que quería coger el autobús, pero se me acaba de ir justo ahora": {
    "parts": [
      {
        "text": "así que",
        "role": "connector",
        "note": "所以。"
      },
      {
        "text": "quería coger",
        "role": "verb",
        "note": "quería 交代我先前的打算，coger 保持原形。"
      },
      {
        "text": "el autobús,",
        "role": "object",
        "note": "原本想坐的公交。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "但是，引出变化。"
      },
      {
        "text": "se me acaba de ir",
        "role": "verb",
        "note": "irse 是离开，acabar de 是刚刚；me 表示这件事影响到我，主语是公交。"
      },
      {
        "text": "justo ahora.",
        "role": "time",
        "note": "就在刚才。"
      }
    ],
    "implicitSubject": "前半句 yo；后半句 el autobús",
    "focus": "前半句主语是我，后半句换成公交：它刚开走了。se me… 中的 me 不是主语。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "所以我本来想坐公交，但它刚刚就在我眼前开走了。",
    "vocabulary": [
      {
        "word": "autobús",
        "meaning": "公交车",
        "lexical": {
          "part": "noun",
          "lemma": "autobús",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "así que",
        "meaning": "所以",
        "lexical": {
          "part": "expression",
          "lemma": "así que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "acaba de",
        "meaning": "刚刚……；第三人称单数，后接不定式",
        "lexical": {
          "part": "expression",
          "lemma": "acaba de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "quería coger",
        "meaning": "我本来想坐／搭乘",
        "lexical": {
          "part": "expression",
          "lemma": "quería coger",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "la verdad es que la caminata está": {
    "parts": [
      {
        "text": "La verdad es que",
        "role": "other",
        "note": "说实话；口语评价的引入语，内部已有 es que。"
      },
      {
        "text": "la caminata",
        "role": "subject",
        "note": "步行路程，真正被评价的对象。"
      },
      {
        "text": "está",
        "role": "verb",
        "note": "estar 的第三人称单数，评价在下一条补全。"
      }
    ],
    "implicitSubject": "",
    "focus": "这一条还没说完，接下条：la caminata está bastante bien。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "说实话，这段步行路程……",
    "vocabulary": [
      {
        "word": "caminata",
        "meaning": "步行；徒步路程",
        "lexical": {
          "part": "noun",
          "lemma": "caminata",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "La verdad es que",
        "meaning": "说实话；其实",
        "lexical": {
          "part": "expression",
          "lemma": "la verdad es que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "bastante bien porque hay un montón de pinos": {
    "parts": [
      {
        "text": "bastante bien",
        "role": "attribute",
        "note": "接上段 está，评价这段步行还挺不错。"
      },
      {
        "text": "porque",
        "role": "connector",
        "note": "因为，给出原因。"
      },
      {
        "text": "hay",
        "role": "verb",
        "note": "非人称存在表达，没有普通主语。"
      },
      {
        "text": "un montón de pinos.",
        "role": "object",
        "note": "存在的东西：很多松树；un montón de 作为数量词块记。"
      }
    ],
    "implicitSubject": "",
    "focus": "补全前句后，再接原因：路程还不错，因为有许多松树。别把 pinos 判成 hay 的人称主语。",
    "grammarIds": [
      "g19",
      "g2",
      "g4"
    ],
    "fragment": true,
    "translation": "……还挺不错，因为有很多松树。",
    "vocabulary": [
      {
        "word": "pinos",
        "meaning": "松树",
        "lexical": {
          "part": "noun",
          "lemma": "pino",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "un montón de",
        "meaning": "很多；大量",
        "lexical": {
          "part": "expression",
          "lemma": "un montón de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "esto son pinos, los árboles y dan mucha sombra": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "中性指示代词，指眼前这一组东西。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "指认结构中的 ser，用复数与 pinos 呼应。"
      },
      {
        "text": "pinos,",
        "role": "attribute",
        "note": "表语，说明是什么树。"
      },
      {
        "text": "los árboles",
        "role": "nominal",
        "note": "口语补充“这些树”，与 pinos 同指。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接第二个动作。"
      },
      {
        "text": "dan",
        "role": "verb",
        "note": "dar 的第三人称复数，主语承接这些树。"
      },
      {
        "text": "mucha sombra.",
        "role": "object",
        "note": "树提供的东西：很多树荫；dar sombra 是遮阴。"
      }
    ],
    "implicitSubject": "第二分句承接 los pinos / los árboles",
    "focus": "先认 Esto son pinos，再认（los pinos）dan sombra。具体指这些松树也可用 Estos son pinos。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这些是松树，就是这些树，它们提供很多树荫。",
    "vocabulary": [
      {
        "word": "pinos",
        "meaning": "松树",
        "lexical": {
          "part": "noun",
          "lemma": "pino",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "árboles",
        "meaning": "树",
        "lexical": {
          "part": "noun",
          "lemma": "árbol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "son",
        "meaning": "是；这里用于报时或指认",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      },
      {
        "word": "dan",
        "meaning": "它们提供；给",
        "lexical": {
          "part": "verb",
          "lemma": "dar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      }
    ]
  },
  "entonces ahora estoy al sol, pero... es un camino con mucha sombra": {
    "parts": [
      {
        "text": "Entonces",
        "role": "connector",
        "note": "那么、所以。"
      },
      {
        "text": "ahora",
        "role": "time",
        "note": "现在。"
      },
      {
        "text": "estoy",
        "role": "verb",
        "note": "estar 的 yo 形式。"
      },
      {
        "text": "al sol,",
        "role": "place",
        "note": "al = a + el；estar al sol 是在太阳下。"
      },
      {
        "text": "pero...",
        "role": "connector",
        "note": "转折；口语停顿后继续评价路。"
      },
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "un camino con mucha sombra.",
        "role": "attribute",
        "note": "说明这是一条树荫很多的路，con 短语修饰 camino。"
      }
    ],
    "implicitSubject": "estoy：yo；es：眼前这条路线",
    "focus": "说话者此刻在太阳下，用 estoy；介绍这条路的特点，用 es。两部分的主语不同。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "所以我现在在阳光下，不过……这条路有很多树荫。",
    "vocabulary": [
      {
        "word": "sol",
        "meaning": "太阳；日照",
        "lexical": {
          "part": "noun",
          "lemma": "sol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "camino",
        "meaning": "路；路线",
        "lexical": {
          "part": "noun",
          "lemma": "camino",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "al sol",
        "meaning": "在阳光下",
        "lexical": {
          "part": "expression",
          "lemma": "al sol",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "esto es la sombra. el sol": {
    "parts": [
      {
        "text": "Esto",
        "role": "subject",
        "note": "指向眼前的阴影。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "la sombra.",
        "role": "attribute",
        "note": "说明所指的是树荫。"
      },
      {
        "text": "El sol,",
        "role": "nominal",
        "note": "接着指认太阳；这是省略式名词词块。"
      }
    ],
    "implicitSubject": "",
    "focus": "前半句是“这就是树荫”；后半段开始与太阳作对照，下一条再说 la sombra。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "这就是阴影。这边是太阳，",
    "vocabulary": [
      {
        "word": "sol",
        "meaning": "太阳；日照",
        "lexical": {
          "part": "noun",
          "lemma": "sol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      }
    ]
  },
  "la sombra": {
    "parts": [
      {
        "text": "la sombra.",
        "role": "nominal",
        "note": "阴性名词词块：树荫、阴影；与上一段 el sol 对照。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里只是指向画面说出的名词，没有独立谓语。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "树荫。",
    "vocabulary": [
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      }
    ]
  },
  "este es el mapa de sirmione": {
    "parts": [
      {
        "text": "Este",
        "role": "subject",
        "note": "阳性单数指示代词，指眼前地图。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 用于指认。"
      },
      {
        "text": "el mapa de Sirmione.",
        "role": "attribute",
        "note": "表语；mapa 虽以 -a 结尾仍是阳性，de Sirmione 说明地点。"
      }
    ],
    "implicitSubject": "",
    "focus": "Este es… 先指认，再用 de Sirmione 说明是哪儿的地图。",
    "grammarIds": [
      "g19",
      "g1",
      "g2"
    ],
    "fragment": false,
    "translation": "这是西尔苗内的地图。",
    "vocabulary": [
      {
        "word": "Sirmione",
        "meaning": "西尔苗内，意大利地名",
        "lexical": {
          "part": "noun",
          "lemma": "Sirmione",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "unknown",
          "number": "singular",
          "nounTypes": [
            "proper",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "mapa",
        "meaning": "地图，虽然以 -a 结尾却是阳性",
        "lexical": {
          "part": "noun",
          "lemma": "mapa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "es una península": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "una península.",
        "role": "attribute",
        "note": "表语，说明当地地形是半岛；península 为阴性单数。"
      }
    ],
    "implicitSubject": "Sirmione（前文介绍的地方）",
    "focus": "省略主语，承接 Sirmione／地图中的这块地方。",
    "grammarIds": [
      "g19",
      "g1",
      "g2"
    ],
    "fragment": false,
    "translation": "这是一座半岛。",
    "vocabulary": [
      {
        "word": "península",
        "meaning": "半岛",
        "lexical": {
          "part": "noun",
          "lemma": "península",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "tiene el lago a los dos lados": {
    "parts": [
      {
        "text": "Tiene",
        "role": "verb",
        "note": "tener 的第三人称单数，主语是半岛。"
      },
      {
        "text": "el lago",
        "role": "object",
        "note": "半岛两侧所临的湖，作 tener 的宾语。"
      },
      {
        "text": "a los dos lados.",
        "role": "place",
        "note": "位置补充：在两侧。"
      }
    ],
    "implicitSubject": "la península（半岛）",
    "focus": "tiene el lago 是主干，a los dos lados 补上湖与半岛的方位关系。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "它的两侧都是湖。",
    "vocabulary": [
      {
        "word": "lago",
        "meaning": "湖",
        "lexical": {
          "part": "noun",
          "lemma": "lago",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "lados",
        "meaning": "侧；边",
        "lexical": {
          "part": "noun",
          "lemma": "lado",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "y yo estoy aquí": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着介绍说话者的位置。"
      },
      {
        "text": "yo",
        "role": "subject",
        "note": "明确说出的主语：我。"
      },
      {
        "text": "estoy",
        "role": "verb",
        "note": "estar 的 yo 现在时。"
      },
      {
        "text": "aquí.",
        "role": "place",
        "note": "这里，指地图上的当前位置。"
      }
    ],
    "implicitSubject": "",
    "focus": "yo estoy 是主干，aquí 指具体位置。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "我就在这里。",
    "vocabulary": [
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "y este es el castillo": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着介绍另一处地点。"
      },
      {
        "text": "este",
        "role": "subject",
        "note": "指示代词，指地图上的城堡。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "el castillo.",
        "role": "attribute",
        "note": "表语：城堡。"
      }
    ],
    "implicitSubject": "",
    "focus": "este es el castillo 指认建筑；具体方位由画面补足。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这就是城堡。",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "vale, esta es la cola": {
    "parts": [
      {
        "text": "Vale,",
        "role": "other",
        "note": "西班牙口语：好、行。"
      },
      {
        "text": "esta",
        "role": "subject",
        "note": "阴性单数指示代词，对应 cola。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "la cola.",
        "role": "attribute",
        "note": "排队的队伍；不是尾巴的意思。"
      }
    ],
    "implicitSubject": "",
    "focus": "主干是 esta es la cola；vale 是独立的口语回应。",
    "grammarIds": [
      "g19",
      "g1",
      "g2"
    ],
    "fragment": false,
    "translation": "好，这里就是队伍。",
    "vocabulary": [
      {
        "word": "cola",
        "meaning": "排队的队伍",
        "lexical": {
          "part": "noun",
          "lemma": "cola",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Vale",
        "meaning": "好；行，西班牙口语",
        "lexical": {
          "part": "expression",
          "lemma": "vale",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "y parece que es la cola correcta para comprar los tickets": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着观察队伍。"
      },
      {
        "text": "parece",
        "role": "verb",
        "note": "parecer 的第三人称单数：看起来。"
      },
      {
        "text": "que es la cola correcta para comprar los tickets.",
        "role": "subject",
        "note": "内容从句作 parece 的主语；内部 es 连接 cola，para comprar 说明队伍的用途。"
      }
    ],
    "implicitSubject": "从句中 es 承接眼前这条队",
    "focus": "可以先整体理解 parece que… 为“看起来……”。从句不是 parece 的直接宾语；里面的 para comprar 指为了买票。",
    "grammarIds": [
      "g19",
      "g2",
      "g6",
      "g11"
    ],
    "fragment": false,
    "translation": "看起来，这就是买票应该排的那条队。",
    "vocabulary": [
      {
        "word": "cola",
        "meaning": "排队的队伍",
        "lexical": {
          "part": "noun",
          "lemma": "cola",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "tickets",
        "meaning": "门票（也常说 entradas）",
        "lexical": {
          "part": "noun",
          "lemma": "ticket",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "parece",
        "meaning": "看起来",
        "lexical": {
          "part": "verb",
          "lemma": "parecer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "tengo los tickets": {
    "parts": [
      {
        "text": "Tengo",
        "role": "verb",
        "note": "tener 的 yo 现在时。"
      },
      {
        "text": "los tickets.",
        "role": "object",
        "note": "已经拿到的门票，用复数定冠词 los。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "先找 tengo（我有），再找拥有的东西 los tickets。",
    "grammarIds": [
      "g19",
      "g9"
    ],
    "fragment": false,
    "translation": "我拿到票了。",
    "vocabulary": [
      {
        "word": "tickets",
        "meaning": "门票（也常说 entradas）",
        "lexical": {
          "part": "noun",
          "lemma": "ticket",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Tengo",
        "meaning": "我有",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "así que.... ¡uf! ¡qué de escaleras": {
    "parts": [
      {
        "text": "Así que....",
        "role": "connector",
        "note": "所以；还带着口语停顿。"
      },
      {
        "text": "¡Uf!",
        "role": "other",
        "note": "表示吃力、惊讶的感叹词。"
      },
      {
        "text": "¡Qué de escaleras!",
        "role": "nominal",
        "note": "感叹数量多的名词表达：好多台阶！"
      }
    ],
    "implicitSubject": "",
    "focus": "¡Qué de + 名词! 不是询问“什么”；这条主要是感叹，没有独立的限定动词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "所以……哇，好多台阶！",
    "vocabulary": [
      {
        "word": "escaleras",
        "meaning": "楼梯；台阶",
        "lexical": {
          "part": "noun",
          "lemma": "escalera",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Así que",
        "meaning": "所以",
        "lexical": {
          "part": "expression",
          "lemma": "así que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "¡Qué de escaleras!",
        "meaning": "好多台阶！西班牙口语感叹",
        "lexical": {
          "part": "expression",
          "lemma": "¡qué de escaleras!",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "vamos a visitar este castillo acuático": {
    "parts": [
      {
        "text": "Vamos a visitar",
        "role": "verb",
        "note": "ir 的 nosotros 形式 + a + visitar，表示我们来／要参观。"
      },
      {
        "text": "este castillo acuático.",
        "role": "object",
        "note": "参观对象；este、acuático 与阳性单数 castillo 配合。"
      }
    ],
    "implicitSubject": "nosotros/as（我们，邀请观众一起）",
    "focus": "先看 vamos a visitar，再补参观什么。",
    "grammarIds": [
      "g19",
      "g6",
      "g8"
    ],
    "fragment": false,
    "translation": "我们来参观这座水上城堡。",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Vamos",
        "meaning": "我们去；vamos a + 原形表示计划／邀请",
        "lexical": {
          "part": "verb",
          "lemma": "ir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "nosotros/as"
          ]
        }
      }
    ]
  },
  "ahí está": {
    "parts": [
      {
        "text": "Ahí",
        "role": "place",
        "note": "在那里；先强调指向的位置。"
      },
      {
        "text": "está.",
        "role": "verb",
        "note": "estar 的第三人称单数，主语由画面和下一条吊桥补足。"
      }
    ],
    "implicitSubject": "el puente levadizo（吊桥）",
    "focus": "地点可以放在动词前：ahí está（它在那里）。不是所有句子都要以主语开头。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "就在那里。",
    "vocabulary": [
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "el puente levadizo": {
    "parts": [
      {
        "text": "El puente",
        "role": "nominal",
        "note": "中心名词：桥，阳性单数。"
      },
      {
        "text": "levadizo.",
        "role": "modifier",
        "note": "修饰桥，表示可升降的；两者组成“吊桥”。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是名词词块；先看 puente，再加 levadizo 说明是哪种桥。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "吊桥。",
    "vocabulary": [
      {
        "word": "puente",
        "meaning": "桥",
        "lexical": {
          "part": "noun",
          "lemma": "puente",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "levadizo",
        "meaning": "可升降的，与 puente 构成吊桥",
        "lexical": {
          "part": "adjective",
          "lemma": "levadizo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "ahí arriba": {
    "parts": [
      {
        "text": "Ahí arriba.",
        "role": "place",
        "note": "位置词块：在那上面；配合指向的画面理解。"
      }
    ],
    "implicitSubject": "",
    "focus": "没有限定动词，只是补充位置，不硬造一个完整句子。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "在上面那里。",
    "vocabulary": [
      {
        "word": "Ahí arriba",
        "meaning": "在那上面",
        "lexical": {
          "part": "expression",
          "lemma": "ahí arriba",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "esta es la torre de reconocimiento": {
    "parts": [
      {
        "text": "Esta",
        "role": "subject",
        "note": "阴性指示代词，指眼前这座塔。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "la torre de reconocimiento.",
        "role": "attribute",
        "note": "表语；de reconocimiento 说明塔的观察／瞭望用途。"
      }
    ],
    "implicitSubject": "",
    "focus": "主干是 esta es la torre，再加 de reconocimiento。",
    "grammarIds": [
      "g19",
      "g1",
      "g2"
    ],
    "fragment": false,
    "translation": "这是瞭望塔。",
    "vocabulary": [
      {
        "word": "torre",
        "meaning": "塔",
        "lexical": {
          "part": "noun",
          "lemma": "torre",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "y esta es la entrada principal al fuerte, con su puente levadizo": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "并且，继续介绍。"
      },
      {
        "text": "esta",
        "role": "subject",
        "note": "阴性指示代词，与入口 entrada 对应。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "la entrada principal al fuerte,",
        "role": "attribute",
        "note": "表语：堡垒的正门；al = a + el。"
      },
      {
        "text": "con su puente levadizo.",
        "role": "modifier",
        "note": "补充入口所配的吊桥，su 指它的。"
      }
    ],
    "implicitSubject": "",
    "focus": "先看 esta es la entrada，再把 principal、al fuerte 和 con… 加回来。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这是堡垒的正门，还有它的吊桥。",
    "vocabulary": [
      {
        "word": "puente",
        "meaning": "桥",
        "lexical": {
          "part": "noun",
          "lemma": "puente",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "entrada",
        "meaning": "入口；门票，结合当前句理解",
        "lexical": {
          "part": "noun",
          "lemma": "entrada",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "fuerte",
        "meaning": "堡垒",
        "lexical": {
          "part": "noun",
          "lemma": "fuerte",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "levadizo",
        "meaning": "可升降的，与 puente 构成吊桥",
        "lexical": {
          "part": "adjective",
          "lemma": "levadizo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "oh, wow": {
    "parts": [
      {
        "text": "Oh, wow.",
        "role": "other",
        "note": "看到眼前景象时的惊叹声。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是独立感叹，不需要分析主谓宾。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "噢，哇。",
    "vocabulary": [
      {
        "word": "Oh, wow",
        "meaning": "哇，感叹",
        "lexical": {
          "part": "expression",
          "lemma": "oh, wow",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "hay gente en la torre": {
    "parts": [
      {
        "text": "Hay",
        "role": "verb",
        "note": "haber 的非人称存在用法。"
      },
      {
        "text": "gente",
        "role": "object",
        "note": "存在的人；gente 在语法上是单数集合名词，不是 hay 的人称主语。"
      },
      {
        "text": "en la torre.",
        "role": "place",
        "note": "人所在的位置。"
      }
    ],
    "implicitSubject": "非人称 hay，无普通主语",
    "focus": "hay gente 是主干，en la torre 补充在哪里。",
    "grammarIds": [
      "g19",
      "g4",
      "g20"
    ],
    "fragment": false,
    "translation": "塔上有人。",
    "vocabulary": [
      {
        "word": "torre",
        "meaning": "塔",
        "lexical": {
          "part": "noun",
          "lemma": "torre",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "gente",
        "meaning": "人们，语法上为单数集合名词",
        "lexical": {
          "part": "noun",
          "lemma": "gente",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "collective"
          ]
        }
      }
    ]
  },
  "ahora mismo": {
    "parts": [
      {
        "text": "Ahora mismo",
        "role": "time",
        "note": "时间词块：此时此刻，要和下一条 estoy… 连起来。"
      }
    ],
    "implicitSubject": "",
    "focus": "字幕在时间短语后断开，谓语在下一段。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "此时此刻，",
    "vocabulary": [
      {
        "word": "Ahora mismo",
        "meaning": "此时此刻",
        "lexical": {
          "part": "expression",
          "lemma": "ahora mismo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "estoy en la parte de arriba de la torre": {
    "parts": [
      {
        "text": "estoy",
        "role": "verb",
        "note": "estar 的 yo 现在时。"
      },
      {
        "text": "en la parte de arriba de la torre",
        "role": "place",
        "note": "位置：塔的顶部；de la torre 修饰 parte de arriba。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "连上条：Ahora mismo estoy en…，先抓“我在”，再读位置。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "我正在塔顶，",
    "vocabulary": [
      {
        "word": "torre",
        "meaning": "塔",
        "lexical": {
          "part": "noun",
          "lemma": "torre",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "y la verdad es que hay unas vistas espectaculares": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "连接对景色的描述。"
      },
      {
        "text": "la verdad es que",
        "role": "other",
        "note": "说实话，是评价的引入语。"
      },
      {
        "text": "hay",
        "role": "verb",
        "note": "非人称存在表达。"
      },
      {
        "text": "unas vistas espectaculares.",
        "role": "object",
        "note": "眼前出现的景观；espectaculares 与复数 vistas 配合。"
      }
    ],
    "implicitSubject": "非人称 hay，无普通主语",
    "focus": "主干是 hay unas vistas；la verdad es que 是口语铺垫，espectaculares 描述景色。",
    "grammarIds": [
      "g19",
      "g4",
      "g6"
    ],
    "fragment": false,
    "translation": "说实话，这里的景色太壮观了。",
    "vocabulary": [
      {
        "word": "vistas",
        "meaning": "景色；景观",
        "lexical": {
          "part": "noun",
          "lemma": "vista",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "la verdad es que",
        "meaning": "说实话；其实",
        "lexical": {
          "part": "expression",
          "lemma": "la verdad es que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "no tenía ninguna expectativa, pero es precioso": {
    "parts": [
      {
        "text": "No",
        "role": "modifier",
        "note": "否定词。"
      },
      {
        "text": "tenía",
        "role": "verb",
        "note": "tener 的未完成过去时，交代我原先的心态。"
      },
      {
        "text": "ninguna expectativa,",
        "role": "object",
        "note": "没有任何期待；no… ninguna 是否定配合。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "转折。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数，话题转向景色。"
      },
      {
        "text": "precioso.",
        "role": "attribute",
        "note": "表语，形容地方漂亮。"
      }
    ],
    "implicitSubject": "tenía：yo；es：城堡／眼前这个地方",
    "focus": "前半句是“我没有期待”，后半句是“这里很美”，主语在转折后变了。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "我之前完全没有期待，但这里漂亮极了。",
    "vocabulary": [
      {
        "word": "expectativa",
        "meaning": "预期；期待",
        "lexical": {
          "part": "noun",
          "lemma": "expectativa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "tenía",
        "meaning": "原本有；这里是我原先的心态",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "imperfecto",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "precioso",
        "meaning": "漂亮极了",
        "lexical": {
          "part": "adjective",
          "lemma": "precioso",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "ahora mismo estoy mirando lo que es": {
    "parts": [
      {
        "text": "Ahora mismo",
        "role": "time",
        "note": "此时此刻。"
      },
      {
        "text": "estoy mirando",
        "role": "verb",
        "note": "estar + mirar 的副动词：正在看。"
      },
      {
        "text": "lo que es",
        "role": "object",
        "note": "mirando 的宾语从句开头，所看的具体内容在下一条。"
      }
    ],
    "implicitSubject": "yo（estoy mirando 的主语）",
    "focus": "口语 lo que es… 引出半岛这一对象；别在这一条中途就硬判成完整句子。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "现在我正在看那边的……",
    "vocabulary": [
      {
        "word": "Ahora mismo",
        "meaning": "此时此刻",
        "lexical": {
          "part": "expression",
          "lemma": "ahora mismo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "mirando",
        "meaning": "看；副动词",
        "lexical": {
          "part": "verb",
          "lemma": "mirar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "gerundio",
          "persons": []
        }
      }
    ]
  },
  "la península que conecta con el resto de la tierra": {
    "parts": [
      {
        "text": "la península",
        "role": "attribute",
        "note": "补上条 lo que es… 后的表语：半岛。"
      },
      {
        "text": "que conecta con el resto de la tierra",
        "role": "modifier",
        "note": "关系从句修饰 península；内部 que 是 conecta 的主语，con… 说明与什么相连。"
      }
    ],
    "implicitSubject": "",
    "focus": "跨两条看：estoy mirando［lo que es la península que conecta…］；当前展示的是宾语从句内部。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "……那条与其余陆地连接的半岛，",
    "vocabulary": [
      {
        "word": "península",
        "meaning": "半岛",
        "lexical": {
          "part": "noun",
          "lemma": "península",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "tierra",
        "meaning": "陆地",
        "lexical": {
          "part": "noun",
          "lemma": "tierra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "y que es donde tengo aparcada la furgoneta y es precioso": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "继续并列修饰前文提到的地方。"
      },
      {
        "text": "que",
        "role": "subject",
        "note": "关系代词，承接前条提到的地方。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser，说明这个地方就是停车所在。"
      },
      {
        "text": "donde tengo aparcada la furgoneta",
        "role": "attribute",
        "note": "地点从句；内部 tengo + 宾语 + 分词，aparcada 与 furgoneta 配合。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "口语转而评价景色。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "省略了所评价的对象。"
      },
      {
        "text": "precioso.",
        "role": "attribute",
        "note": "阳性单数表语，指这个地方／景象很美，不是修饰 furgoneta。"
      }
    ],
    "implicitSubject": "末尾 es：el lugar / el paisaje（地方／景象）",
    "focus": "donde tengo aparcada la furgoneta 是停车地点；tengo aparcada 不是 haber 完成时。末尾 es precioso 是新评价，别把 precioso 配给阴性 furgoneta。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": true,
    "translation": "我的厢式车就停在那一带，那里真漂亮。",
    "vocabulary": [
      {
        "word": "furgoneta",
        "meaning": "厢式车；这里是旅行住的车",
        "lexical": {
          "part": "noun",
          "lemma": "furgoneta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "tengo",
        "meaning": "我有",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "aparcada",
        "meaning": "停放好的，阴性单数分词作状态补语",
        "lexical": {
          "part": "verb",
          "lemma": "aparcar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "participio",
          "persons": []
        }
      },
      {
        "word": "precioso",
        "meaning": "漂亮极了",
        "lexical": {
          "part": "adjective",
          "lemma": "precioso",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "es espectacular": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "espectacular.",
        "role": "attribute",
        "note": "表语：壮观的，单数不区分阴阳性词尾。"
      }
    ],
    "implicitSubject": "眼前的景观",
    "focus": "这句评价前文的景观，是系表结构，不是动词加宾语。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "太壮观了。",
    "vocabulary": [
      {
        "word": "espectacular",
        "meaning": "壮观的",
        "lexical": {
          "part": "adjective",
          "lemma": "espectacular",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "vale, ya he terminado mi visita del castillo, y como hace tanto calor": {
    "parts": [
      {
        "text": "Vale,",
        "role": "other",
        "note": "口语转场：好了。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "已经。"
      },
      {
        "text": "he terminado",
        "role": "verb",
        "note": "terminar 的现在完成时，主语 yo。"
      },
      {
        "text": "mi visita del castillo,",
        "role": "object",
        "note": "已经完成的参观，作宾语。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接接下来的行动。"
      },
      {
        "text": "como hace tanto calor",
        "role": "modifier",
        "note": "原因从句：因为天气这么热；como 在这里不表示如何。"
      }
    ],
    "implicitSubject": "yo（he terminado 的主语）",
    "focus": "先看 he terminado mi visita；后面的 como… 引出原因，结果接下一段 he venido fuera… 。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": true,
    "translation": "好了，我已经逛完城堡了。因为天气这么热，",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "visita",
        "meaning": "参观；访问",
        "lexical": {
          "part": "noun",
          "lemma": "visita",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "calor",
        "meaning": "热；高温",
        "lexical": {
          "part": "noun",
          "lemma": "calor",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "Vale",
        "meaning": "好；行，西班牙口语",
        "lexical": {
          "part": "expression",
          "lemma": "vale",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he terminado",
        "meaning": "我已结束",
        "lexical": {
          "part": "verb",
          "lemma": "terminar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "he venido fuera del castillo porque he visto que vendían limonada": {
    "parts": [
      {
        "text": "he venido",
        "role": "verb",
        "note": "venir 的现在完成时：我来到。"
      },
      {
        "text": "fuera del castillo",
        "role": "place",
        "note": "来到的位置；del = de + el。"
      },
      {
        "text": "porque",
        "role": "connector",
        "note": "因为。"
      },
      {
        "text": "he visto",
        "role": "verb",
        "note": "ver 的现在完成时，visto 是不规则分词。"
      },
      {
        "text": "que vendían limonada",
        "role": "object",
        "note": "看到的内容；vendían 为未完成过去时，主语是卖柠檬水的人。"
      }
    ],
    "implicitSubject": "he venido / he visto：yo；vendían：售卖的人",
    "focus": "主线是我来到城堡外。原因是我看见［有人在卖柠檬水］；从句里的售卖者不等于主句 yo。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": false,
    "translation": "我走到城堡外面，因为我看到有人在卖柠檬水，",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "limonada",
        "meaning": "柠檬水",
        "lexical": {
          "part": "noun",
          "lemma": "limonada",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "uncountable"
          ]
        }
      },
      {
        "word": "he venido",
        "meaning": "我已来到",
        "lexical": {
          "part": "verb",
          "lemma": "venir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "he visto",
        "meaning": "我已看到",
        "lexical": {
          "part": "verb",
          "lemma": "ver",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "vendían",
        "meaning": "他们当时在卖",
        "lexical": {
          "part": "verb",
          "lemma": "vender",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "imperfecto",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      }
    ]
  },
  "y voy a ver el precio por el que la venden": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接着上文。"
      },
      {
        "text": "voy a ver",
        "role": "verb",
        "note": "ir a + ver，表示接下来准备看看。"
      },
      {
        "text": "el precio por el que la venden.",
        "role": "object",
        "note": "所查看的价格；内部 por el que 修饰 precio，la 代指 limonada，venden 的主语是售卖者。"
      }
    ],
    "implicitSubject": "主句 yo；venden：他们／商家",
    "focus": "先看 voy a ver el precio，再把“他们以这个价格卖它”放回价格后面。",
    "grammarIds": [
      "g19",
      "g8",
      "g14"
    ],
    "fragment": false,
    "translation": "我准备看看他们卖多少钱。",
    "vocabulary": [
      {
        "word": "precio",
        "meaning": "价格",
        "lexical": {
          "part": "noun",
          "lemma": "precio",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "voy",
        "meaning": "我去；voy a + 原形表示计划",
        "lexical": {
          "part": "verb",
          "lemma": "ir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "me parto": {
    "parts": [
      {
        "text": "Me parto.",
        "role": "verb",
        "note": "partirse 的 yo 用法，整个词块在这里表示笑得不行。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "口语 me parto 是“笑死我了”；me 是代词式用法的一部分，不是主语。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "笑死我了。",
    "vocabulary": [
      {
        "word": "Me parto",
        "meaning": "笑死我了，口语",
        "lexical": {
          "part": "expression",
          "lemma": "me parto",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "es un fiat-barco": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 的第三人称单数。"
      },
      {
        "text": "un Fiat-barco.",
        "role": "attribute",
        "note": "临时组合的名称：一艘菲亚特汽车造型的船，作表语。"
      }
    ],
    "implicitSubject": "眼前的船",
    "focus": "说明眼前这个东西是什么；Fiat-barco 是结合画面临时说出的组合词。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这是一艘菲亚特造型的船。",
    "vocabulary": [
      {
        "word": "barco",
        "meaning": "船",
        "lexical": {
          "part": "noun",
          "lemma": "barco",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "un coche fiat, pero en barco": {
    "parts": [
      {
        "text": "Un coche fiat,",
        "role": "nominal",
        "note": "名词词块：菲亚特汽车。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "转折。"
      },
      {
        "text": "en barco.",
        "role": "modifier",
        "note": "补充“但做成船的样子”，此处依赖画面语境。"
      }
    ],
    "implicitSubject": "",
    "focus": "整段是省略式说明，没有独立限定动词；不把 en barco 机械理解成真的乘车。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "是一辆菲亚特汽车，只不过变成了船。",
    "vocabulary": [
      {
        "word": "coche",
        "meaning": "汽车",
        "lexical": {
          "part": "noun",
          "lemma": "coche",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "barco",
        "meaning": "船",
        "lexical": {
          "part": "noun",
          "lemma": "barco",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "vale, voy a buscar": {
    "parts": [
      {
        "text": "Vale,",
        "role": "other",
        "note": "口语转场：好。"
      },
      {
        "text": "voy a buscar",
        "role": "verb",
        "note": "ir a + buscar，我打算找；要找的内容在下一条。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "字幕还没结束宾语：voy a buscar［dónde está el museo…］。",
    "grammarIds": [
      "g19",
      "g8"
    ],
    "fragment": true,
    "translation": "好，我准备找一找……",
    "vocabulary": [
      {
        "word": "Vale",
        "meaning": "好；行，西班牙口语",
        "lexical": {
          "part": "expression",
          "lemma": "vale",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "voy",
        "meaning": "我去；voy a + 原形表示计划",
        "lexical": {
          "part": "verb",
          "lemma": "ir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "dónde está el museo arqueológico, creo que es": {
    "parts": [
      {
        "text": "dónde",
        "role": "place",
        "note": "间接疑问中的位置：在哪里，dónde 有重音。"
      },
      {
        "text": "está",
        "role": "verb",
        "note": "estar 说明位置。"
      },
      {
        "text": "el museo arqueológico,",
        "role": "subject",
        "note": "从句里的后置主语：考古博物馆。"
      },
      {
        "text": "creo que es,",
        "role": "other",
        "note": "插入的口语自我确认：“我想是叫这个”；es 的补语省略。"
      }
    ],
    "implicitSubject": "",
    "focus": "本条整体是上一条 buscar 的内容；在它内部，museo 是 está 的主语，不是宾语。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "……考古博物馆在哪里，我想应该是叫这个名字，",
    "vocabulary": [
      {
        "word": "museo",
        "meaning": "博物馆",
        "lexical": {
          "part": "noun",
          "lemma": "museo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "creo",
        "meaning": "我认为；我想",
        "lexical": {
          "part": "verb",
          "lemma": "creer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "por que cuando compré la entrada para el castillo": {
    "parts": [
      {
        "text": "por que",
        "role": "connector",
        "note": "原字幕分写 por que；这里表达因为，规范写作 porque。"
      },
      {
        "text": "cuando compré la entrada para el castillo",
        "role": "time",
        "note": "时间从句：当我买城堡票时；compré 为 yo 简单过去时。"
      }
    ],
    "implicitSubject": "yo（compré 的主语）",
    "focus": "这条有原因连接词和时间背景；原因的主要动作 compré también… 要等下一条。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "因为我买城堡门票的时候，",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "entrada",
        "meaning": "入口；门票，结合当前句理解",
        "lexical": {
          "part": "noun",
          "lemma": "entrada",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "compré",
        "meaning": "我买了",
        "lexical": {
          "part": "verb",
          "lemma": "comprar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "preterito",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "que es un fuerte, compré también": {
    "parts": [
      {
        "text": "que es un fuerte,",
        "role": "modifier",
        "note": "接上一条 castillo 的关系从句；内部 que 作主语，es un fuerte 作说明。"
      },
      {
        "text": "compré",
        "role": "verb",
        "note": "comprar 的 yo 简单过去时：我买了。"
      },
      {
        "text": "también",
        "role": "modifier",
        "note": "也，修饰 compré。"
      }
    ],
    "implicitSubject": "主句 compré：yo；关系从句 que：el castillo",
    "focus": "先把插入的“它是堡垒”放到一边：cuando compré la entrada…, compré también…；第二张票在后文。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": true,
    "translation": "也就是那个堡垒，我还买了……",
    "vocabulary": [
      {
        "word": "fuerte",
        "meaning": "堡垒",
        "lexical": {
          "part": "noun",
          "lemma": "fuerte",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "compré",
        "meaning": "我买了",
        "lexical": {
          "part": "verb",
          "lemma": "comprar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "preterito",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "una entrada para": {
    "parts": [
      {
        "text": "una entrada",
        "role": "object",
        "note": "接上一条 compré 的宾语：一张门票。"
      },
      {
        "text": "para",
        "role": "purpose",
        "note": "目的地／用途介词，后接下一条 museo。"
      }
    ],
    "implicitSubject": "",
    "focus": "宾语跨字幕延续：compré también una entrada para el museo…；这里 para 后接名词，不是不定式。",
    "grammarIds": [
      "g19",
      "g1"
    ],
    "fragment": true,
    "translation": "……一张去参观的门票，",
    "vocabulary": [
      {
        "word": "entrada",
        "meaning": "入口；门票，结合当前句理解",
        "lexical": {
          "part": "noun",
          "lemma": "entrada",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "el museo arqueológico, los restos arqueológicos": {
    "parts": [
      {
        "text": "el museo arqueológico,",
        "role": "nominal",
        "note": "补上段 para 后面的名词：考古博物馆。"
      },
      {
        "text": "los restos arqueológicos.",
        "role": "nominal",
        "note": "说话者继续补充／改称：考古遗迹，注意复数配合。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是口语中的补充调整，连着前面的 una entrada para… 理解。",
    "grammarIds": [
      "g19",
      "g1",
      "g6"
    ],
    "fragment": true,
    "translation": "……考古博物馆，也就是那些考古遗迹的门票。",
    "vocabulary": [
      {
        "word": "museo",
        "meaning": "博物馆",
        "lexical": {
          "part": "noun",
          "lemma": "museo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "restos",
        "meaning": "遗存；这里指遗迹",
        "lexical": {
          "part": "noun",
          "lemma": "resto",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "esto de aquí": {
    "parts": [
      {
        "text": "Esto",
        "role": "nominal",
        "note": "中性指示代词：这个，指地图中所示的内容。"
      },
      {
        "text": "de aquí.",
        "role": "modifier",
        "note": "修饰 esto：这里的。"
      }
    ],
    "implicitSubject": "",
    "focus": "esto de aquí 是完整的指示词块，但不是完整主谓句。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "就是这里这个。",
    "vocabulary": [
      {
        "word": "de aquí",
        "meaning": "这里的，修饰前面的指示词",
        "lexical": {
          "part": "expression",
          "lemma": "de aquí",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "entonces tengo que encontrar dónde está exactamente": {
    "parts": [
      {
        "text": "Entonces",
        "role": "connector",
        "note": "那么、所以。"
      },
      {
        "text": "tengo que encontrar",
        "role": "verb",
        "note": "tener que + encontrar，表示需要找到。"
      },
      {
        "text": "dónde está exactamente.",
        "role": "object",
        "note": "间接疑问作 encontrar 的宾语；内部 dónde 问位置，exactamente 强调准确。"
      }
    ],
    "implicitSubject": "主句 yo；从句承接 el museo",
    "focus": "主干是“我得找到［它确切在哪里］”；tengo 与 yo 配合，里面的 está 对应要找的地点。",
    "grammarIds": [
      "g19",
      "g2",
      "g13"
    ],
    "fragment": false,
    "translation": "所以，我得找到它的确切位置。",
    "vocabulary": [
      {
        "word": "tengo",
        "meaning": "我有",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "uh, está en la punta": {
    "parts": [
      {
        "text": "Uh,",
        "role": "other",
        "note": "口语发现／感叹声。"
      },
      {
        "text": "está",
        "role": "verb",
        "note": "estar 第三人称单数，描述已知目标的位置。"
      },
      {
        "text": "en la punta.",
        "role": "place",
        "note": "在尖端，指半岛的尽头。"
      }
    ],
    "implicitSubject": "el museo / 要找的景点",
    "focus": "把感叹声拿开，主干是 está en la punta。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "哦，它在最尖端。",
    "vocabulary": [
      {
        "word": "punta",
        "meaning": "尖端；这里指半岛尽头",
        "lexical": {
          "part": "noun",
          "lemma": "punta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "está a 1.5km": {
    "parts": [
      {
        "text": "Está",
        "role": "verb",
        "note": "estar 的距离用法。"
      },
      {
        "text": "a 1.5km",
        "role": "place",
        "note": "离此处一公里半；a + 距离，不是“拥有一公里半”。"
      }
    ],
    "implicitSubject": "要去的景点",
    "focus": "estar a… 表示距离多远，主语是要去的地点。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "距离这里一点五公里。",
    "vocabulary": [
      {
        "word": "Está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "20 minutos caminando": {
    "parts": [
      {
        "text": "20 minutos",
        "role": "nominal",
        "note": "用时的数量词块：二十分钟。"
      },
      {
        "text": "caminando.",
        "role": "modifier",
        "note": "步行的方式；caminar 的副动词。"
      }
    ],
    "implicitSubject": "",
    "focus": "承接上条说明路程：步行二十分钟。没有另一个限定动词。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "步行二十分钟。",
    "vocabulary": [
      {
        "word": "minutos",
        "meaning": "分钟",
        "lexical": {
          "part": "noun",
          "lemma": "minuto",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "caminando",
        "meaning": "步行；副动词",
        "lexical": {
          "part": "verb",
          "lemma": "caminar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "gerundio",
          "persons": []
        }
      }
    ]
  },
  "este es el castillo": {
    "parts": [
      {
        "text": "Este",
        "role": "subject",
        "note": "阳性指示代词，指地图上的这一处。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 的指认用法。"
      },
      {
        "text": "el castillo.",
        "role": "attribute",
        "note": "表语：城堡。"
      }
    ],
    "implicitSubject": "",
    "focus": "这是 Este es… 的指认句，和说地点在哪里的 estar 区分。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这是城堡。",
    "vocabulary": [
      {
        "word": "castillo",
        "meaning": "城堡",
        "lexical": {
          "part": "noun",
          "lemma": "castillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "y yo tengo que ir aquí a la punta": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着说明路线。"
      },
      {
        "text": "yo",
        "role": "subject",
        "note": "明确的主语：我。"
      },
      {
        "text": "tengo que ir",
        "role": "verb",
        "note": "tener que + ir：需要去；ir 保留原形。"
      },
      {
        "text": "aquí",
        "role": "place",
        "note": "这里，指地图上目的地。"
      },
      {
        "text": "a la punta.",
        "role": "place",
        "note": "进一步明确是半岛尖端；a 后面是地点。"
      }
    ],
    "implicitSubject": "",
    "focus": "主干 yo tengo que ir，两个地点词块解释要去哪里。",
    "grammarIds": [
      "g19",
      "g8",
      "g13"
    ],
    "fragment": false,
    "translation": "而我要去这里，去半岛的尖端。",
    "vocabulary": [
      {
        "word": "punta",
        "meaning": "尖端；这里指半岛尽头",
        "lexical": {
          "part": "noun",
          "lemma": "punta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "tengo",
        "meaning": "我有",
        "lexical": {
          "part": "verb",
          "lemma": "tener",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "en teoría": {
    "parts": [
      {
        "text": "En teoría,",
        "role": "modifier",
        "note": "按理说、理论上；给接下来的描述加限定。"
      }
    ],
    "implicitSubject": "",
    "focus": "本条只有说明立场的词块；过去的状态在下一段。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "理论上，",
    "vocabulary": [
      {
        "word": "En teoría",
        "meaning": "理论上；按理说",
        "lexical": {
          "part": "expression",
          "lemma": "en teoría",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "todo este pasillo estaba bajo techo": {
    "parts": [
      {
        "text": "todo este pasillo",
        "role": "subject",
        "note": "整条走廊，中心词 pasillo 是阳性单数。"
      },
      {
        "text": "estaba",
        "role": "verb",
        "note": "estar 的未完成过去时，描述过去的状态。"
      },
      {
        "text": "bajo techo.",
        "role": "place",
        "note": "固定词块：有屋顶遮蔽，在屋顶之下。"
      }
    ],
    "implicitSubject": "",
    "focus": "主干是“这条走廊原先在屋顶之下”。estaba 讲过去，与现在已无顶棚对比。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这一整条走廊原本都在屋顶下面。",
    "vocabulary": [
      {
        "word": "pasillo",
        "meaning": "走廊；通道",
        "lexical": {
          "part": "noun",
          "lemma": "pasillo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "techo",
        "meaning": "屋顶；顶棚",
        "lexical": {
          "part": "noun",
          "lemma": "techo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "bajo techo",
        "meaning": "有屋顶遮蔽",
        "lexical": {
          "part": "expression",
          "lemma": "bajo techo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "estaba",
        "meaning": "原先在／处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "imperfecto",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "estaba cubierto, pero ya no": {
    "parts": [
      {
        "text": "Estaba",
        "role": "verb",
        "note": "estar 未完成过去时，主语承接 pasillo。"
      },
      {
        "text": "cubierto,",
        "role": "attribute",
        "note": "过去分词作表语，表示有遮盖，阳性单数配合 pasillo。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "转折。"
      },
      {
        "text": "ya",
        "role": "time",
        "note": "如今／现在已经。"
      },
      {
        "text": "no.",
        "role": "modifier",
        "note": "省略了重复的 está cubierto：现在不再有了。"
      }
    ],
    "implicitSubject": "el pasillo（上一条的走廊）",
    "focus": "estar + cubierto 描述状态，不是 haber + 分词的完成时；但现在不再如此。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这里原来有顶棚，不过现在已经没有了。",
    "vocabulary": [
      {
        "word": "Estaba",
        "meaning": "原先在／处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "imperfecto",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "cubierto",
        "meaning": "有遮盖的，阳性单数分词",
        "lexical": {
          "part": "verb",
          "lemma": "cubrir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "participio",
          "persons": []
        }
      }
    ]
  },
  "ojalá siguiera cubierto porque cubriría y protegería del sol": {
    "parts": [
      {
        "text": "Ojalá",
        "role": "other",
        "note": "愿望引导词：但愿、真希望。"
      },
      {
        "text": "siguiera",
        "role": "verb",
        "note": "seguir 的虚拟式过去未完成时，表达与现实不符的愿望。"
      },
      {
        "text": "cubierto",
        "role": "attribute",
        "note": "状态表语：继续有顶棚，与 pasillo 配合。"
      },
      {
        "text": "porque",
        "role": "connector",
        "note": "解释这一愿望的理由。"
      },
      {
        "text": "cubriría y protegería",
        "role": "verb",
        "note": "两个条件式，说明设想中顶棚能起的作用。"
      },
      {
        "text": "del sol.",
        "role": "modifier",
        "note": "proteger de 的介词补语：免受太阳晒；受保护的人未说出。"
      }
    ],
    "implicitSubject": "siguiera：el pasillo；后半句承接设想中的遮蔽物／顶棚",
    "focus": "先读“但愿走廊还被遮住”，再读假设中的好处。siguiera 是虚拟式；cubriría、protegería 是条件式，不能混成同一种时态。",
    "grammarIds": [
      "g19",
      "g2",
      "g6",
      "g15"
    ],
    "fragment": false,
    "translation": "真希望它仍然有顶棚，那样就能遮挡阳光、保护我们。",
    "vocabulary": [
      {
        "word": "sol",
        "meaning": "太阳；日照",
        "lexical": {
          "part": "noun",
          "lemma": "sol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Ojalá",
        "meaning": "但愿；真希望",
        "lexical": {
          "part": "expression",
          "lemma": "ojalá",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "cubierto",
        "meaning": "有遮盖的，阳性单数分词",
        "lexical": {
          "part": "verb",
          "lemma": "cubrir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "participio",
          "persons": []
        }
      },
      {
        "word": "siguiera",
        "meaning": "仍然继续；这里是虚拟式过去未完成时",
        "lexical": {
          "part": "verb",
          "lemma": "seguir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "cubriría",
        "meaning": "在假设下会遮盖",
        "lexical": {
          "part": "verb",
          "lemma": "cubrir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "condicional",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "protegería",
        "meaning": "在假设下会保护",
        "lexical": {
          "part": "verb",
          "lemma": "proteger",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "condicional",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "acabo de darme cuenta de que no me he traído la crema solar": {
    "parts": [
      {
        "text": "Acabo de darme cuenta",
        "role": "verb",
        "note": "acabar de + darse cuenta：我刚意识到；me 与 yo 配合。"
      },
      {
        "text": "de que no me he traído la crema solar.",
        "role": "modifier",
        "note": "darse cuenta 要求的 de 补语；内容是我没带防晒霜，he traído 为现在完成时。"
      }
    ],
    "implicitSubject": "yo（acabo、he traído 的主语）",
    "focus": "主干 Acabo de darme cuenta，再问“意识到什么？”接 de que…。不要漏掉固定搭配要求的 de。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": false,
    "translation": "我刚意识到，我没把防晒霜带来。",
    "vocabulary": [
      {
        "word": "crema",
        "meaning": "霜；这里是防晒霜",
        "lexical": {
          "part": "noun",
          "lemma": "crema",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Acabo de",
        "meaning": "我刚刚……；后接不定式",
        "lexical": {
          "part": "expression",
          "lemma": "acabo de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "darme cuenta",
        "meaning": "意识到；与 yo 配合的 darse cuenta",
        "lexical": {
          "part": "expression",
          "lemma": "darme cuenta",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "crema solar",
        "meaning": "防晒霜",
        "lexical": {
          "part": "expression",
          "lemma": "crema solar",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he traído",
        "meaning": "我已经带来",
        "lexical": {
          "part": "verb",
          "lemma": "traer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "no me he traído la crema solar": {
    "parts": [
      {
        "text": "No",
        "role": "modifier",
        "note": "否定放在变位助动词前。"
      },
      {
        "text": "me he traído",
        "role": "verb",
        "note": "traerse 的 yo 现在完成时；me 表随身带来的口语用法，he + traído 表已发生的带取。"
      },
      {
        "text": "la crema solar.",
        "role": "object",
        "note": "没有带来的东西；solar 修饰 crema。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "核心 he traído la crema，加 no 成为没带；me 不是主语。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": false,
    "translation": "我没有带防晒霜。",
    "vocabulary": [
      {
        "word": "crema",
        "meaning": "霜；这里是防晒霜",
        "lexical": {
          "part": "noun",
          "lemma": "crema",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "crema solar",
        "meaning": "防晒霜",
        "lexical": {
          "part": "expression",
          "lemma": "crema solar",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he traído",
        "meaning": "我已经带来",
        "lexical": {
          "part": "verb",
          "lemma": "traer",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "la crema para protegerme del sol": {
    "parts": [
      {
        "text": "La crema",
        "role": "nominal",
        "note": "中心名词词块：那种霜，承接 crema solar。"
      },
      {
        "text": "para protegerme",
        "role": "purpose",
        "note": "para + 不定式说明用途；me 是 proteger 的宾语，连写在原形后。"
      },
      {
        "text": "del sol.",
        "role": "modifier",
        "note": "proteger de 的介词补语：免受太阳晒。"
      }
    ],
    "implicitSubject": "",
    "focus": "没有限定动词，是对防晒霜用途的补充说明；para 不把 proteger 变成变位形式。",
    "grammarIds": [
      "g19",
      "g11"
    ],
    "fragment": true,
    "translation": "就是用来保护我不被太阳晒伤的那种霜。",
    "vocabulary": [
      {
        "word": "sol",
        "meaning": "太阳；日照",
        "lexical": {
          "part": "noun",
          "lemma": "sol",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "crema",
        "meaning": "霜；这里是防晒霜",
        "lexical": {
          "part": "noun",
          "lemma": "crema",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "y sé que me estoy quemando ya los hombros": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "而且。"
      },
      {
        "text": "sé",
        "role": "verb",
        "note": "saber 的 yo 现在时，sé 有重音。"
      },
      {
        "text": "que me estoy quemando ya los hombros.",
        "role": "object",
        "note": "知道的内容；内部 me estoy quemando 为正在晒伤自己，los hombros 是身体部位宾语，ya 表已经。"
      }
    ],
    "implicitSubject": "两个分句都为 yo（我）",
    "focus": "外层是 sé［我知道的内容］；里面 los hombros 是 quemando 的宾语，me 表身体的主人受影响，不是主语。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "而且我知道，我的肩膀已经在被晒伤了。",
    "vocabulary": [
      {
        "word": "hombros",
        "meaning": "肩膀",
        "lexical": {
          "part": "noun",
          "lemma": "hombro",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "sé",
        "meaning": "我知道",
        "lexical": {
          "part": "verb",
          "lemma": "saber",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "quemando",
        "meaning": "晒伤／烧伤；副动词",
        "lexical": {
          "part": "verb",
          "lemma": "quemar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "gerundio",
          "persons": []
        }
      }
    ]
  },
  "y en la playa no hay sombra": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着说另一个困难。"
      },
      {
        "text": "en la playa",
        "role": "place",
        "note": "地点前置：在海滩上。"
      },
      {
        "text": "no",
        "role": "modifier",
        "note": "否定。"
      },
      {
        "text": "hay",
        "role": "verb",
        "note": "非人称存在表达。"
      },
      {
        "text": "sombra,",
        "role": "object",
        "note": "没有的东西：阴凉处；不是 hay 的主语。"
      }
    ],
    "implicitSubject": "非人称 hay，无普通主语",
    "focus": "先抓 no hay sombra，再补地点 en la playa。",
    "grammarIds": [
      "g19",
      "g4"
    ],
    "fragment": false,
    "translation": "而且海滩上没有树荫，",
    "vocabulary": [
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "así que estoy jodida": {
    "parts": [
      {
        "text": "así que",
        "role": "connector",
        "note": "所以，引出上述情况的结果。"
      },
      {
        "text": "estoy",
        "role": "verb",
        "note": "estar 的 yo 现在时。"
      },
      {
        "text": "jodida.",
        "role": "attribute",
        "note": "阴性单数表语，描述说话者处境；这是带粗口色彩的“惨了”。"
      }
    ],
    "implicitSubject": "yo（女性说话者）",
    "focus": "estoy + 形容词描述当前处境。温和表达可用 estoy en un lío，不必模仿粗口。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "所以我惨了。",
    "vocabulary": [
      {
        "word": "así que",
        "meaning": "所以",
        "lexical": {
          "part": "expression",
          "lemma": "así que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "estoy",
        "meaning": "我在；我处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "jodida",
        "meaning": "惨了／麻烦大了，带粗口色彩的阴性形式",
        "lexical": {
          "part": "adjective",
          "lemma": "jodido",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "por fin he llegado a la playa": {
    "parts": [
      {
        "text": "Por fin",
        "role": "time",
        "note": "终于，强调到达了。"
      },
      {
        "text": "he llegado",
        "role": "verb",
        "note": "llegar 的 yo 现在完成时。"
      },
      {
        "text": "a la playa.",
        "role": "place",
        "note": "到达的地点；llegar a + 地点。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "he llegado 是主干，por fin 与 a la playa 分别加上终于到达的语气和目的地。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": false,
    "translation": "我终于到海滩了。",
    "vocabulary": [
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Por fin",
        "meaning": "终于",
        "lexical": {
          "part": "expression",
          "lemma": "por fin",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he llegado",
        "meaning": "我已到达",
        "lexical": {
          "part": "verb",
          "lemma": "llegar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "es la playa que está justo en la punta de la península": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 说明是哪个海滩。"
      },
      {
        "text": "la playa que está justo en la punta de la península.",
        "role": "attribute",
        "note": "表语名词短语；内部关系从句 que está… 限定 playa，que 作 está 的主语，justo… 是位置。"
      }
    ],
    "implicitSubject": "主句承接眼前海滩；从句 que = la playa",
    "focus": "外层是 es la playa，内层是 la playa está en la punta。同一句里的 ser 与 estar 各有任务。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这就是位于半岛最尖端的那片海滩。",
    "vocabulary": [
      {
        "word": "península",
        "meaning": "半岛",
        "lexical": {
          "part": "noun",
          "lemma": "península",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "punta",
        "meaning": "尖端；这里指半岛尽头",
        "lexical": {
          "part": "noun",
          "lemma": "punta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "se llama la playa de jamaica y la verdad es que es una playa": {
    "parts": [
      {
        "text": "Se llama",
        "role": "verb",
        "note": "llamarse 的第三人称单数命名用法。"
      },
      {
        "text": "la playa de Jamaica",
        "role": "attribute",
        "note": "名称补语：牙买加海滩。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接对海滩的评价。"
      },
      {
        "text": "la verdad es que",
        "role": "other",
        "note": "说实话，是引入评价的词块。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "una playa",
        "role": "attribute",
        "note": "表语开头；具体怎样不同，在下一条补全。"
      }
    ],
    "implicitSubject": "这片海滩（两个分句）",
    "focus": "先说名字，再说特点；后一部分要连着 bastante distinta 才完整。",
    "grammarIds": [
      "g19",
      "g2",
      "g7"
    ],
    "fragment": true,
    "translation": "它叫牙买加海滩，说实话，这片海滩……",
    "vocabulary": [
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "la verdad es que",
        "meaning": "说实话；其实",
        "lexical": {
          "part": "expression",
          "lemma": "la verdad es que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "bastante distinta": {
    "parts": [
      {
        "text": "bastante",
        "role": "modifier",
        "note": "程度副词：相当，修饰 distinta。"
      },
      {
        "text": "distinta.",
        "role": "attribute",
        "note": "表语形容词，接上条 una playa；阴性单数配合 playa。"
      }
    ],
    "implicitSubject": "",
    "focus": "连读 una playa bastante distinta。这不是完整独立句，别为这条补造一个原文中没有的动词。",
    "grammarIds": [
      "g19",
      "g6"
    ],
    "fragment": true,
    "translation": "……相当不一样。",
    "vocabulary": [
      {
        "word": "distinta",
        "meaning": "不同的，阴性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "distinto",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "bueno, primero que es una playa de un lago, no de... de mar": {
    "parts": [
      {
        "text": "Bueno,",
        "role": "other",
        "note": "口语转场：嗯、好。"
      },
      {
        "text": "primero que",
        "role": "other",
        "note": "口语列举理由的引入，类似“首先呢”。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 说明是什么样的海滩。"
      },
      {
        "text": "una playa de un lago,",
        "role": "attribute",
        "note": "表语：属于湖泊的沙滩。"
      },
      {
        "text": "no de... de mar.",
        "role": "modifier",
        "note": "否定并对照所属水域；口语中重复了一次 de。"
      }
    ],
    "implicitSubject": "这片海滩",
    "focus": "主干是 es una playa，两个 de 短语对照“湖边”与“海边”；不要把 playa 当宾语。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "嗯，首先这是湖边的沙滩，不是海边的。",
    "vocabulary": [
      {
        "word": "lago",
        "meaning": "湖",
        "lexical": {
          "part": "noun",
          "lemma": "lago",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      }
    ]
  },
  "es agua dulce, no agua salada": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 说明水的种类。"
      },
      {
        "text": "agua dulce,",
        "role": "attribute",
        "note": "第一个表语：淡水，dulce 不等于这里的水有甜味。"
      },
      {
        "text": "no agua salada.",
        "role": "attribute",
        "note": "否定的对照表语：不是咸水；salada 随阴性 agua 配合。"
      }
    ],
    "implicitSubject": "这里的水",
    "focus": "比较的是两种水：agua dulce / agua salada。agua 语法上为阴性，即使单数常用 el agua。",
    "grammarIds": [
      "g19",
      "g1",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这里是淡水，不是咸水。",
    "vocabulary": [
      {
        "word": "agua",
        "meaning": "水，语法上是阴性",
        "lexical": {
          "part": "noun",
          "lemma": "agua",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "uncountable"
          ]
        }
      },
      {
        "word": "dulce",
        "meaning": "这里指淡水的",
        "lexical": {
          "part": "adjective",
          "lemma": "dulce",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "salada",
        "meaning": "咸的，阴性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "salado",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "y es un poco distinta al resto que he visto la verdad": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着说另一个特点。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "un poco distinta",
        "role": "attribute",
        "note": "表语：有点不同，distinta 随 playa 用阴性。"
      },
      {
        "text": "al resto que he visto",
        "role": "modifier",
        "note": "比较的参照；al = a + el，que he visto 修饰 resto。"
      },
      {
        "text": "la verdad.",
        "role": "other",
        "note": "句末口语补充：说实话。"
      }
    ],
    "implicitSubject": "主句：这片海滩；he visto：yo",
    "focus": "主干 es distinta，al resto 说与什么不同；que he visto 是我以前见过的，he visto 为完成时。",
    "grammarIds": [
      "g19",
      "g2",
      "g6",
      "g16"
    ],
    "fragment": false,
    "translation": "而且说实话，它和我见过的其他海滩有点不同。",
    "vocabulary": [
      {
        "word": "un poco",
        "meaning": "一点；有点",
        "lexical": {
          "part": "expression",
          "lemma": "un poco",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he visto",
        "meaning": "我已看到",
        "lexical": {
          "part": "verb",
          "lemma": "ver",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "distinta",
        "meaning": "不同的，阴性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "distinto",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "está chula": {
    "parts": [
      {
        "text": "Está",
        "role": "verb",
        "note": "estar 的第三人称单数，用于眼前的评价。"
      },
      {
        "text": "chula.",
        "role": "attribute",
        "note": "表语，西班牙口语：挺漂亮／不错；阴性配合 playa。"
      }
    ],
    "implicitSubject": "la playa（海滩）",
    "focus": "estar chula 是对海滩观感的评价，主语由前文承接。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "挺漂亮的。",
    "vocabulary": [
      {
        "word": "Está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "chula",
        "meaning": "漂亮／不错，西班牙口语，阴性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "chulo",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "he encontrado este trocito que tiene un poco de sombra": {
    "parts": [
      {
        "text": "He encontrado",
        "role": "verb",
        "note": "encontrar 的 yo 现在完成时。"
      },
      {
        "text": "este trocito que tiene un poco de sombra",
        "role": "object",
        "note": "找到的地方；trocito 为 trozo 的指小形式。内部 que 是 tiene 的主语，un poco de sombra 是它的宾语。"
      }
    ],
    "implicitSubject": "he encontrado：yo；tiene：que = este trocito",
    "focus": "外层“我找到这一小块地方”，内层“这一小块地方有点阴凉”。不要让后面的 tiene 与 yo 配合。",
    "grammarIds": [
      "g19",
      "g9",
      "g16"
    ],
    "fragment": false,
    "translation": "我找到了这小块有点阴凉的地方，",
    "vocabulary": [
      {
        "word": "sombra",
        "meaning": "树荫；阴凉处",
        "lexical": {
          "part": "noun",
          "lemma": "sombra",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "trocito",
        "meaning": "一小块；trozo 的指小形式",
        "lexical": {
          "part": "noun",
          "lemma": "trozo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "un poco",
        "meaning": "一点；有点",
        "lexical": {
          "part": "expression",
          "lemma": "un poco",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "He encontrado",
        "meaning": "我已找到",
        "lexical": {
          "part": "verb",
          "lemma": "encontrar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "y es muy pequeño": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接上段的同一处地方。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "muy pequeño.",
        "role": "attribute",
        "note": "表语，阳性单数与 trocito 配合；muy 修饰 pequeño。"
      }
    ],
    "implicitSubject": "este trocito（上一段的小地方）",
    "focus": "主语承接上一条的 trocito，不是发现这片地方的 yo。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "它非常小。",
    "vocabulary": [
      {
        "word": "pequeño",
        "meaning": "小的，阳性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "pequeño",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "es un trocito muy pequeño y huele mucho a olores indeseados": {
    "parts": [
      {
        "text": "Es",
        "role": "verb",
        "note": "ser 第三人称单数。"
      },
      {
        "text": "un trocito muy pequeño",
        "role": "attribute",
        "note": "表语：很小的一块地方。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "并列连接。"
      },
      {
        "text": "huele",
        "role": "verb",
        "note": "oler 第三人称单数，词干变为 huele。"
      },
      {
        "text": "mucho",
        "role": "modifier",
        "note": "程度副词，气味很重。"
      },
      {
        "text": "a olores indeseados.",
        "role": "modifier",
        "note": "oler a 要求的介词补语：有难闻的气味，indeseados 与 olores 复数配合。"
      }
    ],
    "implicitSubject": "两部分都承接这小块地方",
    "focus": "主干分两段：es un trocito；huele a algo。气味前的 a 属于 oler a 搭配，不是地点。",
    "grammarIds": [
      "g19",
      "g2",
      "g6"
    ],
    "fragment": false,
    "translation": "这里就这么小小一块，而且有很浓的难闻气味。",
    "vocabulary": [
      {
        "word": "trocito",
        "meaning": "一小块；trozo 的指小形式",
        "lexical": {
          "part": "noun",
          "lemma": "trozo",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "olores",
        "meaning": "气味",
        "lexical": {
          "part": "noun",
          "lemma": "olor",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "huele",
        "meaning": "闻起来",
        "lexical": {
          "part": "verb",
          "lemma": "oler",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      },
      {
        "word": "pequeño",
        "meaning": "小的，阳性单数",
        "lexical": {
          "part": "adjective",
          "lemma": "pequeño",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "no sé a qué huele, pero no huele bien": {
    "parts": [
      {
        "text": "No",
        "role": "modifier",
        "note": "否定我知道的程度。"
      },
      {
        "text": "sé",
        "role": "verb",
        "note": "saber 的 yo 现在时，带重音。"
      },
      {
        "text": "a qué huele,",
        "role": "object",
        "note": "间接疑问作 sé 的宾语；内部 a qué 来自 oler a，qué 保留重音。"
      },
      {
        "text": "pero",
        "role": "connector",
        "note": "转折。"
      },
      {
        "text": "no",
        "role": "modifier",
        "note": "否定后面的闻起来。"
      },
      {
        "text": "huele",
        "role": "verb",
        "note": "oler 第三人称单数，主语承接此处气味来源。"
      },
      {
        "text": "bien.",
        "role": "modifier",
        "note": "方式／评价副词：好闻，no huele bien 就是不好闻。"
      }
    ],
    "implicitSubject": "sé：yo；huele：这里／气味来源",
    "focus": "外层 no sé［它是什么味道］；后半句 no huele bien 描述这地方，主语从我切换为这里。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "我不知道是什么味道，反正不好闻。",
    "vocabulary": [
      {
        "word": "a qué huele",
        "meaning": "是什么气味",
        "lexical": {
          "part": "expression",
          "lemma": "a qué huele",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "sé",
        "meaning": "我知道",
        "lexical": {
          "part": "verb",
          "lemma": "saber",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "huele",
        "meaning": "闻起来",
        "lexical": {
          "part": "verb",
          "lemma": "oler",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "para llegar a casa caminando desde la playa es una hora": {
    "parts": [
      {
        "text": "Para llegar a casa",
        "role": "purpose",
        "note": "到达住处这一行程，para + 不定式，口语中先说明行程。"
      },
      {
        "text": "caminando",
        "role": "modifier",
        "note": "步行方式。"
      },
      {
        "text": "desde la playa",
        "role": "place",
        "note": "出发点：从海滩。"
      },
      {
        "text": "es",
        "role": "verb",
        "note": "原句口语里用 ser 报路程用时。"
      },
      {
        "text": "una hora.",
        "role": "attribute",
        "note": "所报的时间：一小时，不是直接宾语。"
      }
    ],
    "implicitSubject": "路程用时表达",
    "focus": "口语把行程条件放在前面，再报用时。更完整可说 Se tarda una hora en llegar…；保留原话，不把 para 短语误标普通主语。",
    "grammarIds": [
      "g19",
      "g11"
    ],
    "fragment": false,
    "translation": "从海滩走回住处，要一个小时。",
    "vocabulary": [
      {
        "word": "playa",
        "meaning": "海滩／湖边沙滩",
        "lexical": {
          "part": "noun",
          "lemma": "playa",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "hora",
        "meaning": "小时",
        "lexical": {
          "part": "noun",
          "lemma": "hora",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "caminando",
        "meaning": "步行；副动词",
        "lexical": {
          "part": "verb",
          "lemma": "caminar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "gerundio",
          "persons": []
        }
      }
    ]
  },
  "y en transporte público son 30 minutos": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "连接另一种出行方式。"
      },
      {
        "text": "en transporte público",
        "role": "companion",
        "note": "交通方式：坐公共交通。"
      },
      {
        "text": "son",
        "role": "verb",
        "note": "按复数分钟数报用时。"
      },
      {
        "text": "30 minutos.",
        "role": "attribute",
        "note": "所报的时间三十分钟；不是交通工具的宾语。"
      }
    ],
    "implicitSubject": "路程用时表达",
    "focus": "和上一条一小时步行相比较：如果坐公共交通，用时是三十分钟。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "坐公共交通则要三十分钟。",
    "vocabulary": [
      {
        "word": "minutos",
        "meaning": "分钟",
        "lexical": {
          "part": "noun",
          "lemma": "minuto",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "transporte público",
        "meaning": "公共交通",
        "lexical": {
          "part": "expression",
          "lemma": "transporte público",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "son",
        "meaning": "是；这里用于报时或指认",
        "lexical": {
          "part": "verb",
          "lemma": "ser",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      }
    ]
  },
  "así que voy a intentar coger el autobús para volver": {
    "parts": [
      {
        "text": "Así que",
        "role": "connector",
        "note": "所以，连接前文的时间与天气情况。"
      },
      {
        "text": "voy a intentar coger",
        "role": "verb",
        "note": "ir a + intentar，后接 coger 原形：打算试着坐。"
      },
      {
        "text": "el autobús",
        "role": "object",
        "note": "想搭乘的东西：公交车。"
      },
      {
        "text": "para volver",
        "role": "purpose",
        "note": "para + volver，说明乘车的目的：回去。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "主干是 voy a intentar coger el autobús；para volver 加上目的，下条 porque… 再补原因。",
    "grammarIds": [
      "g19",
      "g8",
      "g11"
    ],
    "fragment": false,
    "translation": "所以我准备试着坐公交回去，",
    "vocabulary": [
      {
        "word": "autobús",
        "meaning": "公交车",
        "lexical": {
          "part": "noun",
          "lemma": "autobús",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Así que",
        "meaning": "所以",
        "lexical": {
          "part": "expression",
          "lemma": "así que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "voy",
        "meaning": "我去；voy a + 原形表示计划",
        "lexical": {
          "part": "verb",
          "lemma": "ir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "yo"
          ]
        }
      }
    ]
  },
  "porque hace mucho calor": {
    "parts": [
      {
        "text": "porque",
        "role": "connector",
        "note": "因为，解释为什么想坐车。"
      },
      {
        "text": "hace",
        "role": "verb",
        "note": "hacer 的非人称天气用法，固定用第三人称单数。"
      },
      {
        "text": "mucho calor.",
        "role": "object",
        "note": "天气表达中的 calor，不是人称主语。"
      }
    ],
    "implicitSubject": "非人称天气句，无普通主语",
    "focus": "hace mucho calor 要整体记为“天气很热”；原因接的是上一段准备坐车。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "因为实在太热了。",
    "vocabulary": [
      {
        "word": "calor",
        "meaning": "热；高温",
        "lexical": {
          "part": "noun",
          "lemma": "calor",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "hace mucho calor",
        "meaning": "天气／这里很热，非人称表达",
        "lexical": {
          "part": "expression",
          "lemma": "hace mucho calor",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "acabo de llegar a la furgoneta": {
    "parts": [
      {
        "text": "Acabo de llegar",
        "role": "verb",
        "note": "acabar de + llegar：我刚刚到达。"
      },
      {
        "text": "a la furgoneta.",
        "role": "place",
        "note": "到达的目的地；llegar a + 地点。"
      }
    ],
    "implicitSubject": "yo（我）",
    "focus": "acabo 的词形对应 yo；llegar 保持原形，a 后面接厢式车这个地点。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "我刚回到厢式车。",
    "vocabulary": [
      {
        "word": "furgoneta",
        "meaning": "厢式车；这里是旅行住的车",
        "lexical": {
          "part": "noun",
          "lemma": "furgoneta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "Acabo de",
        "meaning": "我刚刚……；后接不定式",
        "lexical": {
          "part": "expression",
          "lemma": "acabo de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "y como no, aquí dentro hace mucho calor": {
    "parts": [
      {
        "text": "Y",
        "role": "connector",
        "note": "接着描述车内。"
      },
      {
        "text": "como no,",
        "role": "other",
        "note": "原字幕写 como no，语境为“果然、不出所料”，规范写 cómo no。"
      },
      {
        "text": "aquí dentro",
        "role": "place",
        "note": "地点：这里面。"
      },
      {
        "text": "hace",
        "role": "verb",
        "note": "hacer 的非人称天气用法。"
      },
      {
        "text": "mucho calor.",
        "role": "object",
        "note": "气温很热；与 hace 组成整体表达。"
      }
    ],
    "implicitSubject": "非人称环境温度表达",
    "focus": "先看 aquí dentro hace mucho calor，再把“果然”的插入语加回来。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "果然，这里面热得很。",
    "vocabulary": [
      {
        "word": "calor",
        "meaning": "热；高温",
        "lexical": {
          "part": "noun",
          "lemma": "calor",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "hace mucho calor",
        "meaning": "天气／这里很热，非人称表达",
        "lexical": {
          "part": "expression",
          "lemma": "hace mucho calor",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "aquí dentro",
        "meaning": "这里面",
        "lexical": {
          "part": "expression",
          "lemma": "aquí dentro",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "concretamente... 38 grados": {
    "parts": [
      {
        "text": "Concretamente...",
        "role": "modifier",
        "note": "具体地、确切地；补充前面说的温度。"
      },
      {
        "text": "38 grados.",
        "role": "nominal",
        "note": "温度的数量词块：三十八度。"
      }
    ],
    "implicitSubject": "",
    "focus": "这里报出温度，没有新的限定动词；与上条“车内很热”一起理解。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "确切地说……三十八度。",
    "vocabulary": [
      {
        "word": "grados",
        "meaning": "度；这里是温度的单位",
        "lexical": {
          "part": "noun",
          "lemma": "grado",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "Concretamente",
        "meaning": "具体地；确切地",
        "lexical": {
          "part": "adverb",
          "lemma": "concretamente",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "está en modo sauna la furgoneta": {
    "parts": [
      {
        "text": "Está",
        "role": "verb",
        "note": "estar 第三人称单数。"
      },
      {
        "text": "en modo sauna",
        "role": "attribute",
        "note": "状态表语：处于桑拿模式，是形容很热的玩笑说法。"
      },
      {
        "text": "la furgoneta.",
        "role": "subject",
        "note": "真正的主语放在后面：这辆厢式车。"
      }
    ],
    "implicitSubject": "",
    "focus": "把语序还原为 La furgoneta está en modo sauna；动词后的 furgoneta 是主语，不是宾语。",
    "grammarIds": [
      "g19",
      "g2"
    ],
    "fragment": false,
    "translation": "这辆厢式车现在简直是桑拿模式。",
    "vocabulary": [
      {
        "word": "furgoneta",
        "meaning": "厢式车；这里是旅行住的车",
        "lexical": {
          "part": "noun",
          "lemma": "furgoneta",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "modo sauna",
        "meaning": "桑拿模式，形容非常热",
        "lexical": {
          "part": "expression",
          "lemma": "modo sauna",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "Está",
        "meaning": "它在；处于某状态",
        "lexical": {
          "part": "verb",
          "lemma": "estar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "lo he abierto todo para que entre un poco de aire": {
    "parts": [
      {
        "text": "Lo",
        "role": "object",
        "note": "直接宾语代词，与后面的 todo 呼应，指所有能打开的部位。"
      },
      {
        "text": "he abierto",
        "role": "verb",
        "note": "abrir 的 yo 现在完成时，abierto 为不规则分词。"
      },
      {
        "text": "todo",
        "role": "object",
        "note": "与 lo 同指所有可打开的东西；不是另一个独立物品。"
      },
      {
        "text": "para que entre un poco de aire",
        "role": "purpose",
        "note": "目的从句；entre 是虚拟式现在时，主语 un poco de aire 后置。"
      }
    ],
    "implicitSubject": "he abierto：yo；entre：un poco de aire",
    "focus": "外层“我把能打开的都打开了”，内层“好让一点空气进来”；不是 yo 在 entre。下条 de 33 grados 继续修饰 aire。",
    "grammarIds": [
      "g19",
      "g14",
      "g16"
    ],
    "fragment": true,
    "translation": "我把能打开的都打开了，好让空气进来一点，",
    "vocabulary": [
      {
        "word": "aire",
        "meaning": "空气",
        "lexical": {
          "part": "noun",
          "lemma": "aire",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "uncountable"
          ]
        }
      },
      {
        "word": "un poco",
        "meaning": "一点；有点",
        "lexical": {
          "part": "expression",
          "lemma": "un poco",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "para que",
        "meaning": "为了让……；本段后接虚拟式",
        "lexical": {
          "part": "expression",
          "lemma": "para que",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "he abierto",
        "meaning": "我已打开",
        "lexical": {
          "part": "verb",
          "lemma": "abrir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "yo"
          ]
        }
      },
      {
        "word": "entre",
        "meaning": "进入；这里是虚拟式现在时",
        "lexical": {
          "part": "verb",
          "lemma": "entrar",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "de 33 grados y que se refresque": {
    "parts": [
      {
        "text": "de 33 grados",
        "role": "modifier",
        "note": "接上一条 aire：三十三度的空气。"
      },
      {
        "text": "y",
        "role": "connector",
        "note": "连接并列的目的。"
      },
      {
        "text": "que se refresque",
        "role": "purpose",
        "note": "承接上一条 para que 的第二个目的从句：让车内凉快些；refresque 为虚拟式现在时。"
      }
    ],
    "implicitSubject": "se refresque：车内／la furgoneta",
    "focus": "两条连着看：para que entre… y（para）que se refresque。不能把 que 当作主语，也不能把 de 33 grados 单独当新句子。",
    "grammarIds": [
      "g19"
    ],
    "fragment": true,
    "translation": "……让外面三十三度的空气进来，让这里凉快一点，",
    "vocabulary": [
      {
        "word": "grados",
        "meaning": "度；这里是温度的单位",
        "lexical": {
          "part": "noun",
          "lemma": "grado",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "se refresque",
        "meaning": "凉快下来；这里是虚拟式现在时",
        "lexical": {
          "part": "verb",
          "lemma": "refrescarse",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "porque aquí dentro hace mucho calor": {
    "parts": [
      {
        "text": "porque",
        "role": "connector",
        "note": "原因：因为。"
      },
      {
        "text": "aquí dentro",
        "role": "place",
        "note": "地点：车里面。"
      },
      {
        "text": "hace",
        "role": "verb",
        "note": "hacer 的非人称环境温度用法。"
      },
      {
        "text": "mucho calor.",
        "role": "object",
        "note": "与 hace 一起表示很热。"
      }
    ],
    "implicitSubject": "非人称环境温度表达",
    "focus": "说明为什么开门窗透气。先抓 hace mucho calor，再补 aquí dentro。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "因为这里面实在太热了。",
    "vocabulary": [
      {
        "word": "calor",
        "meaning": "热；高温",
        "lexical": {
          "part": "noun",
          "lemma": "calor",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "uncountable"
          ]
        }
      },
      {
        "word": "hace mucho calor",
        "meaning": "天气／这里很热，非人称表达",
        "lexical": {
          "part": "expression",
          "lemma": "hace mucho calor",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "aquí dentro",
        "meaning": "这里面",
        "lexical": {
          "part": "expression",
          "lemma": "aquí dentro",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  },
  "si has entendido la mayoría de este vídeo": {
    "parts": [
      {
        "text": "Si",
        "role": "connector",
        "note": "如果，引出条件，不是带重音的 sí“是”。"
      },
      {
        "text": "has entendido",
        "role": "verb",
        "note": "entender 的 tú 现在完成时。"
      },
      {
        "text": "la mayoría de este vídeo",
        "role": "object",
        "note": "已经理解的内容；la mayoría de 是大部分。"
      }
    ],
    "implicitSubject": "tú（观众）",
    "focus": "这是条件分句，还没给出后面的建议／结果。不要单独给它补出一个主句。",
    "grammarIds": [
      "g19",
      "g16"
    ],
    "fragment": true,
    "translation": "如果你已经听懂了这个视频的大部分内容，",
    "vocabulary": [
      {
        "word": "mayoría",
        "meaning": "大多数；大部分",
        "lexical": {
          "part": "noun",
          "lemma": "mayoría",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "has entendido",
        "meaning": "你已听懂／理解",
        "lexical": {
          "part": "verb",
          "lemma": "entender",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "perfecto",
          "persons": [
            "tú"
          ]
        }
      }
    ]
  },
  "pero todavía no puedes hablar de español": {
    "parts": [
      {
        "text": "pero",
        "role": "connector",
        "note": "转折，接上条已经听懂的条件。"
      },
      {
        "text": "todavía",
        "role": "time",
        "note": "还、仍然。"
      },
      {
        "text": "no",
        "role": "modifier",
        "note": "否定。"
      },
      {
        "text": "puedes hablar",
        "role": "verb",
        "note": "poder 的 tú 现在时 + hablar 原形。"
      },
      {
        "text": "de español",
        "role": "modifier",
        "note": "原字幕多了 de；语境想说 hablar español“说西语”，保留原文并提示。"
      }
    ],
    "implicitSubject": "tú（同上一条）",
    "focus": "接上条的条件：如果你大多听懂，但仍不能开口……。这里不把原字幕的 de español 当成规范搭配教给你。",
    "grammarIds": [
      "g19",
      "g10"
    ],
    "fragment": true,
    "translation": "……但你仍然没法开口说西语，",
    "vocabulary": [
      {
        "word": "puedes",
        "meaning": "你能够",
        "lexical": {
          "part": "verb",
          "lemma": "poder",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "tú"
          ]
        }
      }
    ]
  },
  "únete a las 2 clases semanales de mi comunidad": {
    "parts": [
      {
        "text": "únete",
        "role": "verb",
        "note": "unirse 的 tú 肯定命令式，te 连写在动词后。"
      },
      {
        "text": "a las 2 clases semanales de mi comunidad",
        "role": "modifier",
        "note": "unirse a 要求的介词补语：加入的课程；semanales 修饰 clases，de mi comunidad 说明来源。"
      }
    ],
    "implicitSubject": "tú（观众）",
    "focus": "这是前面条件对应的建议，也是片尾推广。a 是 unirse a 的固定介词，不是把它当直接宾语代词结构。",
    "grammarIds": [
      "g19",
      "g6"
    ],
    "fragment": false,
    "translation": "欢迎加入我的社群每周两次的课程。",
    "vocabulary": [
      {
        "word": "clases",
        "meaning": "课；课程",
        "lexical": {
          "part": "noun",
          "lemma": "clase",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "plural",
          "nounTypes": [
            "common",
            "concrete",
            "countable"
          ]
        }
      },
      {
        "word": "comunidad",
        "meaning": "社群",
        "lexical": {
          "part": "noun",
          "lemma": "comunidad",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "feminine",
          "number": "singular",
          "nounTypes": [
            "common",
            "concrete",
            "collective"
          ]
        }
      },
      {
        "word": "únete",
        "meaning": "加入吧；tú 肯定命令式",
        "lexical": {
          "part": "verb",
          "lemma": "unirse",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "",
          "persons": [
            "tú"
          ]
        }
      }
    ]
  },
  "con el plan mensual, cada clase sale por menos de 4$": {
    "parts": [
      {
        "text": "con el plan mensual,",
        "role": "modifier",
        "note": "条件／方式：按月付方案。"
      },
      {
        "text": "cada clase",
        "role": "subject",
        "note": "每一节课，单数主语。"
      },
      {
        "text": "sale",
        "role": "verb",
        "note": "salir 的第三人称单数，价格用法“折合花费”。"
      },
      {
        "text": "por menos de 4$",
        "role": "modifier",
        "note": "金额补语；salir por + 金额，menos de 表少于某数量。"
      }
    ],
    "implicitSubject": "",
    "focus": "先看 cada clase sale por…，再补月付条件。这里 sale 不是“走出去”；原视频报价不等于已核实的现价。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "如果按月订阅，每节课折合不到四美元。",
    "vocabulary": [
      {
        "word": "plan",
        "meaning": "方案；订阅计划",
        "lexical": {
          "part": "noun",
          "lemma": "plan",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "menos de",
        "meaning": "少于某个数量",
        "lexical": {
          "part": "expression",
          "lemma": "menos de",
          "topics": [
            "旅行与日常生活"
          ]
        }
      },
      {
        "word": "sale",
        "meaning": "这里指折合花费",
        "lexical": {
          "part": "verb",
          "lemma": "salir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "él / ella / usted"
          ]
        }
      }
    ]
  },
  "y si eliges el plan anual dos meses te salen gratis": {
    "parts": [
      {
        "text": "y",
        "role": "connector",
        "note": "接着介绍另一种方案。"
      },
      {
        "text": "si eliges el plan anual",
        "role": "modifier",
        "note": "条件分句：若你选年付；eliges 是 tú，el plan anual 为宾语。"
      },
      {
        "text": "dos meses",
        "role": "subject",
        "note": "主句真正的主语：两个月，复数。"
      },
      {
        "text": "te",
        "role": "indirect",
        "note": "间接宾语：对你来说。"
      },
      {
        "text": "salen",
        "role": "verb",
        "note": "salir 第三人称复数，与 dos meses 配合。"
      },
      {
        "text": "gratis",
        "role": "modifier",
        "note": "说明费用为免费，不是直接宾语。"
      }
    ],
    "implicitSubject": "条件从句 eliges：tú",
    "focus": "有两个主语：si 从句是 tú；结果分句是 dos meses，所以是 salen。内容属于原视频的推广说明。",
    "grammarIds": [
      "g19"
    ],
    "fragment": false,
    "translation": "如果你选年费方案，就有两个月免费。",
    "vocabulary": [
      {
        "word": "plan",
        "meaning": "方案；订阅计划",
        "lexical": {
          "part": "noun",
          "lemma": "plan",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "singular",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "meses",
        "meaning": "月",
        "lexical": {
          "part": "noun",
          "lemma": "mes",
          "topics": [
            "旅行与日常生活"
          ],
          "gender": "masculine",
          "number": "plural",
          "nounTypes": [
            "common",
            "abstract",
            "countable"
          ]
        }
      },
      {
        "word": "eliges",
        "meaning": "你选择",
        "lexical": {
          "part": "verb",
          "lemma": "elegir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "tú"
          ]
        }
      },
      {
        "word": "salen",
        "meaning": "这里指对你来说要花／折合",
        "lexical": {
          "part": "verb",
          "lemma": "salir",
          "topics": [
            "旅行与日常生活"
          ],
          "tense": "presente",
          "persons": [
            "ellos / ellas / ustedes"
          ]
        }
      },
      {
        "word": "gratis",
        "meaning": "免费地；免费的",
        "lexical": {
          "part": "adverb",
          "lemma": "gratis",
          "topics": [
            "旅行与日常生活"
          ]
        }
      }
    ]
  }
};
