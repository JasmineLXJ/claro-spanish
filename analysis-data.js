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
  }
};
