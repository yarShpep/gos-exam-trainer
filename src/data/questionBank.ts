import type { QuestionSection } from '@/types/domain'

export const questionSections: QuestionSection[] = [
  {
    "id": "section-1",
    "title": "Тема 1. Программирование на Python: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_1_python_100_тестовых_вопросов.md.",
    "order": 1,
    "questions": [
      {
        "id": "section-1-q1",
        "sectionId": "section-1",
        "order": 1,
        "text": "Какое специальное имя метода используется в Python как конструктор-инициализатор объекта?",
        "options": [
          {
            "id": "section-1-q1-a",
            "label": "а",
            "text": "`__init__`"
          },
          {
            "id": "section-1-q1-b",
            "label": "б",
            "text": "`__class__`"
          },
          {
            "id": "section-1-q1-v",
            "label": "в",
            "text": "`__main__`"
          },
          {
            "id": "section-1-q1-g",
            "label": "г",
            "text": "`__name__`"
          }
        ],
        "correctOptionId": "section-1-q1-a",
        "explanation": "__init__ вызывается после создания экземпляра и обычно задает начальное состояние объекта.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q2",
        "sectionId": "section-1",
        "order": 2,
        "text": "Какой метод списка удаляет и возвращает элемент по указанному индексу?",
        "options": [
          {
            "id": "section-1-q2-a",
            "label": "а",
            "text": "`pop()`"
          },
          {
            "id": "section-1-q2-b",
            "label": "б",
            "text": "`remove()`"
          },
          {
            "id": "section-1-q2-v",
            "label": "в",
            "text": "`delete()`"
          },
          {
            "id": "section-1-q2-g",
            "label": "г",
            "text": "`clear()`"
          }
        ],
        "correctOptionId": "section-1-q2-a",
        "explanation": "list.pop(i) удаляет элемент с индексом i и возвращает его; remove() удаляет по значению.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q3",
        "sectionId": "section-1",
        "order": 3,
        "text": "В чем главное отличие списка от кортежа?",
        "options": [
          {
            "id": "section-1-q3-a",
            "label": "а",
            "text": "Список изменяемый, кортеж неизменяемый"
          },
          {
            "id": "section-1-q3-b",
            "label": "б",
            "text": "Кортеж изменяемый, список неизменяемый"
          },
          {
            "id": "section-1-q3-v",
            "label": "в",
            "text": "Список может хранить только числа"
          },
          {
            "id": "section-1-q3-g",
            "label": "г",
            "text": "Кортеж может хранить только строки"
          }
        ],
        "correctOptionId": "section-1-q3-a",
        "explanation": "элементы списка можно добавлять, удалять и заменять; кортеж после создания изменить нельзя.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q4",
        "sectionId": "section-1",
        "order": 4,
        "text": "Что произойдет при выполнении 10 / 0 в Python?",
        "options": [
          {
            "id": "section-1-q4-a",
            "label": "а",
            "text": "Вернется `0`"
          },
          {
            "id": "section-1-q4-b",
            "label": "б",
            "text": "Вернется `None`"
          },
          {
            "id": "section-1-q4-v",
            "label": "в",
            "text": "Возникнет `ZeroDivisionError`"
          },
          {
            "id": "section-1-q4-g",
            "label": "г",
            "text": "Возникнет `TypeError`"
          }
        ],
        "correctOptionId": "section-1-q4-v",
        "explanation": "деление чисел на ноль в Python запрещено и приводит к исключению.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-errors-and-exceptions"
        ]
      },
      {
        "id": "section-1-q5",
        "sectionId": "section-1",
        "order": 5,
        "text": "Что такое декоратор в Python?",
        "options": [
          {
            "id": "section-1-q5-a",
            "label": "а",
            "text": "Функция или объект, изменяющий поведение другой функции/класса"
          },
          {
            "id": "section-1-q5-b",
            "label": "б",
            "text": "Комментарий перед функцией"
          },
          {
            "id": "section-1-q5-v",
            "label": "в",
            "text": "Тип данных для хранения цветов"
          },
          {
            "id": "section-1-q5-g",
            "label": "г",
            "text": "Способ импортировать модуль"
          }
        ],
        "correctOptionId": "section-1-q5-a",
        "explanation": "декоратор принимает объект и возвращает объект, обычно оборачивая функцию дополнительной логикой.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q6",
        "sectionId": "section-1",
        "order": 6,
        "text": "Какой первый параметр обычно принимает метод экземпляра?",
        "options": [
          {
            "id": "section-1-q6-a",
            "label": "а",
            "text": "`cls`"
          },
          {
            "id": "section-1-q6-b",
            "label": "б",
            "text": "`self`"
          },
          {
            "id": "section-1-q6-v",
            "label": "в",
            "text": "`this`"
          },
          {
            "id": "section-1-q6-g",
            "label": "г",
            "text": "`instance`"
          }
        ],
        "correctOptionId": "section-1-q6-b",
        "explanation": "через self метод получает доступ к атрибутам конкретного экземпляра.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q7",
        "sectionId": "section-1",
        "order": 7,
        "text": "Какой первый параметр обычно принимает метод класса, объявленный через @classmethod?",
        "options": [
          {
            "id": "section-1-q7-a",
            "label": "а",
            "text": "`self`"
          },
          {
            "id": "section-1-q7-b",
            "label": "б",
            "text": "`cls`"
          },
          {
            "id": "section-1-q7-v",
            "label": "в",
            "text": "`super`"
          },
          {
            "id": "section-1-q7-g",
            "label": "г",
            "text": "`class`"
          }
        ],
        "correctOptionId": "section-1-q7-b",
        "explanation": "метод класса получает сам класс, а не конкретный экземпляр.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q8",
        "sectionId": "section-1",
        "order": 8,
        "text": "Чем отличается @staticmethod от обычного метода экземпляра?",
        "options": [
          {
            "id": "section-1-q8-a",
            "label": "а",
            "text": "Он автоматически получает `self`"
          },
          {
            "id": "section-1-q8-b",
            "label": "б",
            "text": "Он автоматически получает `cls`"
          },
          {
            "id": "section-1-q8-v",
            "label": "в",
            "text": "Он не получает ни `self`, ни `cls` автоматически"
          },
          {
            "id": "section-1-q8-g",
            "label": "г",
            "text": "Он всегда возвращает `None`"
          }
        ],
        "correctOptionId": "section-1-q8-v",
        "explanation": "статический метод логически связан с классом, но не зависит от состояния экземпляра или класса.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q9",
        "sectionId": "section-1",
        "order": 9,
        "text": "Какой подход лучше подходит для чтения текстового файла размером более 7 Гб?",
        "options": [
          {
            "id": "section-1-q9-a",
            "label": "а",
            "text": "`file.read()` целиком в память"
          },
          {
            "id": "section-1-q9-b",
            "label": "б",
            "text": "Построчное чтение или чтение чанками"
          },
          {
            "id": "section-1-q9-v",
            "label": "в",
            "text": "Копирование файла в список через `list(file)` всегда безопасно"
          },
          {
            "id": "section-1-q9-g",
            "label": "г",
            "text": "Открытие файла только в режиме `w`"
          }
        ],
        "correctOptionId": "section-1-q9-b",
        "explanation": "большой файл нельзя надежно загружать целиком в память; потоковая обработка снижает потребление RAM.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q10",
        "sectionId": "section-1",
        "order": 10,
        "text": "Что вернет выражение set([1, 5, 9, 0]) & set([3, 0, 2, 9])?",
        "options": [
          {
            "id": "section-1-q10-a",
            "label": "а",
            "text": "`{0, 9}`"
          },
          {
            "id": "section-1-q10-b",
            "label": "б",
            "text": "`[1, 5, 9, 0, 3, 2]`"
          },
          {
            "id": "section-1-q10-v",
            "label": "в",
            "text": "`{1, 5, 3, 2}`"
          },
          {
            "id": "section-1-q10-g",
            "label": "г",
            "text": "`[]`"
          }
        ],
        "correctOptionId": "section-1-q10-a",
        "explanation": "оператор & для множеств возвращает пересечение, то есть элементы, присутствующие в обоих множествах.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q11",
        "sectionId": "section-1",
        "order": 11,
        "text": "Если нужно найти пересечение двух списков с учетом повторов элементов, что лучше использовать?",
        "options": [
          {
            "id": "section-1-q11-a",
            "label": "а",
            "text": "Только `set`"
          },
          {
            "id": "section-1-q11-b",
            "label": "б",
            "text": "`collections.Counter`"
          },
          {
            "id": "section-1-q11-v",
            "label": "в",
            "text": "Только `tuple`"
          },
          {
            "id": "section-1-q11-g",
            "label": "г",
            "text": "`str.join()`"
          }
        ],
        "correctOptionId": "section-1-q11-b",
        "explanation": "set убирает дубликаты, а Counter хранит количество вхождений каждого хешируемого элемента.",
        "sourceRefs": [
          "общая информация.md",
          "Python: collections.Counter"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-collections-counter"
        ]
      },
      {
        "id": "section-1-q12",
        "sectionId": "section-1",
        "order": 12,
        "text": "Какая структура удобна для удаления текста во вложенных скобках?",
        "options": [
          {
            "id": "section-1-q12-a",
            "label": "а",
            "text": "Стек или счетчик уровня вложенности"
          },
          {
            "id": "section-1-q12-b",
            "label": "б",
            "text": "Только сортировка строки"
          },
          {
            "id": "section-1-q12-v",
            "label": "в",
            "text": "Только `sum()`"
          },
          {
            "id": "section-1-q12-g",
            "label": "г",
            "text": "Только `zip()`"
          }
        ],
        "correctOptionId": "section-1-q12-a",
        "explanation": "при встрече ( уровень вложенности увеличивается, при ) уменьшается; символы сохраняются только на нулевом уровне.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q13",
        "sectionId": "section-1",
        "order": 13,
        "text": "Какие функции прямо требуются в задании на сумму квадратов двузначных чисел, делящихся на 77?",
        "options": [
          {
            "id": "section-1-q13-a",
            "label": "а",
            "text": "`filter()`, `map()`, `sum()`"
          },
          {
            "id": "section-1-q13-b",
            "label": "б",
            "text": "`zip()`, `open()`, `dir()`"
          },
          {
            "id": "section-1-q13-v",
            "label": "в",
            "text": "`sorted()`, `eval()`, `exec()`"
          },
          {
            "id": "section-1-q13-g",
            "label": "г",
            "text": "`print()`, `input()`, `breakpoint()`"
          }
        ],
        "correctOptionId": "section-1-q13-a",
        "explanation": "filter() отбирает числа, map() преобразует их в квадраты, sum() суммирует результат.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q14",
        "sectionId": "section-1",
        "order": 14,
        "text": "Что возвращает filter() в Python 3?",
        "options": [
          {
            "id": "section-1-q14-a",
            "label": "а",
            "text": "Список"
          },
          {
            "id": "section-1-q14-b",
            "label": "б",
            "text": "Кортеж"
          },
          {
            "id": "section-1-q14-v",
            "label": "в",
            "text": "Итератор"
          },
          {
            "id": "section-1-q14-g",
            "label": "г",
            "text": "Словарь"
          }
        ],
        "correctOptionId": "section-1-q14-v",
        "explanation": "filter() лениво выдает элементы, удовлетворяющие условию; для списка нужен list(filter(...)).",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q15",
        "sectionId": "section-1",
        "order": 15,
        "text": "Что возвращает map() в Python 3?",
        "options": [
          {
            "id": "section-1-q15-a",
            "label": "а",
            "text": "Итератор"
          },
          {
            "id": "section-1-q15-b",
            "label": "б",
            "text": "Строку"
          },
          {
            "id": "section-1-q15-v",
            "label": "в",
            "text": "Множество"
          },
          {
            "id": "section-1-q15-g",
            "label": "г",
            "text": "Всегда `None`"
          }
        ],
        "correctOptionId": "section-1-q15-a",
        "explanation": "map() лениво применяет функцию к элементам и не создает список автоматически.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q16",
        "sectionId": "section-1",
        "order": 16,
        "text": "Как правильно отформатировать минуты и секунды в задаче про часы h:mm:ss?",
        "options": [
          {
            "id": "section-1-q16-a",
            "label": "а",
            "text": "`f\"{h}:{m}:{s}\"`"
          },
          {
            "id": "section-1-q16-b",
            "label": "б",
            "text": "`f\"{h}:{m:02}:{s:02}\"`"
          },
          {
            "id": "section-1-q16-v",
            "label": "в",
            "text": "`f\"{h:02}:{m}:{s}\"`"
          },
          {
            "id": "section-1-q16-g",
            "label": "г",
            "text": "`str(h, m, s)`"
          }
        ],
        "correctOptionId": "section-1-q16-b",
        "explanation": "часы выводятся без обязательного ведущего нуля, а минуты и секунды должны быть двузначными.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q17",
        "sectionId": "section-1",
        "order": 17,
        "text": "Как получить часы от начала суток, если прошло n секунд?",
        "options": [
          {
            "id": "section-1-q17-a",
            "label": "а",
            "text": "`n // 60`"
          },
          {
            "id": "section-1-q17-b",
            "label": "б",
            "text": "`(n // 3600) % 24`"
          },
          {
            "id": "section-1-q17-v",
            "label": "в",
            "text": "`n % 3600`"
          },
          {
            "id": "section-1-q17-g",
            "label": "г",
            "text": "`n / 24`"
          }
        ],
        "correctOptionId": "section-1-q17-b",
        "explanation": "целое деление на 3600 дает количество часов, а % 24 ограничивает результат текущими сутками.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q18",
        "sectionId": "section-1",
        "order": 18,
        "text": "Как объявить класс Train с атрибутами type и speed наиболее корректно?",
        "options": [
          {
            "id": "section-1-q18-a",
            "label": "а",
            "text": "Через `def Train(type, speed): ...`"
          },
          {
            "id": "section-1-q18-b",
            "label": "б",
            "text": "Через `class Train:` и метод `__init__(self, type, speed)`"
          },
          {
            "id": "section-1-q18-v",
            "label": "в",
            "text": "Через `import Train`"
          },
          {
            "id": "section-1-q18-g",
            "label": "г",
            "text": "Через `lambda Train`"
          }
        ],
        "correctOptionId": "section-1-q18-b",
        "explanation": "класс описывает тип объекта, а __init__ задает атрибуты экземпляра.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q19",
        "sectionId": "section-1",
        "order": 19,
        "text": "Как получить значение атрибута speed у объекта train?",
        "options": [
          {
            "id": "section-1-q19-a",
            "label": "а",
            "text": "`train.speed`"
          },
          {
            "id": "section-1-q19-b",
            "label": "б",
            "text": "`train[\"speed\"]` всегда"
          },
          {
            "id": "section-1-q19-v",
            "label": "в",
            "text": "`speed.train`"
          },
          {
            "id": "section-1-q19-g",
            "label": "г",
            "text": "`Train->speed`"
          }
        ],
        "correctOptionId": "section-1-q19-a",
        "explanation": "атрибуты экземпляра обычно доступны через точечную нотацию.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q20",
        "sectionId": "section-1",
        "order": 20,
        "text": "Какой list comprehension соответствует циклу, добавляющему в a2 удвоенные элементы списка a?",
        "options": [
          {
            "id": "section-1-q20-a",
            "label": "а",
            "text": "`[i * 2 for i in a]`"
          },
          {
            "id": "section-1-q20-b",
            "label": "б",
            "text": "`[a * 2 for i]`"
          },
          {
            "id": "section-1-q20-v",
            "label": "в",
            "text": "`{i * 2 in a}`"
          },
          {
            "id": "section-1-q20-g",
            "label": "г",
            "text": "`(i * 2 if a)`"
          }
        ],
        "correctOptionId": "section-1-q20-a",
        "explanation": "генератор списка записывает выражение результата перед for.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q21",
        "sectionId": "section-1",
        "order": 21,
        "text": "Что делает from math import sqrt?",
        "options": [
          {
            "id": "section-1-q21-a",
            "label": "а",
            "text": "Импортирует весь модуль `math` под именем `sqrt`"
          },
          {
            "id": "section-1-q21-b",
            "label": "б",
            "text": "Импортирует функцию `sqrt` из модуля `math`"
          },
          {
            "id": "section-1-q21-v",
            "label": "в",
            "text": "Создает виртуальное окружение"
          },
          {
            "id": "section-1-q21-g",
            "label": "г",
            "text": "Удаляет модуль `math`"
          }
        ],
        "correctOptionId": "section-1-q21-b",
        "explanation": "форма from module import name добавляет конкретное имя в текущую область видимости.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Modules"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q22",
        "sectionId": "section-1",
        "order": 22,
        "text": "Что делает import pandas as pd?",
        "options": [
          {
            "id": "section-1-q22-a",
            "label": "а",
            "text": "Импортирует pandas и задает ему псевдоним `pd`"
          },
          {
            "id": "section-1-q22-b",
            "label": "б",
            "text": "Переименовывает пакет на диске"
          },
          {
            "id": "section-1-q22-v",
            "label": "в",
            "text": "Удаляет старую версию pandas"
          },
          {
            "id": "section-1-q22-g",
            "label": "г",
            "text": "Создает DataFrame"
          }
        ],
        "correctOptionId": "section-1-q22-a",
        "explanation": "псевдоним сокращает обращение к модулю: pd.read_csv(...).",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q23",
        "sectionId": "section-1",
        "order": 23,
        "text": "Зачем нужно виртуальное окружение Python?",
        "options": [
          {
            "id": "section-1-q23-a",
            "label": "а",
            "text": "Чтобы изолировать зависимости проекта"
          },
          {
            "id": "section-1-q23-b",
            "label": "б",
            "text": "Чтобы ускорить процессор"
          },
          {
            "id": "section-1-q23-v",
            "label": "в",
            "text": "Чтобы заменить синтаксис Python"
          },
          {
            "id": "section-1-q23-g",
            "label": "г",
            "text": "Чтобы автоматически исправлять ошибки кода"
          }
        ],
        "correctOptionId": "section-1-q23-a",
        "explanation": "venv позволяет проекту иметь собственные версии библиотек, независимые от системных пакетов.",
        "sourceRefs": [
          "общая информация.md",
          "Python: venv"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-venv"
        ]
      },
      {
        "id": "section-1-q24",
        "sectionId": "section-1",
        "order": 24,
        "text": "Как создать виртуальное окружение стандартными средствами Python?",
        "options": [
          {
            "id": "section-1-q24-a",
            "label": "а",
            "text": "`python -m venv .venv`"
          },
          {
            "id": "section-1-q24-b",
            "label": "б",
            "text": "`python install venv`"
          },
          {
            "id": "section-1-q24-v",
            "label": "в",
            "text": "`pip run python`"
          },
          {
            "id": "section-1-q24-g",
            "label": "г",
            "text": "`venv --delete`"
          }
        ],
        "correctOptionId": "section-1-q24-a",
        "explanation": "модуль venv запускается через python -m и создает каталог окружения.",
        "sourceRefs": [
          "общая информация.md",
          "Python: venv"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-venv"
        ]
      },
      {
        "id": "section-1-q25",
        "sectionId": "section-1",
        "order": 25,
        "text": "Что означает аннотация def f(x: int) -> str:?",
        "options": [
          {
            "id": "section-1-q25-a",
            "label": "а",
            "text": "`x` ожидается как `int`, результат ожидается как `str`"
          },
          {
            "id": "section-1-q25-b",
            "label": "б",
            "text": "Python запретит передать не `int` на уровне интерпретатора"
          },
          {
            "id": "section-1-q25-v",
            "label": "в",
            "text": "Функция всегда вернет число"
          },
          {
            "id": "section-1-q25-g",
            "label": "г",
            "text": "Функция не может вызвать исключение"
          }
        ],
        "correctOptionId": "section-1-q25-a",
        "explanation": "type hints описывают ожидаемые типы для человека и инструментов, но обычно не проверяются интерпретатором автоматически.",
        "sourceRefs": [
          "общая информация.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q26",
        "sectionId": "section-1",
        "order": 26,
        "text": "Что означает Optional[int]?",
        "options": [
          {
            "id": "section-1-q26-a",
            "label": "а",
            "text": "Значение может быть `int` или `None`"
          },
          {
            "id": "section-1-q26-b",
            "label": "б",
            "text": "Аргумент обязательно должен иметь значение по умолчанию"
          },
          {
            "id": "section-1-q26-v",
            "label": "в",
            "text": "Значение может быть только `0`"
          },
          {
            "id": "section-1-q26-g",
            "label": "г",
            "text": "Значение может быть любым типом, кроме `int`"
          }
        ],
        "correctOptionId": "section-1-q26-a",
        "explanation": "Optional[X] эквивалентен X | None.",
        "sourceRefs": [
          "общая информация.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q27",
        "sectionId": "section-1",
        "order": 27,
        "text": "Как в современных версиях Python можно записать тип \"строка или None\" без Optional?",
        "options": [
          {
            "id": "section-1-q27-a",
            "label": "а",
            "text": "`str | None`"
          },
          {
            "id": "section-1-q27-b",
            "label": "б",
            "text": "`str & None`"
          },
          {
            "id": "section-1-q27-v",
            "label": "в",
            "text": "`str + None`"
          },
          {
            "id": "section-1-q27-g",
            "label": "г",
            "text": "`None[str]`"
          }
        ],
        "correctOptionId": "section-1-q27-a",
        "explanation": "оператор | в аннотациях используется для объединения типов.",
        "sourceRefs": [
          "общая информация.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q28",
        "sectionId": "section-1",
        "order": 28,
        "text": "Какой специальный метод отвечает за создание нового экземпляра до __init__?",
        "options": [
          {
            "id": "section-1-q28-a",
            "label": "а",
            "text": "`__new__`"
          },
          {
            "id": "section-1-q28-b",
            "label": "б",
            "text": "`__call__`"
          },
          {
            "id": "section-1-q28-v",
            "label": "в",
            "text": "`__str__`"
          },
          {
            "id": "section-1-q28-g",
            "label": "г",
            "text": "`__iter__`"
          }
        ],
        "correctOptionId": "section-1-q28-a",
        "explanation": "__new__ создает объект, а __init__ инициализирует уже созданный экземпляр.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Data model"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q29",
        "sectionId": "section-1",
        "order": 29,
        "text": "Какой специальный метод позволяет объекту вести себя как функция при вызове obj()?",
        "options": [
          {
            "id": "section-1-q29-a",
            "label": "а",
            "text": "`__call__`"
          },
          {
            "id": "section-1-q29-b",
            "label": "б",
            "text": "`__repr__`"
          },
          {
            "id": "section-1-q29-v",
            "label": "в",
            "text": "`__len__`"
          },
          {
            "id": "section-1-q29-g",
            "label": "г",
            "text": "`__contains__`"
          }
        ],
        "correctOptionId": "section-1-q29-a",
        "explanation": "если у объекта определен __call__, его можно вызвать с круглыми скобками.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Data model"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q30",
        "sectionId": "section-1",
        "order": 30,
        "text": "Какой метод используется функцией str(obj) для человекочитаемого строкового представления объекта?",
        "options": [
          {
            "id": "section-1-q30-a",
            "label": "а",
            "text": "`__str__`"
          },
          {
            "id": "section-1-q30-b",
            "label": "б",
            "text": "`__init__`"
          },
          {
            "id": "section-1-q30-v",
            "label": "в",
            "text": "`__next__`"
          },
          {
            "id": "section-1-q30-g",
            "label": "г",
            "text": "`__enter__`"
          }
        ],
        "correctOptionId": "section-1-q30-a",
        "explanation": "__str__ должен возвращать строку, удобную для отображения пользователю.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q31",
        "sectionId": "section-1",
        "order": 31,
        "text": "Как в Python объявить наследование класса Dog от класса Animal?",
        "options": [
          {
            "id": "section-1-q31-a",
            "label": "а",
            "text": "`class Dog(Animal):`"
          },
          {
            "id": "section-1-q31-b",
            "label": "б",
            "text": "`class Dog extends Animal:`"
          },
          {
            "id": "section-1-q31-v",
            "label": "в",
            "text": "`Dog inherits Animal`"
          },
          {
            "id": "section-1-q31-g",
            "label": "г",
            "text": "`class Dog -> Animal:`"
          }
        ],
        "correctOptionId": "section-1-q31-a",
        "explanation": "базовые классы перечисляются в скобках после имени класса.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q32",
        "sectionId": "section-1",
        "order": 32,
        "text": "Для чего обычно используют super()?",
        "options": [
          {
            "id": "section-1-q32-a",
            "label": "а",
            "text": "Для вызова метода родительского класса"
          },
          {
            "id": "section-1-q32-b",
            "label": "б",
            "text": "Для создания списка"
          },
          {
            "id": "section-1-q32-v",
            "label": "в",
            "text": "Для чтения CSV"
          },
          {
            "id": "section-1-q32-g",
            "label": "г",
            "text": "Для преобразования строки в число"
          }
        ],
        "correctOptionId": "section-1-q32-a",
        "explanation": "super() помогает расширить поведение базового класса, не вызывая его напрямую по имени.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q33",
        "sectionId": "section-1",
        "order": 33,
        "text": "Что произойдет, если подкласс определит метод с тем же именем, что и родительский класс?",
        "options": [
          {
            "id": "section-1-q33-a",
            "label": "а",
            "text": "Метод подкласса переопределит родительский для экземпляров подкласса"
          },
          {
            "id": "section-1-q33-b",
            "label": "б",
            "text": "Python запретит запуск программы"
          },
          {
            "id": "section-1-q33-v",
            "label": "в",
            "text": "Оба метода всегда выполнятся автоматически"
          },
          {
            "id": "section-1-q33-g",
            "label": "г",
            "text": "Родительский метод удалится из файла"
          }
        ],
        "correctOptionId": "section-1-q33-a",
        "explanation": "при поиске метода Python сначала смотрит в класс экземпляра, затем в базовые классы.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q34",
        "sectionId": "section-1",
        "order": 34,
        "text": "Какой тип данных подходит для хранения уникальных элементов без учета порядка?",
        "options": [
          {
            "id": "section-1-q34-a",
            "label": "а",
            "text": "`set`"
          },
          {
            "id": "section-1-q34-b",
            "label": "б",
            "text": "`list`"
          },
          {
            "id": "section-1-q34-v",
            "label": "в",
            "text": "`str`"
          },
          {
            "id": "section-1-q34-g",
            "label": "г",
            "text": "`bytes`"
          }
        ],
        "correctOptionId": "section-1-q34-a",
        "explanation": "множество хранит только уникальные хешируемые элементы.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q35",
        "sectionId": "section-1",
        "order": 35,
        "text": "Чем frozenset отличается от set?",
        "options": [
          {
            "id": "section-1-q35-a",
            "label": "а",
            "text": "`frozenset` неизменяемый и хешируемый, `set` изменяемый"
          },
          {
            "id": "section-1-q35-b",
            "label": "б",
            "text": "`frozenset` хранит только строки"
          },
          {
            "id": "section-1-q35-v",
            "label": "в",
            "text": "`set` неизменяемый, `frozenset` изменяемый"
          },
          {
            "id": "section-1-q35-g",
            "label": "г",
            "text": "Они полностью одинаковы"
          }
        ],
        "correctOptionId": "section-1-q35-a",
        "explanation": "frozenset можно использовать там, где нужен хешируемый объект, например как ключ словаря.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q36",
        "sectionId": "section-1",
        "order": 36,
        "text": "Какие объекты могут быть ключами словаря?",
        "options": [
          {
            "id": "section-1-q36-a",
            "label": "а",
            "text": "Хешируемые объекты"
          },
          {
            "id": "section-1-q36-b",
            "label": "б",
            "text": "Только списки"
          },
          {
            "id": "section-1-q36-v",
            "label": "в",
            "text": "Только словари"
          },
          {
            "id": "section-1-q36-g",
            "label": "г",
            "text": "Любые изменяемые объекты"
          }
        ],
        "correctOptionId": "section-1-q36-a",
        "explanation": "словарь использует хеш ключа; изменяемые списки и словари ключами быть не могут.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q37",
        "sectionId": "section-1",
        "order": 37,
        "text": "Что делает collections.Counter(\"banana\")?",
        "options": [
          {
            "id": "section-1-q37-a",
            "label": "а",
            "text": "Подсчитывает количество каждого символа"
          },
          {
            "id": "section-1-q37-b",
            "label": "б",
            "text": "Сортирует строку"
          },
          {
            "id": "section-1-q37-v",
            "label": "в",
            "text": "Удаляет повторяющиеся символы"
          },
          {
            "id": "section-1-q37-g",
            "label": "г",
            "text": "Преобразует строку в число"
          }
        ],
        "correctOptionId": "section-1-q37-a",
        "explanation": "Counter считает вхождения хешируемых элементов в итерируемом объекте.",
        "sourceRefs": [
          "общая информация.md",
          "Python: collections.Counter"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-collections-counter"
        ]
      },
      {
        "id": "section-1-q38",
        "sectionId": "section-1",
        "order": 38,
        "text": "Как получить два самых частых элемента из Counter?",
        "options": [
          {
            "id": "section-1-q38-a",
            "label": "а",
            "text": "`counter.most_common(2)`"
          },
          {
            "id": "section-1-q38-b",
            "label": "б",
            "text": "`counter.top(2)`"
          },
          {
            "id": "section-1-q38-v",
            "label": "в",
            "text": "`counter.max(2)`"
          },
          {
            "id": "section-1-q38-g",
            "label": "г",
            "text": "`counter[2]`"
          }
        ],
        "correctOptionId": "section-1-q38-a",
        "explanation": "метод most_common(n) возвращает n наиболее часто встречающихся элементов и их счетчики.",
        "sourceRefs": [
          "общая информация.md",
          "Python: collections.Counter"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-collections-counter"
        ]
      },
      {
        "id": "section-1-q39",
        "sectionId": "section-1",
        "order": 39,
        "text": "Какой результат у выражения \"Python\"[0]?",
        "options": [
          {
            "id": "section-1-q39-a",
            "label": "а",
            "text": "`\"P\"`"
          },
          {
            "id": "section-1-q39-b",
            "label": "б",
            "text": "`\"y\"`"
          },
          {
            "id": "section-1-q39-v",
            "label": "в",
            "text": "`\"Python\"`"
          },
          {
            "id": "section-1-q39-g",
            "label": "г",
            "text": "Ошибка, строки нельзя индексировать"
          }
        ],
        "correctOptionId": "section-1-q39-a",
        "explanation": "строки являются последовательностями, индексация начинается с нуля.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q40",
        "sectionId": "section-1",
        "order": 40,
        "text": "Что делает выражение \"a,b,c\".split(\",\")?",
        "options": [
          {
            "id": "section-1-q40-a",
            "label": "а",
            "text": "Возвращает `[\"a\", \"b\", \"c\"]`"
          },
          {
            "id": "section-1-q40-b",
            "label": "б",
            "text": "Возвращает `\"abc\"`"
          },
          {
            "id": "section-1-q40-v",
            "label": "в",
            "text": "Возвращает `(\"a,b,c\")`"
          },
          {
            "id": "section-1-q40-g",
            "label": "г",
            "text": "Удаляет файл"
          }
        ],
        "correctOptionId": "section-1-q40-a",
        "explanation": "split() разбивает строку по указанному разделителю.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q41",
        "sectionId": "section-1",
        "order": 41,
        "text": "Как объединить список строк [\"a\", \"b\", \"c\"] через запятую?",
        "options": [
          {
            "id": "section-1-q41-a",
            "label": "а",
            "text": "`\",\".join([\"a\", \"b\", \"c\"])`"
          },
          {
            "id": "section-1-q41-b",
            "label": "б",
            "text": "`[\"a\", \"b\", \"c\"].split(\",\")`"
          },
          {
            "id": "section-1-q41-v",
            "label": "в",
            "text": "`join(\",\", [\"a\", \"b\", \"c\"])`"
          },
          {
            "id": "section-1-q41-g",
            "label": "г",
            "text": "`\",\".sum([\"a\", \"b\", \"c\"])`"
          }
        ],
        "correctOptionId": "section-1-q41-a",
        "explanation": "метод join() вызывается у строки-разделителя.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q42",
        "sectionId": "section-1",
        "order": 42,
        "text": "Какой режим open() открывает файл только для чтения?",
        "options": [
          {
            "id": "section-1-q42-a",
            "label": "а",
            "text": "`\"r\"`"
          },
          {
            "id": "section-1-q42-b",
            "label": "б",
            "text": "`\"w\"`"
          },
          {
            "id": "section-1-q42-v",
            "label": "в",
            "text": "`\"a\"`"
          },
          {
            "id": "section-1-q42-g",
            "label": "г",
            "text": "`\"x\"`"
          }
        ],
        "correctOptionId": "section-1-q42-a",
        "explanation": "режим \"r\" предназначен для чтения и используется по умолчанию, если режим не указан.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q43",
        "sectionId": "section-1",
        "order": 43,
        "text": "Какой режим open() перезаписывает файл при записи?",
        "options": [
          {
            "id": "section-1-q43-a",
            "label": "а",
            "text": "`\"w\"`"
          },
          {
            "id": "section-1-q43-b",
            "label": "б",
            "text": "`\"a\"`"
          },
          {
            "id": "section-1-q43-v",
            "label": "в",
            "text": "`\"r\"`"
          },
          {
            "id": "section-1-q43-g",
            "label": "г",
            "text": "`\"rb\"`"
          }
        ],
        "correctOptionId": "section-1-q43-a",
        "explanation": "режим записи \"w\" создает файл или очищает существующий файл перед записью.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q44",
        "sectionId": "section-1",
        "order": 44,
        "text": "Какой режим open() добавляет данные в конец файла?",
        "options": [
          {
            "id": "section-1-q44-a",
            "label": "а",
            "text": "`\"a\"`"
          },
          {
            "id": "section-1-q44-b",
            "label": "б",
            "text": "`\"w\"`"
          },
          {
            "id": "section-1-q44-v",
            "label": "в",
            "text": "`\"r\"`"
          },
          {
            "id": "section-1-q44-g",
            "label": "г",
            "text": "`\"rt\"`"
          }
        ],
        "correctOptionId": "section-1-q44-a",
        "explanation": "append-режим не очищает файл, а дописывает новые данные в конец.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q45",
        "sectionId": "section-1",
        "order": 45,
        "text": "Зачем использовать with open(...) as f:?",
        "options": [
          {
            "id": "section-1-q45-a",
            "label": "а",
            "text": "Чтобы файл автоматически закрывался после блока"
          },
          {
            "id": "section-1-q45-b",
            "label": "б",
            "text": "Чтобы файл нельзя было прочитать"
          },
          {
            "id": "section-1-q45-v",
            "label": "в",
            "text": "Чтобы отключить исключения"
          },
          {
            "id": "section-1-q45-g",
            "label": "г",
            "text": "Чтобы преобразовать файл в список"
          }
        ],
        "correctOptionId": "section-1-q45-a",
        "explanation": "контекстный менеджер гарантирует корректное освобождение ресурса.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q46",
        "sectionId": "section-1",
        "order": 46,
        "text": "Почему при работе с русским текстом часто явно указывают encoding=\"utf-8\"?",
        "options": [
          {
            "id": "section-1-q46-a",
            "label": "а",
            "text": "Чтобы избежать зависимости от системной кодировки"
          },
          {
            "id": "section-1-q46-b",
            "label": "б",
            "text": "Чтобы файл стал бинарным"
          },
          {
            "id": "section-1-q46-v",
            "label": "в",
            "text": "Чтобы удалить пробелы"
          },
          {
            "id": "section-1-q46-g",
            "label": "г",
            "text": "Чтобы ускорить процессор"
          }
        ],
        "correctOptionId": "section-1-q46-a",
        "explanation": "явная кодировка делает чтение и запись текста предсказуемыми на разных системах.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q47",
        "sectionId": "section-1",
        "order": 47,
        "text": "Какой блок выполняется независимо от того, возникло исключение или нет?",
        "options": [
          {
            "id": "section-1-q47-a",
            "label": "а",
            "text": "`finally`"
          },
          {
            "id": "section-1-q47-b",
            "label": "б",
            "text": "`except`"
          },
          {
            "id": "section-1-q47-v",
            "label": "в",
            "text": "`elif`"
          },
          {
            "id": "section-1-q47-g",
            "label": "г",
            "text": "`case`"
          }
        ],
        "correctOptionId": "section-1-q47-a",
        "explanation": "блок finally используют для действий очистки, например закрытия ресурса.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-errors-and-exceptions"
        ]
      },
      {
        "id": "section-1-q48",
        "sectionId": "section-1",
        "order": 48,
        "text": "Как поймать деление на ноль?",
        "options": [
          {
            "id": "section-1-q48-a",
            "label": "а",
            "text": "`except ZeroDivisionError:`"
          },
          {
            "id": "section-1-q48-b",
            "label": "б",
            "text": "`catch ZeroDivision:`"
          },
          {
            "id": "section-1-q48-v",
            "label": "в",
            "text": "`except DivideByZero:`"
          },
          {
            "id": "section-1-q48-g",
            "label": "г",
            "text": "`on zero:`"
          }
        ],
        "correctOptionId": "section-1-q48-a",
        "explanation": "Python использует конструкцию try/except, а деление на ноль вызывает ZeroDivisionError.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-errors-and-exceptions"
        ]
      },
      {
        "id": "section-1-q49",
        "sectionId": "section-1",
        "order": 49,
        "text": "Как вручную сгенерировать исключение?",
        "options": [
          {
            "id": "section-1-q49-a",
            "label": "а",
            "text": "`raise ValueError(\"bad value\")`"
          },
          {
            "id": "section-1-q49-b",
            "label": "б",
            "text": "`throw ValueError(\"bad value\")`"
          },
          {
            "id": "section-1-q49-v",
            "label": "в",
            "text": "`error ValueError(\"bad value\")`"
          },
          {
            "id": "section-1-q49-g",
            "label": "г",
            "text": "`except ValueError(\"bad value\")`"
          }
        ],
        "correctOptionId": "section-1-q49-a",
        "explanation": "оператор raise создает или повторно возбуждает исключение.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-errors-and-exceptions"
        ]
      },
      {
        "id": "section-1-q50",
        "sectionId": "section-1",
        "order": 50,
        "text": "Что делает try/except?",
        "options": [
          {
            "id": "section-1-q50-a",
            "label": "а",
            "text": "Позволяет обработать исключения во время выполнения"
          },
          {
            "id": "section-1-q50-b",
            "label": "б",
            "text": "Компилирует модуль"
          },
          {
            "id": "section-1-q50-v",
            "label": "в",
            "text": "Создает класс"
          },
          {
            "id": "section-1-q50-g",
            "label": "г",
            "text": "Ускоряет цикл"
          }
        ],
        "correctOptionId": "section-1-q50-a",
        "explanation": "код в try выполняется, а подходящий except перехватывает возникшее исключение.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-errors-and-exceptions"
        ]
      },
      {
        "id": "section-1-q51",
        "sectionId": "section-1",
        "order": 51,
        "text": "Что такое итератор в Python?",
        "options": [
          {
            "id": "section-1-q51-a",
            "label": "а",
            "text": "Объект, который возвращает элементы по одному через `__next__()`"
          },
          {
            "id": "section-1-q51-b",
            "label": "б",
            "text": "Любой неизменяемый объект"
          },
          {
            "id": "section-1-q51-v",
            "label": "в",
            "text": "Только список"
          },
          {
            "id": "section-1-q51-g",
            "label": "г",
            "text": "Только функция с `return`"
          }
        ],
        "correctOptionId": "section-1-q51-a",
        "explanation": "итератор поддерживает протокол итерации: __iter__() и __next__().",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q52",
        "sectionId": "section-1",
        "order": 52,
        "text": "Чем итерируемый объект отличается от итератора?",
        "options": [
          {
            "id": "section-1-q52-a",
            "label": "а",
            "text": "Итерируемый объект можно передать в `iter()`, а итератор еще и выдает значения через `next()`"
          },
          {
            "id": "section-1-q52-b",
            "label": "б",
            "text": "Они всегда полностью одинаковы"
          },
          {
            "id": "section-1-q52-v",
            "label": "в",
            "text": "Итерируемым может быть только число"
          },
          {
            "id": "section-1-q52-g",
            "label": "г",
            "text": "Итератор нельзя использовать в цикле `for`"
          }
        ],
        "correctOptionId": "section-1-q52-a",
        "explanation": "список итерируемый, но сам не является своим одноразовым итератором; iter(list) возвращает итератор.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q53",
        "sectionId": "section-1",
        "order": 53,
        "text": "Что делает ключевое слово yield?",
        "options": [
          {
            "id": "section-1-q53-a",
            "label": "а",
            "text": "Превращает функцию в генератор"
          },
          {
            "id": "section-1-q53-b",
            "label": "б",
            "text": "Завершает программу"
          },
          {
            "id": "section-1-q53-v",
            "label": "в",
            "text": "Создает класс"
          },
          {
            "id": "section-1-q53-g",
            "label": "г",
            "text": "Импортирует модуль"
          }
        ],
        "correctOptionId": "section-1-q53-a",
        "explanation": "генератор выдает значения постепенно и сохраняет состояние между вызовами.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q54",
        "sectionId": "section-1",
        "order": 54,
        "text": "Какое преимущество генератора перед списком при обработке большого потока данных?",
        "options": [
          {
            "id": "section-1-q54-a",
            "label": "а",
            "text": "Ленивая выдача значений и меньшие затраты памяти"
          },
          {
            "id": "section-1-q54-b",
            "label": "б",
            "text": "Автоматическое удаление ошибок"
          },
          {
            "id": "section-1-q54-v",
            "label": "в",
            "text": "Запрет на циклы"
          },
          {
            "id": "section-1-q54-g",
            "label": "г",
            "text": "Хранение всех значений в памяти заранее"
          }
        ],
        "correctOptionId": "section-1-q54-a",
        "explanation": "генератор не обязан создавать всю коллекцию сразу.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q55",
        "sectionId": "section-1",
        "order": 55,
        "text": "Что выведет код list(range(2, 7, 2))?",
        "options": [
          {
            "id": "section-1-q55-a",
            "label": "а",
            "text": "`[2, 4, 6]`"
          },
          {
            "id": "section-1-q55-b",
            "label": "б",
            "text": "`[2, 3, 4, 5, 6, 7]`"
          },
          {
            "id": "section-1-q55-v",
            "label": "в",
            "text": "`[7, 5, 3]`"
          },
          {
            "id": "section-1-q55-g",
            "label": "г",
            "text": "`[2, 4, 6, 8]`"
          }
        ],
        "correctOptionId": "section-1-q55-a",
        "explanation": "range(start, stop, step) не включает границу stop.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q56",
        "sectionId": "section-1",
        "order": 56,
        "text": "Что возвращает enumerate([\"a\", \"b\"]) при обходе в цикле?",
        "options": [
          {
            "id": "section-1-q56-a",
            "label": "а",
            "text": "Пары индекс-значение"
          },
          {
            "id": "section-1-q56-b",
            "label": "б",
            "text": "Только индексы"
          },
          {
            "id": "section-1-q56-v",
            "label": "в",
            "text": "Только значения"
          },
          {
            "id": "section-1-q56-g",
            "label": "г",
            "text": "Словарь частот"
          }
        ],
        "correctOptionId": "section-1-q56-a",
        "explanation": "enumerate() удобен, когда нужны и позиция, и элемент.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q57",
        "sectionId": "section-1",
        "order": 57,
        "text": "Что делает zip([1, 2], [\"a\", \"b\"])?",
        "options": [
          {
            "id": "section-1-q57-a",
            "label": "а",
            "text": "Создает пары `(1, \"a\")`, `(2, \"b\")`"
          },
          {
            "id": "section-1-q57-b",
            "label": "б",
            "text": "Складывает числа и строки"
          },
          {
            "id": "section-1-q57-v",
            "label": "в",
            "text": "Сортирует оба списка"
          },
          {
            "id": "section-1-q57-g",
            "label": "г",
            "text": "Преобразует списки в JSON"
          }
        ],
        "correctOptionId": "section-1-q57-a",
        "explanation": "zip() объединяет элементы нескольких итерируемых объектов по позициям.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q58",
        "sectionId": "section-1",
        "order": 58,
        "text": "В чем разница между == и is?",
        "options": [
          {
            "id": "section-1-q58-a",
            "label": "а",
            "text": "`==` сравнивает значения, `is` сравнивает идентичность объектов"
          },
          {
            "id": "section-1-q58-b",
            "label": "б",
            "text": "`is` сравнивает значения, `==` сравнивает типы"
          },
          {
            "id": "section-1-q58-v",
            "label": "в",
            "text": "Разницы нет"
          },
          {
            "id": "section-1-q58-g",
            "label": "г",
            "text": "`==` работает только со строками"
          }
        ],
        "correctOptionId": "section-1-q58-a",
        "explanation": "is проверяет, указывают ли две переменные на один и тот же объект.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q59",
        "sectionId": "section-1",
        "order": 59,
        "text": "Как корректно проверить, что переменная x равна None?",
        "options": [
          {
            "id": "section-1-q59-a",
            "label": "а",
            "text": "`x is None`"
          },
          {
            "id": "section-1-q59-b",
            "label": "б",
            "text": "`x = None`"
          },
          {
            "id": "section-1-q59-v",
            "label": "в",
            "text": "`x == False`"
          },
          {
            "id": "section-1-q59-g",
            "label": "г",
            "text": "`None in x`"
          }
        ],
        "correctOptionId": "section-1-q59-a",
        "explanation": "None является singleton-объектом, поэтому его принято сравнивать через is.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q60",
        "sectionId": "section-1",
        "order": 60,
        "text": "Какой объект считается ложным в логическом контексте?",
        "options": [
          {
            "id": "section-1-q60-a",
            "label": "а",
            "text": "Пустой список `[]`"
          },
          {
            "id": "section-1-q60-b",
            "label": "б",
            "text": "Непустая строка `\"0\"`"
          },
          {
            "id": "section-1-q60-v",
            "label": "в",
            "text": "Непустой список `[False]`"
          },
          {
            "id": "section-1-q60-g",
            "label": "г",
            "text": "Любой объект класса"
          }
        ],
        "correctOptionId": "section-1-q60-a",
        "explanation": "пустые коллекции, 0, None и False дают ложное значение.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q61",
        "sectionId": "section-1",
        "order": 61,
        "text": "Почему опасно использовать изменяемый объект как значение параметра по умолчанию?",
        "options": [
          {
            "id": "section-1-q61-a",
            "label": "а",
            "text": "Он создается один раз и может сохранять изменения между вызовами"
          },
          {
            "id": "section-1-q61-b",
            "label": "б",
            "text": "Python сразу удалит функцию"
          },
          {
            "id": "section-1-q61-v",
            "label": "в",
            "text": "Это всегда синтаксическая ошибка"
          },
          {
            "id": "section-1-q61-g",
            "label": "г",
            "text": "Такой параметр нельзя передать явно"
          }
        ],
        "correctOptionId": "section-1-q61-a",
        "explanation": "значения параметров по умолчанию вычисляются при определении функции, а не при каждом вызове.",
        "sourceRefs": [
          "Python: Tutorial"
        ],
        "materialIds": []
      },
      {
        "id": "section-1-q62",
        "sectionId": "section-1",
        "order": 62,
        "text": "Что означает *args в параметрах функции?",
        "options": [
          {
            "id": "section-1-q62-a",
            "label": "а",
            "text": "Собирает дополнительные позиционные аргументы в кортеж"
          },
          {
            "id": "section-1-q62-b",
            "label": "б",
            "text": "Собирает именованные аргументы в список"
          },
          {
            "id": "section-1-q62-v",
            "label": "в",
            "text": "Умножает все аргументы"
          },
          {
            "id": "section-1-q62-g",
            "label": "г",
            "text": "Запрещает передачу аргументов"
          }
        ],
        "correctOptionId": "section-1-q62-a",
        "explanation": "*args используют для переменного числа позиционных аргументов.",
        "sourceRefs": [
          "Python: Tutorial"
        ],
        "materialIds": []
      },
      {
        "id": "section-1-q63",
        "sectionId": "section-1",
        "order": 63,
        "text": "Что означает kwargs в параметрах функции?",
        "options": [
          {
            "id": "section-1-q63-a",
            "label": "а",
            "text": "Собирает дополнительные именованные аргументы в словарь"
          },
          {
            "id": "section-1-q63-b",
            "label": "б",
            "text": "Возводит аргументы в степень"
          },
          {
            "id": "section-1-q63-v",
            "label": "в",
            "text": "Создает множество"
          },
          {
            "id": "section-1-q63-g",
            "label": "г",
            "text": "Запускает декоратор"
          }
        ],
        "correctOptionId": "section-1-q63-a",
        "explanation": "ключи словаря соответствуют именам переданных параметров.",
        "sourceRefs": [
          "Python: Tutorial"
        ],
        "materialIds": []
      },
      {
        "id": "section-1-q64",
        "sectionId": "section-1",
        "order": 64,
        "text": "Что делает распаковка a, b = [1, 2]?",
        "options": [
          {
            "id": "section-1-q64-a",
            "label": "а",
            "text": "Присваивает `a = 1`, `b = 2`"
          },
          {
            "id": "section-1-q64-b",
            "label": "б",
            "text": "Создает словарь"
          },
          {
            "id": "section-1-q64-v",
            "label": "в",
            "text": "Меняет тип списка на строку"
          },
          {
            "id": "section-1-q64-g",
            "label": "г",
            "text": "Работает только с кортежами"
          }
        ],
        "correctOptionId": "section-1-q64-a",
        "explanation": "Python умеет распаковывать последовательности по позициям.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q65",
        "sectionId": "section-1",
        "order": 65,
        "text": "Что вернет {\"a\": 1}.get(\"b\", 0)?",
        "options": [
          {
            "id": "section-1-q65-a",
            "label": "а",
            "text": "`0`"
          },
          {
            "id": "section-1-q65-b",
            "label": "б",
            "text": "`None` всегда"
          },
          {
            "id": "section-1-q65-v",
            "label": "в",
            "text": "`KeyError`"
          },
          {
            "id": "section-1-q65-g",
            "label": "г",
            "text": "`\"b\"`"
          }
        ],
        "correctOptionId": "section-1-q65-a",
        "explanation": "dict.get(key, default) возвращает значение по ключу или значение по умолчанию.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q66",
        "sectionId": "section-1",
        "order": 66,
        "text": "Какой dict comprehension создает словарь квадратов для чисел 1, 2, 3?",
        "options": [
          {
            "id": "section-1-q66-a",
            "label": "а",
            "text": "`{x: x * x for x in [1, 2, 3]}`"
          },
          {
            "id": "section-1-q66-b",
            "label": "б",
            "text": "`[x: x * x for x in [1, 2, 3]]`"
          },
          {
            "id": "section-1-q66-v",
            "label": "в",
            "text": "`{x * x in [1, 2, 3]}`"
          },
          {
            "id": "section-1-q66-g",
            "label": "г",
            "text": "`dict(x * x for [1, 2, 3])`"
          }
        ],
        "correctOptionId": "section-1-q66-a",
        "explanation": "словарное включение задает пару ключ: значение.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q67",
        "sectionId": "section-1",
        "order": 67,
        "text": "Что делает json.loads()?",
        "options": [
          {
            "id": "section-1-q67-a",
            "label": "а",
            "text": "Преобразует JSON-строку в объект Python"
          },
          {
            "id": "section-1-q67-b",
            "label": "б",
            "text": "Записывает объект Python в файл"
          },
          {
            "id": "section-1-q67-v",
            "label": "в",
            "text": "Сортирует словарь"
          },
          {
            "id": "section-1-q67-g",
            "label": "г",
            "text": "Читает CSV-файл"
          }
        ],
        "correctOptionId": "section-1-q67-a",
        "explanation": "loads означает load string: десериализация из строки.",
        "sourceRefs": [
          "общая информация.md",
          "Python: json"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-json"
        ]
      },
      {
        "id": "section-1-q68",
        "sectionId": "section-1",
        "order": 68,
        "text": "Что делает json.dumps()?",
        "options": [
          {
            "id": "section-1-q68-a",
            "label": "а",
            "text": "Преобразует объект Python в JSON-строку"
          },
          {
            "id": "section-1-q68-b",
            "label": "б",
            "text": "Загружает CSV"
          },
          {
            "id": "section-1-q68-v",
            "label": "в",
            "text": "Удаляет ключи словаря"
          },
          {
            "id": "section-1-q68-g",
            "label": "г",
            "text": "Создает виртуальное окружение"
          }
        ],
        "correctOptionId": "section-1-q68-a",
        "explanation": "dumps означает dump string: сериализация в строку.",
        "sourceRefs": [
          "общая информация.md",
          "Python: json"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-json"
        ]
      },
      {
        "id": "section-1-q69",
        "sectionId": "section-1",
        "order": 69,
        "text": "Какой тип Python обычно соответствует JSON-объекту {...}?",
        "options": [
          {
            "id": "section-1-q69-a",
            "label": "а",
            "text": "`dict`"
          },
          {
            "id": "section-1-q69-b",
            "label": "б",
            "text": "`list`"
          },
          {
            "id": "section-1-q69-v",
            "label": "в",
            "text": "`tuple`"
          },
          {
            "id": "section-1-q69-g",
            "label": "г",
            "text": "`set`"
          }
        ],
        "correctOptionId": "section-1-q69-a",
        "explanation": "JSON-объект хранит пары ключ-значение, как словарь Python.",
        "sourceRefs": [
          "общая информация.md",
          "Python: json"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-json"
        ]
      },
      {
        "id": "section-1-q70",
        "sectionId": "section-1",
        "order": 70,
        "text": "Какой вызов обычно используется для чтения CSV-файла в pandas?",
        "options": [
          {
            "id": "section-1-q70-a",
            "label": "а",
            "text": "`pd.read_csv(\"file.csv\")`"
          },
          {
            "id": "section-1-q70-b",
            "label": "б",
            "text": "`pd.open_csv(\"file.csv\")`"
          },
          {
            "id": "section-1-q70-v",
            "label": "в",
            "text": "`pd.read_json(\"file.csv\")`"
          },
          {
            "id": "section-1-q70-g",
            "label": "г",
            "text": "`pd.csv(\"file.csv\")`"
          }
        ],
        "correctOptionId": "section-1-q70-a",
        "explanation": "read_csv читает CSV в DataFrame.",
        "sourceRefs": [
          "общая информация.md",
          "pandas.read_csv"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-pandas-read-csv"
        ]
      },
      {
        "id": "section-1-q71",
        "sectionId": "section-1",
        "order": 71,
        "text": "Что такое DataFrame в pandas?",
        "options": [
          {
            "id": "section-1-q71-a",
            "label": "а",
            "text": "Двумерная табличная структура с индексами и столбцами"
          },
          {
            "id": "section-1-q71-b",
            "label": "б",
            "text": "Только список строк"
          },
          {
            "id": "section-1-q71-v",
            "label": "в",
            "text": "Тип исключения"
          },
          {
            "id": "section-1-q71-g",
            "label": "г",
            "text": "Декоратор функции"
          }
        ],
        "correctOptionId": "section-1-q71-a",
        "explanation": "DataFrame используется для табличных данных и анализа.",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q72",
        "sectionId": "section-1",
        "order": 72,
        "text": "Как выбрать строки DataFrame df, где столбец age больше 18?",
        "options": [
          {
            "id": "section-1-q72-a",
            "label": "а",
            "text": "`df[df[\"age\"] > 18]`"
          },
          {
            "id": "section-1-q72-b",
            "label": "б",
            "text": "`df(\"age\" > 18)`"
          },
          {
            "id": "section-1-q72-v",
            "label": "в",
            "text": "`df.age = 18`"
          },
          {
            "id": "section-1-q72-g",
            "label": "г",
            "text": "`df.filter(age > 18)` без кавычек"
          }
        ],
        "correctOptionId": "section-1-q72-a",
        "explanation": "булева маска выбирает строки, для которых условие истинно.",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q73",
        "sectionId": "section-1",
        "order": 73,
        "text": "Для чего используют pd.to_datetime()?",
        "options": [
          {
            "id": "section-1-q73-a",
            "label": "а",
            "text": "Для преобразования значений в тип даты/времени"
          },
          {
            "id": "section-1-q73-b",
            "label": "б",
            "text": "Для удаления строк"
          },
          {
            "id": "section-1-q73-v",
            "label": "в",
            "text": "Для подсчета символов"
          },
          {
            "id": "section-1-q73-g",
            "label": "г",
            "text": "Для создания класса"
          }
        ],
        "correctOptionId": "section-1-q73-a",
        "explanation": "после преобразования можно корректно фильтровать и сравнивать даты.",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q74",
        "sectionId": "section-1",
        "order": 74,
        "text": "Что делает параметр chunksize в pd.read_csv()?",
        "options": [
          {
            "id": "section-1-q74-a",
            "label": "а",
            "text": "Позволяет читать CSV частями"
          },
          {
            "id": "section-1-q74-b",
            "label": "б",
            "text": "Задает цвет таблицы"
          },
          {
            "id": "section-1-q74-v",
            "label": "в",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-1-q74-g",
            "label": "г",
            "text": "Автоматически строит график"
          }
        ],
        "correctOptionId": "section-1-q74-a",
        "explanation": "чтение чанками полезно для больших файлов, которые не помещаются в память целиком.",
        "sourceRefs": [
          "общая информация.md",
          "pandas.read_csv"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-pandas-read-csv"
        ]
      },
      {
        "id": "section-1-q75",
        "sectionId": "section-1",
        "order": 75,
        "text": "Что делает df.head()?",
        "options": [
          {
            "id": "section-1-q75-a",
            "label": "а",
            "text": "Показывает первые строки DataFrame"
          },
          {
            "id": "section-1-q75-b",
            "label": "б",
            "text": "Удаляет заголовок CSV"
          },
          {
            "id": "section-1-q75-v",
            "label": "в",
            "text": "Возвращает только последний столбец"
          },
          {
            "id": "section-1-q75-g",
            "label": "г",
            "text": "Сортирует таблицу по всем столбцам"
          }
        ],
        "correctOptionId": "section-1-q75-a",
        "explanation": "head() используют для быстрого просмотра начала таблицы.",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q76",
        "sectionId": "section-1",
        "order": 76,
        "text": "Какой код выполняется только при прямом запуске файла, а не при импорте?",
        "options": [
          {
            "id": "section-1-q76-a",
            "label": "а",
            "text": "Код внутри `if __name__ == \"__main__\":`"
          },
          {
            "id": "section-1-q76-b",
            "label": "б",
            "text": "Любой код после `import`"
          },
          {
            "id": "section-1-q76-v",
            "label": "в",
            "text": "Код внутри `class` всегда"
          },
          {
            "id": "section-1-q76-g",
            "label": "г",
            "text": "Код внутри комментариев"
          }
        ],
        "correctOptionId": "section-1-q76-a",
        "explanation": "при прямом запуске модуль получает имя \"__main__\", при импорте - свое имя модуля.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Modules"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q77",
        "sectionId": "section-1",
        "order": 77,
        "text": "Для чего часто нужен файл __init__.py в каталоге пакета?",
        "options": [
          {
            "id": "section-1-q77-a",
            "label": "а",
            "text": "Чтобы каталог рассматривался как пакет и мог выполнять код инициализации"
          },
          {
            "id": "section-1-q77-b",
            "label": "б",
            "text": "Чтобы автоматически запускать все тесты"
          },
          {
            "id": "section-1-q77-v",
            "label": "в",
            "text": "Чтобы хранить только изображения"
          },
          {
            "id": "section-1-q77-g",
            "label": "г",
            "text": "Чтобы запретить импорт"
          }
        ],
        "correctOptionId": "section-1-q77-a",
        "explanation": "__init__.py используется в пакетах Python и может задавать экспортируемые имена.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Modules"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q78",
        "sectionId": "section-1",
        "order": 78,
        "text": "Что делает from package import module?",
        "options": [
          {
            "id": "section-1-q78-a",
            "label": "а",
            "text": "Импортирует `module` из пакета `package`"
          },
          {
            "id": "section-1-q78-b",
            "label": "б",
            "text": "Удаляет `package`"
          },
          {
            "id": "section-1-q78-v",
            "label": "в",
            "text": "Создает `module.py`"
          },
          {
            "id": "section-1-q78-g",
            "label": "г",
            "text": "Запускает `pip install`"
          }
        ],
        "correctOptionId": "section-1-q78-a",
        "explanation": "такая форма импорта обращается к имени внутри пакета.",
        "sourceRefs": [
          "общая информация.md",
          "Python: Modules"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q79",
        "sectionId": "section-1",
        "order": 79,
        "text": "Что обычно записывают в requirements.txt?",
        "options": [
          {
            "id": "section-1-q79-a",
            "label": "а",
            "text": "Зависимости проекта и их версии"
          },
          {
            "id": "section-1-q79-b",
            "label": "б",
            "text": "Только исходный код функций"
          },
          {
            "id": "section-1-q79-v",
            "label": "в",
            "text": "Только пароли пользователей"
          },
          {
            "id": "section-1-q79-g",
            "label": "г",
            "text": "Логи выполнения программы"
          }
        ],
        "correctOptionId": "section-1-q79-a",
        "explanation": "файл помогает восстановить окружение через pip install -r requirements.txt.",
        "sourceRefs": [
          "общая информация.md",
          "Python Packaging User Guide"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-1-q80",
        "sectionId": "section-1",
        "order": 80,
        "text": "Проверяет ли Python type hints автоматически при каждом вызове функции?",
        "options": [
          {
            "id": "section-1-q80-a",
            "label": "а",
            "text": "Обычно нет"
          },
          {
            "id": "section-1-q80-b",
            "label": "б",
            "text": "Да, всегда"
          },
          {
            "id": "section-1-q80-v",
            "label": "в",
            "text": "Только для строк"
          },
          {
            "id": "section-1-q80-g",
            "label": "г",
            "text": "Только внутри классов"
          }
        ],
        "correctOptionId": "section-1-q80-a",
        "explanation": "аннотации используются статическими анализаторами, IDE и линтерами; интерпретатор сам по себе типы обычно не запрещает.",
        "sourceRefs": [
          "общая информация.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q81",
        "sectionId": "section-1",
        "order": 81,
        "text": "Как сохранить порядок элементов первого списка при поиске пересечения с другим списком?",
        "options": [
          {
            "id": "section-1-q81-a",
            "label": "а",
            "text": "`[x for x in first if x in second_set]`, где `second_set = set(second)`"
          },
          {
            "id": "section-1-q81-b",
            "label": "б",
            "text": "`set(first) & set(second)` всегда сохраняет порядок"
          },
          {
            "id": "section-1-q81-v",
            "label": "в",
            "text": "`first + second`"
          },
          {
            "id": "section-1-q81-g",
            "label": "г",
            "text": "`first.sort(second)`"
          }
        ],
        "correctOptionId": "section-1-q81-a",
        "explanation": "list comprehension обходит первый список по порядку, а множество ускоряет проверку принадлежности.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q82",
        "sectionId": "section-1",
        "order": 82,
        "text": "Что делает list.append(x)?",
        "options": [
          {
            "id": "section-1-q82-a",
            "label": "а",
            "text": "Добавляет `x` как один элемент в конец списка"
          },
          {
            "id": "section-1-q82-b",
            "label": "б",
            "text": "Добавляет элементы `x` по одному всегда"
          },
          {
            "id": "section-1-q82-v",
            "label": "в",
            "text": "Удаляет `x`"
          },
          {
            "id": "section-1-q82-g",
            "label": "г",
            "text": "Возвращает новый список"
          }
        ],
        "correctOptionId": "section-1-q82-a",
        "explanation": "append() изменяет список на месте и не создает новый список.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q83",
        "sectionId": "section-1",
        "order": 83,
        "text": "Чем list.extend(iterable) отличается от append()?",
        "options": [
          {
            "id": "section-1-q83-a",
            "label": "а",
            "text": "`extend()` добавляет элементы итерируемого объекта по одному"
          },
          {
            "id": "section-1-q83-b",
            "label": "б",
            "text": "`extend()` всегда удаляет элементы"
          },
          {
            "id": "section-1-q83-v",
            "label": "в",
            "text": "`extend()` работает только со строками"
          },
          {
            "id": "section-1-q83-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-1-q83-a",
        "explanation": "append([1, 2]) добавит вложенный список, а extend([1, 2]) добавит два элемента.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q84",
        "sectionId": "section-1",
        "order": 84,
        "text": "Чем remove() отличается от pop() у списка?",
        "options": [
          {
            "id": "section-1-q84-a",
            "label": "а",
            "text": "`remove()` удаляет по значению, `pop()` удаляет по индексу и возвращает элемент"
          },
          {
            "id": "section-1-q84-b",
            "label": "б",
            "text": "`remove()` удаляет по индексу, `pop()` по значению"
          },
          {
            "id": "section-1-q84-v",
            "label": "в",
            "text": "Они всегда полностью одинаковы"
          },
          {
            "id": "section-1-q84-g",
            "label": "г",
            "text": "`pop()` очищает весь список"
          }
        ],
        "correctOptionId": "section-1-q84-a",
        "explanation": "это частая ошибка в задачах на списки.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q85",
        "sectionId": "section-1",
        "order": 85,
        "text": "Что делает sorted([3, 1, 2])?",
        "options": [
          {
            "id": "section-1-q85-a",
            "label": "а",
            "text": "Возвращает новый отсортированный список"
          },
          {
            "id": "section-1-q85-b",
            "label": "б",
            "text": "Меняет исходный список и возвращает `None`"
          },
          {
            "id": "section-1-q85-v",
            "label": "в",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-1-q85-g",
            "label": "г",
            "text": "Сортирует только строки"
          }
        ],
        "correctOptionId": "section-1-q85-a",
        "explanation": "sorted() не сортирует исходную коллекцию на месте, а создает отсортированный результат.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q86",
        "sectionId": "section-1",
        "order": 86,
        "text": "Что делает метод list.sort()?",
        "options": [
          {
            "id": "section-1-q86-a",
            "label": "а",
            "text": "Сортирует список на месте и возвращает `None`"
          },
          {
            "id": "section-1-q86-b",
            "label": "б",
            "text": "Возвращает новый список"
          },
          {
            "id": "section-1-q86-v",
            "label": "в",
            "text": "Преобразует список в кортеж"
          },
          {
            "id": "section-1-q86-g",
            "label": "г",
            "text": "Работает только с числами"
          }
        ],
        "correctOptionId": "section-1-q86-a",
        "explanation": "многие изменяющие методы коллекций не возвращают саму коллекцию.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q87",
        "sectionId": "section-1",
        "order": 87,
        "text": "Для чего используется параметр key в сортировке?",
        "options": [
          {
            "id": "section-1-q87-a",
            "label": "а",
            "text": "Чтобы задать функцию, вычисляющую ключ сортировки"
          },
          {
            "id": "section-1-q87-b",
            "label": "б",
            "text": "Чтобы открыть файл"
          },
          {
            "id": "section-1-q87-v",
            "label": "в",
            "text": "Чтобы создать словарь"
          },
          {
            "id": "section-1-q87-g",
            "label": "г",
            "text": "Чтобы отключить сравнение"
          }
        ],
        "correctOptionId": "section-1-q87-a",
        "explanation": "например, sorted(words, key=len) сортирует строки по длине.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q88",
        "sectionId": "section-1",
        "order": 88,
        "text": "Как получить срез списка a с первого по третий элемент включительно по индексам 0, 1, 2?",
        "options": [
          {
            "id": "section-1-q88-a",
            "label": "а",
            "text": "`a[0:3]`"
          },
          {
            "id": "section-1-q88-b",
            "label": "б",
            "text": "`a[0:2]`"
          },
          {
            "id": "section-1-q88-v",
            "label": "в",
            "text": "`a[1:3]`"
          },
          {
            "id": "section-1-q88-g",
            "label": "г",
            "text": "`a(0, 3)`"
          }
        ],
        "correctOptionId": "section-1-q88-a",
        "explanation": "правая граница среза не включается, поэтому нужны индексы от 0 до 3 не включая 3.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q89",
        "sectionId": "section-1",
        "order": 89,
        "text": "Что делает a[-1] для непустого списка?",
        "options": [
          {
            "id": "section-1-q89-a",
            "label": "а",
            "text": "Возвращает последний элемент"
          },
          {
            "id": "section-1-q89-b",
            "label": "б",
            "text": "Возвращает первый элемент"
          },
          {
            "id": "section-1-q89-v",
            "label": "в",
            "text": "Удаляет последний элемент"
          },
          {
            "id": "section-1-q89-g",
            "label": "г",
            "text": "Всегда вызывает ошибку"
          }
        ],
        "correctOptionId": "section-1-q89-a",
        "explanation": "отрицательные индексы отсчитываются с конца последовательности.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q90",
        "sectionId": "section-1",
        "order": 90,
        "text": "Что такое поверхностная копия списка?",
        "options": [
          {
            "id": "section-1-q90-a",
            "label": "а",
            "text": "Новый список с теми же ссылками на вложенные объекты"
          },
          {
            "id": "section-1-q90-b",
            "label": "б",
            "text": "Полное рекурсивное копирование всех вложенных объектов"
          },
          {
            "id": "section-1-q90-v",
            "label": "в",
            "text": "Ссылка на тот же самый список"
          },
          {
            "id": "section-1-q90-g",
            "label": "г",
            "text": "JSON-строка"
          }
        ],
        "correctOptionId": "section-1-q90-a",
        "explanation": "list.copy() или a[:] копируют только верхний уровень.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q91",
        "sectionId": "section-1",
        "order": 91,
        "text": "Какой тип подходит для бинарных данных?",
        "options": [
          {
            "id": "section-1-q91-a",
            "label": "а",
            "text": "`bytes`"
          },
          {
            "id": "section-1-q91-b",
            "label": "б",
            "text": "`str`"
          },
          {
            "id": "section-1-q91-v",
            "label": "в",
            "text": "`dict`"
          },
          {
            "id": "section-1-q91-g",
            "label": "г",
            "text": "`float`"
          }
        ],
        "correctOptionId": "section-1-q91-a",
        "explanation": "str хранит текст Unicode, а bytes хранит последовательность байтов.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q92",
        "sectionId": "section-1",
        "order": 92,
        "text": "Как открыть файл в бинарном режиме чтения?",
        "options": [
          {
            "id": "section-1-q92-a",
            "label": "а",
            "text": "`open(path, \"rb\")`"
          },
          {
            "id": "section-1-q92-b",
            "label": "б",
            "text": "`open(path, \"r\")`"
          },
          {
            "id": "section-1-q92-v",
            "label": "в",
            "text": "`open(path, \"text\")`"
          },
          {
            "id": "section-1-q92-g",
            "label": "г",
            "text": "`open(path, \"json\")`"
          }
        ],
        "correctOptionId": "section-1-q92-a",
        "explanation": "символ b в режиме означает binary mode.",
        "sourceRefs": [
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q93",
        "sectionId": "section-1",
        "order": 93,
        "text": "Что делает @property?",
        "options": [
          {
            "id": "section-1-q93-a",
            "label": "а",
            "text": "Позволяет обращаться к методу как к атрибуту"
          },
          {
            "id": "section-1-q93-b",
            "label": "б",
            "text": "Создает статический метод"
          },
          {
            "id": "section-1-q93-v",
            "label": "в",
            "text": "Запускает цикл"
          },
          {
            "id": "section-1-q93-g",
            "label": "г",
            "text": "Импортирует модуль"
          }
        ],
        "correctOptionId": "section-1-q93-a",
        "explanation": "property часто используют для вычисляемых атрибутов и контролируемого доступа.",
        "sourceRefs": [
          "Python: Classes"
        ],
        "materialIds": [
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q94",
        "sectionId": "section-1",
        "order": 94,
        "text": "Когда уместен @classmethod?",
        "options": [
          {
            "id": "section-1-q94-a",
            "label": "а",
            "text": "Когда метод должен работать с классом и может служить альтернативным конструктором"
          },
          {
            "id": "section-1-q94-b",
            "label": "б",
            "text": "Когда метод должен обязательно менять конкретный экземпляр"
          },
          {
            "id": "section-1-q94-v",
            "label": "в",
            "text": "Когда нужно прочитать файл"
          },
          {
            "id": "section-1-q94-g",
            "label": "г",
            "text": "Когда нужно остановить программу"
          }
        ],
        "correctOptionId": "section-1-q94-a",
        "explanation": "cls позволяет создавать экземпляры текущего класса, включая подклассы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q95",
        "sectionId": "section-1",
        "order": 95,
        "text": "Когда уместен @staticmethod?",
        "options": [
          {
            "id": "section-1-q95-a",
            "label": "а",
            "text": "Когда функция логически относится к классу, но не использует `self` или `cls`"
          },
          {
            "id": "section-1-q95-b",
            "label": "б",
            "text": "Когда обязательно нужен доступ к атрибутам экземпляра"
          },
          {
            "id": "section-1-q95-v",
            "label": "в",
            "text": "Когда нужно переопределить оператор `+`"
          },
          {
            "id": "section-1-q95-g",
            "label": "г",
            "text": "Когда метод должен быть асинхронным"
          }
        ],
        "correctOptionId": "section-1-q95-a",
        "explanation": "статический метод помогает группировать связанную с классом утилитарную логику.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q96",
        "sectionId": "section-1",
        "order": 96,
        "text": "Что выведет код bool([]), bool([0])?",
        "options": [
          {
            "id": "section-1-q96-a",
            "label": "а",
            "text": "`False, True`"
          },
          {
            "id": "section-1-q96-b",
            "label": "б",
            "text": "`True, False`"
          },
          {
            "id": "section-1-q96-v",
            "label": "в",
            "text": "`False, False`"
          },
          {
            "id": "section-1-q96-g",
            "label": "г",
            "text": "`True, True`"
          }
        ],
        "correctOptionId": "section-1-q96-a",
        "explanation": "пустой список ложный, а непустой список истинный независимо от значения элемента.",
        "sourceRefs": [
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q97",
        "sectionId": "section-1",
        "order": 97,
        "text": "Какой результат у sum([1, 2, 3])?",
        "options": [
          {
            "id": "section-1-q97-a",
            "label": "а",
            "text": "`6`"
          },
          {
            "id": "section-1-q97-b",
            "label": "б",
            "text": "`[1, 2, 3]`"
          },
          {
            "id": "section-1-q97-v",
            "label": "в",
            "text": "`\"123\"`"
          },
          {
            "id": "section-1-q97-g",
            "label": "г",
            "text": "`None`"
          }
        ],
        "correctOptionId": "section-1-q97-a",
        "explanation": "sum() складывает числовые элементы итерируемого объекта.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q98",
        "sectionId": "section-1",
        "order": 98,
        "text": "Какой вариант корректно отбирает двузначные числа из списка numbers?",
        "options": [
          {
            "id": "section-1-q98-a",
            "label": "а",
            "text": "`[x for x in numbers if 10 <= abs(x) <= 99]`"
          },
          {
            "id": "section-1-q98-b",
            "label": "б",
            "text": "`[x for x in numbers if x < 10]`"
          },
          {
            "id": "section-1-q98-v",
            "label": "в",
            "text": "`[x for x in numbers if abs(x) > 99]`"
          },
          {
            "id": "section-1-q98-g",
            "label": "г",
            "text": "`[x for x in numbers if x == 2]`"
          }
        ],
        "correctOptionId": "section-1-q98-a",
        "explanation": "отрицательные двузначные числа тоже учитываются, поэтому удобно проверять abs(x).",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q99",
        "sectionId": "section-1",
        "order": 99,
        "text": "Какой вариант корректно проверяет, что число делится на 77 без остатка?",
        "options": [
          {
            "id": "section-1-q99-a",
            "label": "а",
            "text": "`x % 77 == 0`"
          },
          {
            "id": "section-1-q99-b",
            "label": "б",
            "text": "`x / 77 == 0`"
          },
          {
            "id": "section-1-q99-v",
            "label": "в",
            "text": "`x // 77 == 0`"
          },
          {
            "id": "section-1-q99-g",
            "label": "г",
            "text": "`x ** 77 == 0`"
          }
        ],
        "correctOptionId": "section-1-q99-a",
        "explanation": "оператор % возвращает остаток от деления; остаток 0 означает делимость.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q100",
        "sectionId": "section-1",
        "order": 100,
        "text": "Какой подход наиболее корректен для функции с аннотацией, которая может вернуть строку или ничего не найти?",
        "options": [
          {
            "id": "section-1-q100-a",
            "label": "а",
            "text": "`def find_name(id: int) -> str | None:`"
          },
          {
            "id": "section-1-q100-b",
            "label": "б",
            "text": "`def find_name(id: int) -> str and None:`"
          },
          {
            "id": "section-1-q100-v",
            "label": "в",
            "text": "`def find_name(id: int) -> None[str]:`"
          },
          {
            "id": "section-1-q100-g",
            "label": "г",
            "text": "`def find_name(id: int) -> optional str:`"
          }
        ],
        "correctOptionId": "section-1-q100-a",
        "explanation": "такой тип явно показывает, что результатом может быть строка или None; это современная форма Optional[str].",
        "sourceRefs": [
          "общая информация.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q101",
        "sectionId": "section-1",
        "order": 101,
        "text": "Как указать родительский класс при наследовании?",
        "options": [
          {
            "id": "section-1-q101-a",
            "label": "а",
            "text": "`class Child inherits Parent`"
          },
          {
            "id": "section-1-q101-b",
            "label": "б",
            "text": "`class Child extends Parent`"
          },
          {
            "id": "section-1-q101-v",
            "label": "в",
            "text": "`class Child: Parent`"
          },
          {
            "id": "section-1-q101-g",
            "label": "г",
            "text": "`class Child(Parent)`"
          }
        ],
        "correctOptionId": "section-1-q101-g",
        "explanation": "в Python базовый класс указывается в круглых скобках после имени дочернего класса.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q102",
        "sectionId": "section-1",
        "order": 102,
        "text": "Какой синтаксис используется для генератора списка?",
        "options": [
          {
            "id": "section-1-q102-a",
            "label": "а",
            "text": "`(x for x in range(10))`"
          },
          {
            "id": "section-1-q102-b",
            "label": "б",
            "text": "`{x for x in range(10)}`"
          },
          {
            "id": "section-1-q102-v",
            "label": "в",
            "text": "`[x for x in range(10)]`"
          },
          {
            "id": "section-1-q102-g",
            "label": "г",
            "text": "Ничего из перечисленного"
          }
        ],
        "correctOptionId": "section-1-q102-v",
        "explanation": "квадратные скобки создают list comprehension; круглые скобки создают generator expression, фигурные - set comprehension.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q103",
        "sectionId": "section-1",
        "order": 103,
        "text": "Как импортировать конкретную функцию из модуля?",
        "options": [
          {
            "id": "section-1-q103-a",
            "label": "а",
            "text": "`import function from module`"
          },
          {
            "id": "section-1-q103-b",
            "label": "б",
            "text": "`import module.function`"
          },
          {
            "id": "section-1-q103-v",
            "label": "в",
            "text": "`from module import function`"
          },
          {
            "id": "section-1-q103-g",
            "label": "г",
            "text": "`include function from module`"
          }
        ],
        "correctOptionId": "section-1-q103-v",
        "explanation": "синтаксис from ... import ... импортирует конкретное имя из модуля в текущую область видимости.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Modules"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-1-q104",
        "sectionId": "section-1",
        "order": 104,
        "text": "Как создать виртуальное окружение в Python?",
        "options": [
          {
            "id": "section-1-q104-a",
            "label": "а",
            "text": "`python -m venv env`"
          },
          {
            "id": "section-1-q104-b",
            "label": "б",
            "text": "`python -m virtual env`"
          },
          {
            "id": "section-1-q104-v",
            "label": "в",
            "text": "`python create venv env`"
          },
          {
            "id": "section-1-q104-g",
            "label": "г",
            "text": "`python virtual env`"
          }
        ],
        "correctOptionId": "section-1-q104-a",
        "explanation": "стандартный модуль venv запускается через python -m и создает окружение в указанной папке.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: venv"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-venv"
        ]
      },
      {
        "id": "section-1-q105",
        "sectionId": "section-1",
        "order": 105,
        "text": "Как в библиотеке pandas прочитать CSV-файл и вывести первые 5 строк?",
        "options": [
          {
            "id": "section-1-q105-a",
            "label": "а",
            "text": "`df = read_csv('file.csv'); df.head(5)`"
          },
          {
            "id": "section-1-q105-b",
            "label": "б",
            "text": "`import pandas as pd; df = pd.read_csv('file.csv'); print(df.head(5))`"
          },
          {
            "id": "section-1-q105-v",
            "label": "в",
            "text": "`pandas.load('file.csv').first(5)`"
          },
          {
            "id": "section-1-q105-g",
            "label": "г",
            "text": "`csv.read('file.csv').show(5)`"
          }
        ],
        "correctOptionId": "section-1-q105-b",
        "explanation": "pd.read_csv() читает CSV в DataFrame, а head(5) возвращает первые пять строк.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "pandas.read_csv"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-pandas-read-csv"
        ]
      },
      {
        "id": "section-1-q106",
        "sectionId": "section-1",
        "order": 106,
        "text": "Как указать тип возвращаемого значения?",
        "options": [
          {
            "id": "section-1-q106-a",
            "label": "а",
            "text": "`def func() -> int`"
          },
          {
            "id": "section-1-q106-b",
            "label": "б",
            "text": "`def func() returns int`"
          },
          {
            "id": "section-1-q106-v",
            "label": "в",
            "text": "`def func() -> returns int`"
          },
          {
            "id": "section-1-q106-g",
            "label": "г",
            "text": "`def func(): int`"
          }
        ],
        "correctOptionId": "section-1-q106-a",
        "explanation": "аннотация возвращаемого значения записывается после списка параметров через ->.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q107",
        "sectionId": "section-1",
        "order": 107,
        "text": "Ниже дан фрагмент кода на Python. Что будет выведено на экран?",
        "options": [
          {
            "id": "section-1-q107-a",
            "label": "а",
            "text": "`2, 5`"
          },
          {
            "id": "section-1-q107-b",
            "label": "б",
            "text": "`0, 6`"
          },
          {
            "id": "section-1-q107-v",
            "label": "в",
            "text": "`0, 5`"
          },
          {
            "id": "section-1-q107-g",
            "label": "г",
            "text": "`3, 4`"
          }
        ],
        "correctOptionId": "section-1-q107-v",
        "explanation": "последний проход цикла выполняется при a == 5: 5 // 6 == 0, 5 % 6 == 5, затем a становится -1 и цикл завершается.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q108",
        "sectionId": "section-1",
        "order": 108,
        "text": "Какой метод вызывается автоматически при создании объекта класса?",
        "options": [
          {
            "id": "section-1-q108-a",
            "label": "а",
            "text": "`__init__`"
          },
          {
            "id": "section-1-q108-b",
            "label": "б",
            "text": "`__call__`"
          },
          {
            "id": "section-1-q108-v",
            "label": "в",
            "text": "`__new__`"
          },
          {
            "id": "section-1-q108-g",
            "label": "г",
            "text": "`__str__`"
          }
        ],
        "correctOptionId": "section-1-q108-a",
        "explanation": "после создания экземпляра Python вызывает __init__, чтобы инициализировать состояние объекта.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Classes"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-classes"
        ]
      },
      {
        "id": "section-1-q109",
        "sectionId": "section-1",
        "order": 109,
        "text": "Какая функция используется для получения длины строки или списка в Python?",
        "options": [
          {
            "id": "section-1-q109-a",
            "label": "а",
            "text": "`length()`"
          },
          {
            "id": "section-1-q109-b",
            "label": "б",
            "text": "`count()`"
          },
          {
            "id": "section-1-q109-v",
            "label": "в",
            "text": "`len()`"
          },
          {
            "id": "section-1-q109-g",
            "label": "г",
            "text": "`size()`"
          }
        ],
        "correctOptionId": "section-1-q109-v",
        "explanation": "встроенная функция len() возвращает длину последовательности или коллекции.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q110",
        "sectionId": "section-1",
        "order": 110,
        "text": "Что выведет следующий код с type hints?",
        "options": [
          {
            "id": "section-1-q110-a",
            "label": "а",
            "text": "`0`"
          },
          {
            "id": "section-1-q110-b",
            "label": "б",
            "text": "`None`"
          },
          {
            "id": "section-1-q110-v",
            "label": "в",
            "text": "Ошибка `TypeError`"
          },
          {
            "id": "section-1-q110-g",
            "label": "г",
            "text": "`\"\"`"
          }
        ],
        "correctOptionId": "section-1-q110-b",
        "explanation": "аргумент по умолчанию равен None, функция возвращает строку \"None\", а print() выводит ее без кавычек. Аннотации типов сами по себе не меняют поведение кода.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: typing"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-typing"
        ]
      },
      {
        "id": "section-1-q111",
        "sectionId": "section-1",
        "order": 111,
        "text": "Что выведет следующий код с использованием collections.Counter?",
        "options": [
          {
            "id": "section-1-q111-a",
            "label": "а",
            "text": "`[(‘b’, 2), (‘r’, 2)]`"
          },
          {
            "id": "section-1-q111-b",
            "label": "б",
            "text": "`[(‘a’, 5), (‘r’, 2)]`"
          },
          {
            "id": "section-1-q111-v",
            "label": "в",
            "text": "`[(‘a’, 5), (‘b’, 2)]`"
          },
          {
            "id": "section-1-q111-g",
            "label": "г",
            "text": "`{‘a’: 5, ‘b’: 2}`"
          }
        ],
        "correctOptionId": "section-1-q111-v",
        "explanation": "в строке 'abracadabra' символ a встречается 5 раз, b и r по 2 раза; при равной частоте most_common() сохраняет порядок первого появления, поэтому b идет раньше r.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: collections.Counter"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-collections-counter"
        ]
      },
      {
        "id": "section-1-q112",
        "sectionId": "section-1",
        "order": 112,
        "text": "В Python существует два типа множеств: set и frozenset. Какое утверждение является верным?",
        "options": [
          {
            "id": "section-1-q112-a",
            "label": "а",
            "text": "Объект `frozenset` может использоваться в качестве ключа словаря, так как является хешируемым"
          },
          {
            "id": "section-1-q112-b",
            "label": "б",
            "text": "`frozenset` поддерживает добавление элементов с помощью метода `add()`"
          },
          {
            "id": "section-1-q112-v",
            "label": "в",
            "text": "`set` не поддерживает математические операции над множествами"
          },
          {
            "id": "section-1-q112-g",
            "label": "г",
            "text": "`frozenset` нельзя создать из обычного множества"
          }
        ],
        "correctOptionId": "section-1-q112-a",
        "explanation": "frozenset неизменяемый и хешируемый, а обычный set изменяемый и не может быть ключом словаря.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Built-in Types"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-built-in-types"
        ]
      },
      {
        "id": "section-1-q113",
        "sectionId": "section-1",
        "order": 113,
        "text": "Какой режим открытия файла позволяет дописывать данные в конец файла, не удаляя существующее содержимое?",
        "options": [
          {
            "id": "section-1-q113-a",
            "label": "а",
            "text": "`w`"
          },
          {
            "id": "section-1-q113-b",
            "label": "б",
            "text": "`a`"
          },
          {
            "id": "section-1-q113-v",
            "label": "в",
            "text": "`r`"
          },
          {
            "id": "section-1-q113-g",
            "label": "г",
            "text": "`x`"
          }
        ],
        "correctOptionId": "section-1-q113-b",
        "explanation": "режим append (a) открывает файл для дозаписи в конец, не очищая уже существующее содержимое.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Input and Output"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-input-and-output"
        ]
      },
      {
        "id": "section-1-q114",
        "sectionId": "section-1",
        "order": 114,
        "text": "Какой блок гарантированно выполняется при обработке исключений, даже если исключение не было поймано?",
        "options": [
          {
            "id": "section-1-q114-a",
            "label": "а",
            "text": "`else`"
          },
          {
            "id": "section-1-q114-b",
            "label": "б",
            "text": "`pass`"
          },
          {
            "id": "section-1-q114-v",
            "label": "в",
            "text": "`finally`"
          },
          {
            "id": "section-1-q114-g",
            "label": "г",
            "text": "`except`"
          }
        ],
        "correctOptionId": "section-1-q114-v",
        "explanation": "блок finally выполняется при выходе из конструкции try, включая случаи с исключением.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Python: Errors and Exceptions"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-1-python-errors-and-exceptions"
        ]
      }
    ]
  },
  {
    "id": "section-2",
    "title": "Тема 2. Машинное обучение и анализ данных: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_2_машинное_обучение_и_анализ_данных_100_тестовых_вопросов.md.",
    "order": 2,
    "questions": [
      {
        "id": "section-2-q1",
        "sectionId": "section-2",
        "order": 1,
        "text": "Какие задачи решают деревья решений?",
        "options": [
          {
            "id": "section-2-q1-a",
            "label": "а",
            "text": "Только классификацию"
          },
          {
            "id": "section-2-q1-b",
            "label": "б",
            "text": "Только регрессию"
          },
          {
            "id": "section-2-q1-v",
            "label": "в",
            "text": "Классификацию и регрессию"
          },
          {
            "id": "section-2-q1-g",
            "label": "г",
            "text": "Только анализ временных рядов"
          }
        ],
        "correctOptionId": "section-2-q1-v",
        "explanation": "деревья решений могут предсказывать как категориальные классы, так и числовые значения.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Decision Trees"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q2",
        "sectionId": "section-2",
        "order": 2,
        "text": "Что такое дерево решений в машинном обучении?",
        "options": [
          {
            "id": "section-2-q2-a",
            "label": "а",
            "text": "Модель в виде дерева, где внутренние узлы задают проверки признаков, а листья содержат прогноз"
          },
          {
            "id": "section-2-q2-b",
            "label": "б",
            "text": "Только способ визуализировать файловую систему"
          },
          {
            "id": "section-2-q2-v",
            "label": "в",
            "text": "Алгоритм, который работает только с текстами"
          },
          {
            "id": "section-2-q2-g",
            "label": "г",
            "text": "Метод шифрования данных"
          }
        ],
        "correctOptionId": "section-2-q2-a",
        "explanation": "дерево последовательно разбивает данные по условиям на признаках и приходит к листу с ответом.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Decision Trees"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q3",
        "sectionId": "section-2",
        "order": 3,
        "text": "Какой тип визуализации используют для демонстрации корреляции между двумя числовыми переменными?",
        "options": [
          {
            "id": "section-2-q3-a",
            "label": "а",
            "text": "Диаграмма рассеяния"
          },
          {
            "id": "section-2-q3-b",
            "label": "б",
            "text": "Круговая диаграмма"
          },
          {
            "id": "section-2-q3-v",
            "label": "в",
            "text": "Таблица истинности"
          },
          {
            "id": "section-2-q3-g",
            "label": "г",
            "text": "UML-диаграмма"
          }
        ],
        "correctOptionId": "section-2-q3-a",
        "explanation": "scatter plot показывает пары значений и позволяет увидеть направление и форму связи.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Matplotlib documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-matplotlib-documentation"
        ]
      },
      {
        "id": "section-2-q4",
        "sectionId": "section-2",
        "order": 4,
        "text": "Какой тип визуализации лучше подходит для отображения распределения числовых данных?",
        "options": [
          {
            "id": "section-2-q4-a",
            "label": "а",
            "text": "Гистограмма"
          },
          {
            "id": "section-2-q4-b",
            "label": "б",
            "text": "Диаграмма классов"
          },
          {
            "id": "section-2-q4-v",
            "label": "в",
            "text": "Сетевой граф протоколов"
          },
          {
            "id": "section-2-q4-g",
            "label": "г",
            "text": "Круговая диаграмма для каждого наблюдения"
          }
        ],
        "correctOptionId": "section-2-q4-a",
        "explanation": "гистограмма группирует числовые значения по интервалам и показывает частоты.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Matplotlib documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-matplotlib-documentation"
        ]
      },
      {
        "id": "section-2-q5",
        "sectionId": "section-2",
        "order": 5,
        "text": "Какой метод анализа данных применяется для разбиения объектов на группы по сходству без заранее известных меток?",
        "options": [
          {
            "id": "section-2-q5-a",
            "label": "а",
            "text": "Регрессионный анализ"
          },
          {
            "id": "section-2-q5-b",
            "label": "б",
            "text": "Кластеризация"
          },
          {
            "id": "section-2-q5-v",
            "label": "в",
            "text": "Дисперсионный анализ"
          },
          {
            "id": "section-2-q5-g",
            "label": "г",
            "text": "Ручная разметка"
          }
        ],
        "correctOptionId": "section-2-q5-b",
        "explanation": "кластеризация относится к обучению без учителя и ищет группы похожих объектов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Clustering"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-clustering"
        ]
      },
      {
        "id": "section-2-q6",
        "sectionId": "section-2",
        "order": 6,
        "text": "Какой метод анализа данных используют для оценки взаимосвязи между двумя переменными?",
        "options": [
          {
            "id": "section-2-q6-a",
            "label": "а",
            "text": "Корреляционный анализ"
          },
          {
            "id": "section-2-q6-b",
            "label": "б",
            "text": "Удаление дубликатов"
          },
          {
            "id": "section-2-q6-v",
            "label": "в",
            "text": "Сжатие файлов"
          },
          {
            "id": "section-2-q6-g",
            "label": "г",
            "text": "Токенизация"
          }
        ],
        "correctOptionId": "section-2-q6-a",
        "explanation": "корреляция показывает силу и направление статистической связи между переменными.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q7",
        "sectionId": "section-2",
        "order": 7,
        "text": "Какой вид машинного обучения основывается на взаимодействии агента со средой?",
        "options": [
          {
            "id": "section-2-q7-a",
            "label": "а",
            "text": "Обучение с учителем"
          },
          {
            "id": "section-2-q7-b",
            "label": "б",
            "text": "Обучение без учителя"
          },
          {
            "id": "section-2-q7-v",
            "label": "в",
            "text": "Обучение с подкреплением"
          },
          {
            "id": "section-2-q7-g",
            "label": "г",
            "text": "Линейная алгебра"
          }
        ],
        "correctOptionId": "section-2-q7-v",
        "explanation": "агент выполняет действия в среде и получает награды или штрафы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Google ML Crash Course"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q8",
        "sectionId": "section-2",
        "order": 8,
        "text": "Какая задача ML предсказывает непрерывную числовую величину?",
        "options": [
          {
            "id": "section-2-q8-a",
            "label": "а",
            "text": "Классификация"
          },
          {
            "id": "section-2-q8-b",
            "label": "б",
            "text": "Регрессия"
          },
          {
            "id": "section-2-q8-v",
            "label": "в",
            "text": "Кластеризация"
          },
          {
            "id": "section-2-q8-g",
            "label": "г",
            "text": "Токенизация"
          }
        ],
        "correctOptionId": "section-2-q8-b",
        "explanation": "регрессия используется для прогнозирования чисел: цены, температуры, спроса, времени.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Supervised learning"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-supervised-learning"
        ]
      },
      {
        "id": "section-2-q9",
        "sectionId": "section-2",
        "order": 9,
        "text": "Какая задача ML предсказывает категорию или класс объекта?",
        "options": [
          {
            "id": "section-2-q9-a",
            "label": "а",
            "text": "Классификация"
          },
          {
            "id": "section-2-q9-b",
            "label": "б",
            "text": "Регрессия"
          },
          {
            "id": "section-2-q9-v",
            "label": "в",
            "text": "Нормализация"
          },
          {
            "id": "section-2-q9-g",
            "label": "г",
            "text": "Визуализация"
          }
        ],
        "correctOptionId": "section-2-q9-a",
        "explanation": "классификатор относит объект к одному или нескольким дискретным классам.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Supervised learning"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-supervised-learning"
        ]
      },
      {
        "id": "section-2-q10",
        "sectionId": "section-2",
        "order": 10,
        "text": "На чем основана модель случайного леса?",
        "options": [
          {
            "id": "section-2-q10-a",
            "label": "а",
            "text": "На ансамбле деревьев решений"
          },
          {
            "id": "section-2-q10-b",
            "label": "б",
            "text": "На одной линейной функции"
          },
          {
            "id": "section-2-q10-v",
            "label": "в",
            "text": "На одной гистограмме"
          },
          {
            "id": "section-2-q10-g",
            "label": "г",
            "text": "На матрице смежности графа"
          }
        ],
        "correctOptionId": "section-2-q10-a",
        "explanation": "random forest строит много деревьев и объединяет их прогнозы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Ensemble methods"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q11",
        "sectionId": "section-2",
        "order": 11,
        "text": "Что является типичным результатом прогноза логистической регрессии в бинарной классификации?",
        "options": [
          {
            "id": "section-2-q11-a",
            "label": "а",
            "text": "Вероятность принадлежности к классу"
          },
          {
            "id": "section-2-q11-b",
            "label": "б",
            "text": "Только номер строки в таблице"
          },
          {
            "id": "section-2-q11-v",
            "label": "в",
            "text": "Количество деревьев"
          },
          {
            "id": "section-2-q11-g",
            "label": "г",
            "text": "Список всех признаков"
          }
        ],
        "correctOptionId": "section-2-q11-a",
        "explanation": "логистическая регрессия оценивает вероятность события, после чего применяют порог классификации.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Linear Models"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q12",
        "sectionId": "section-2",
        "order": 12,
        "text": "Что из перечисленного относится к технологиям искусственного интеллекта?",
        "options": [
          {
            "id": "section-2-q12-a",
            "label": "а",
            "text": "Обработка естественного языка"
          },
          {
            "id": "section-2-q12-b",
            "label": "б",
            "text": "Только 3D-печать"
          },
          {
            "id": "section-2-q12-v",
            "label": "в",
            "text": "Только СУБД"
          },
          {
            "id": "section-2-q12-g",
            "label": "г",
            "text": "Только CFD-расчеты"
          }
        ],
        "correctOptionId": "section-2-q12-a",
        "explanation": "NLP решает задачи анализа и генерации текста с помощью методов ИИ и ML.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q13",
        "sectionId": "section-2",
        "order": 13,
        "text": "Что из перечисленного является open-source компонентом для анализа и визуализации данных?",
        "options": [
          {
            "id": "section-2-q13-a",
            "label": "а",
            "text": "Matplotlib"
          },
          {
            "id": "section-2-q13-b",
            "label": "б",
            "text": "Power BI"
          },
          {
            "id": "section-2-q13-v",
            "label": "в",
            "text": "SAS"
          },
          {
            "id": "section-2-q13-g",
            "label": "г",
            "text": "Закрытая CRM-система"
          }
        ],
        "correctOptionId": "section-2-q13-a",
        "explanation": "Matplotlib - открытая библиотека Python для построения графиков.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Matplotlib documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-matplotlib-documentation"
        ]
      },
      {
        "id": "section-2-q14",
        "sectionId": "section-2",
        "order": 14,
        "text": "Как расшифровывается ELT?",
        "options": [
          {
            "id": "section-2-q14-a",
            "label": "а",
            "text": "Extract-Load-Transform"
          },
          {
            "id": "section-2-q14-b",
            "label": "б",
            "text": "Excel-Load-Trim"
          },
          {
            "id": "section-2-q14-v",
            "label": "в",
            "text": "Extract-List-Transform"
          },
          {
            "id": "section-2-q14-g",
            "label": "г",
            "text": "Encode-Learn-Test"
          }
        ],
        "correctOptionId": "section-2-q14-a",
        "explanation": "в ELT данные сначала извлекают и загружают, а затем трансформируют в целевой системе.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "общая информация.md"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q15",
        "sectionId": "section-2",
        "order": 15,
        "text": "Какой признак из перечисленных НЕ является интервальным или числовым?",
        "options": [
          {
            "id": "section-2-q15-a",
            "label": "а",
            "text": "Рост"
          },
          {
            "id": "section-2-q15-b",
            "label": "б",
            "text": "Давление"
          },
          {
            "id": "section-2-q15-v",
            "label": "в",
            "text": "Марка автомобиля"
          },
          {
            "id": "section-2-q15-g",
            "label": "г",
            "text": "Вес"
          }
        ],
        "correctOptionId": "section-2-q15-v",
        "explanation": "марка автомобиля - категориальный признак, а рост, давление и вес числовые.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q16",
        "sectionId": "section-2",
        "order": 16,
        "text": "Что из перечисленного НЕ относится к процедурам улучшения качества данных?",
        "options": [
          {
            "id": "section-2-q16-a",
            "label": "а",
            "text": "\"Золотая запись\""
          },
          {
            "id": "section-2-q16-b",
            "label": "б",
            "text": "Идентификационный анализ"
          },
          {
            "id": "section-2-q16-v",
            "label": "в",
            "text": "Бининг"
          },
          {
            "id": "section-2-q16-g",
            "label": "г",
            "text": "Случайное извлечение без проверки качества"
          }
        ],
        "correctOptionId": "section-2-q16-g",
        "explanation": "улучшение качества включает очистку, сопоставление записей, устранение дублей и согласование данных.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "общая информация.md"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q17",
        "sectionId": "section-2",
        "order": 17,
        "text": "Что такое переобучение модели?",
        "options": [
          {
            "id": "section-2-q17-a",
            "label": "а",
            "text": "Модель слишком хорошо подстроилась под обучающие данные и плохо обобщает на новые"
          },
          {
            "id": "section-2-q17-b",
            "label": "б",
            "text": "Модель вообще не обучалась"
          },
          {
            "id": "section-2-q17-v",
            "label": "в",
            "text": "Модель использует только один признак"
          },
          {
            "id": "section-2-q17-g",
            "label": "г",
            "text": "Модель всегда имеет маленькую ошибку на тесте"
          }
        ],
        "correctOptionId": "section-2-q17-a",
        "explanation": "overfitting проявляется низкой ошибкой на train и высокой ошибкой на test/validation.",
        "sourceRefs": [
          "общая информация.md",
          "Google ML Crash Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q18",
        "sectionId": "section-2",
        "order": 18,
        "text": "Что такое недообучение модели?",
        "options": [
          {
            "id": "section-2-q18-a",
            "label": "а",
            "text": "Модель слишком простая и плохо работает даже на обучающих данных"
          },
          {
            "id": "section-2-q18-b",
            "label": "б",
            "text": "Модель запомнила все обучающие примеры"
          },
          {
            "id": "section-2-q18-v",
            "label": "в",
            "text": "Модель обучалась только на тестовой выборке"
          },
          {
            "id": "section-2-q18-g",
            "label": "г",
            "text": "Модель всегда является нейросетью"
          }
        ],
        "correctOptionId": "section-2-q18-a",
        "explanation": "underfitting означает, что модель не уловила важные закономерности данных.",
        "sourceRefs": [
          "общая информация.md",
          "Google ML Crash Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q19",
        "sectionId": "section-2",
        "order": 19,
        "text": "Для чего нужна кросс-валидация?",
        "options": [
          {
            "id": "section-2-q19-a",
            "label": "а",
            "text": "Чтобы устойчивее оценить качество модели на разных разбиениях данных"
          },
          {
            "id": "section-2-q19-b",
            "label": "б",
            "text": "Чтобы удалить все пропуски"
          },
          {
            "id": "section-2-q19-v",
            "label": "в",
            "text": "Чтобы заменить признаки целевой переменной"
          },
          {
            "id": "section-2-q19-g",
            "label": "г",
            "text": "Чтобы строить только графики"
          }
        ],
        "correctOptionId": "section-2-q19-a",
        "explanation": "cross-validation многократно обучает и проверяет модель на разных фолдах.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Cross-validation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-cross-validation"
        ]
      },
      {
        "id": "section-2-q20",
        "sectionId": "section-2",
        "order": 20,
        "text": "Что такое train/test split?",
        "options": [
          {
            "id": "section-2-q20-a",
            "label": "а",
            "text": "Разделение данных на обучающую и тестовую части"
          },
          {
            "id": "section-2-q20-b",
            "label": "б",
            "text": "Сортировка таблицы по алфавиту"
          },
          {
            "id": "section-2-q20-v",
            "label": "в",
            "text": "Объединение всех признаков в один"
          },
          {
            "id": "section-2-q20-g",
            "label": "г",
            "text": "Удаление целевой переменной"
          }
        ],
        "correctOptionId": "section-2-q20-a",
        "explanation": "train нужен для обучения, test - для независимой оценки качества.",
        "sourceRefs": [
          "scikit-learn: Model selection"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q21",
        "sectionId": "section-2",
        "order": 21,
        "text": "Почему нельзя подбирать параметры модели по тестовой выборке?",
        "options": [
          {
            "id": "section-2-q21-a",
            "label": "а",
            "text": "Это приводит к утечке информации и завышенной оценке качества"
          },
          {
            "id": "section-2-q21-b",
            "label": "б",
            "text": "Это ускоряет обучение в 100 раз"
          },
          {
            "id": "section-2-q21-v",
            "label": "в",
            "text": "Это всегда уменьшает размер файла"
          },
          {
            "id": "section-2-q21-g",
            "label": "г",
            "text": "Это обязательно улучшает обобщение"
          }
        ],
        "correctOptionId": "section-2-q21-a",
        "explanation": "тестовая выборка должна имитировать новые данные, которые модель еще не видела.",
        "sourceRefs": [
          "scikit-learn: Cross-validation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-cross-validation"
        ]
      },
      {
        "id": "section-2-q22",
        "sectionId": "section-2",
        "order": 22,
        "text": "Что такое data leakage?",
        "options": [
          {
            "id": "section-2-q22-a",
            "label": "а",
            "text": "Попадание информации из будущего, теста или целевой переменной в обучение"
          },
          {
            "id": "section-2-q22-b",
            "label": "б",
            "text": "Потеря строк при чтении CSV"
          },
          {
            "id": "section-2-q22-v",
            "label": "в",
            "text": "Ошибка визуализации"
          },
          {
            "id": "section-2-q22-g",
            "label": "г",
            "text": "Сжатие набора данных"
          }
        ],
        "correctOptionId": "section-2-q22-a",
        "explanation": "утечка делает метрики нереалистично высокими и портит реальную применимость модели.",
        "sourceRefs": [
          "Kaggle Learn",
          "scikit-learn: Common pitfalls"
        ],
        "materialIds": [
          "mat-section-2-kaggle-learn"
        ]
      },
      {
        "id": "section-2-q23",
        "sectionId": "section-2",
        "order": 23,
        "text": "Для чего используют масштабирование признаков?",
        "options": [
          {
            "id": "section-2-q23-a",
            "label": "а",
            "text": "Чтобы привести числовые признаки к сопоставимым диапазонам"
          },
          {
            "id": "section-2-q23-b",
            "label": "б",
            "text": "Чтобы сделать все признаки строками"
          },
          {
            "id": "section-2-q23-v",
            "label": "в",
            "text": "Чтобы удалить целевой столбец"
          },
          {
            "id": "section-2-q23-g",
            "label": "г",
            "text": "Чтобы заменить классификацию регрессией"
          }
        ],
        "correctOptionId": "section-2-q23-a",
        "explanation": "масштаб важен для методов, чувствительных к расстояниям и градиентной оптимизации.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q24",
        "sectionId": "section-2",
        "order": 24,
        "text": "Что делает стандартизация признака?",
        "options": [
          {
            "id": "section-2-q24-a",
            "label": "а",
            "text": "Преобразует значения к среднему 0 и стандартному отклонению 1"
          },
          {
            "id": "section-2-q24-b",
            "label": "б",
            "text": "Делает все значения равными 1"
          },
          {
            "id": "section-2-q24-v",
            "label": "в",
            "text": "Удаляет пропуски"
          },
          {
            "id": "section-2-q24-g",
            "label": "г",
            "text": "Кодирует категории числами от 0"
          }
        ],
        "correctOptionId": "section-2-q24-a",
        "explanation": "стандартное масштабирование часто применяют перед линейными моделями, SVM и kNN.",
        "sourceRefs": [
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q25",
        "sectionId": "section-2",
        "order": 25,
        "text": "Что делает min-max нормализация?",
        "options": [
          {
            "id": "section-2-q25-a",
            "label": "а",
            "text": "Масштабирует значения в заданный диапазон, часто от 0 до 1"
          },
          {
            "id": "section-2-q25-b",
            "label": "б",
            "text": "Удаляет максимумы и минимумы"
          },
          {
            "id": "section-2-q25-v",
            "label": "в",
            "text": "Находит медиану"
          },
          {
            "id": "section-2-q25-g",
            "label": "г",
            "text": "Делает признак категориальным"
          }
        ],
        "correctOptionId": "section-2-q25-a",
        "explanation": "MinMaxScaler сохраняет форму распределения, но меняет шкалу значений.",
        "sourceRefs": [
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q26",
        "sectionId": "section-2",
        "order": 26,
        "text": "Что такое Feature Engineering?",
        "options": [
          {
            "id": "section-2-q26-a",
            "label": "а",
            "text": "Создание, преобразование и отбор признаков для улучшения модели"
          },
          {
            "id": "section-2-q26-b",
            "label": "б",
            "text": "Только удаление всех строк"
          },
          {
            "id": "section-2-q26-v",
            "label": "в",
            "text": "Только рисование графиков"
          },
          {
            "id": "section-2-q26-g",
            "label": "г",
            "text": "Только запуск нейросети без данных"
          }
        ],
        "correctOptionId": "section-2-q26-a",
        "explanation": "качество признаков часто влияет на модель сильнее, чем выбор алгоритма.",
        "sourceRefs": [
          "общая информация.md",
          "Kaggle Learn"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-kaggle-learn"
        ]
      },
      {
        "id": "section-2-q27",
        "sectionId": "section-2",
        "order": 27,
        "text": "Как корректно обработать категориальный признак для большинства ML-моделей?",
        "options": [
          {
            "id": "section-2-q27-a",
            "label": "а",
            "text": "Закодировать его численно, например one-hot encoding"
          },
          {
            "id": "section-2-q27-b",
            "label": "б",
            "text": "Оставить произвольные строки в любой модели"
          },
          {
            "id": "section-2-q27-v",
            "label": "в",
            "text": "Удалить целевую переменную"
          },
          {
            "id": "section-2-q27-g",
            "label": "г",
            "text": "Отсортировать таблицу по дате"
          }
        ],
        "correctOptionId": "section-2-q27-a",
        "explanation": "большинство моделей scikit-learn ожидают числовые признаки.",
        "sourceRefs": [
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q28",
        "sectionId": "section-2",
        "order": 28,
        "text": "Что такое one-hot encoding?",
        "options": [
          {
            "id": "section-2-q28-a",
            "label": "а",
            "text": "Преобразование категорий в набор бинарных столбцов"
          },
          {
            "id": "section-2-q28-b",
            "label": "б",
            "text": "Масштабирование чисел от 0 до 1"
          },
          {
            "id": "section-2-q28-v",
            "label": "в",
            "text": "Удаление выбросов"
          },
          {
            "id": "section-2-q28-g",
            "label": "г",
            "text": "Подсчет корреляции"
          }
        ],
        "correctOptionId": "section-2-q28-a",
        "explanation": "каждая категория получает отдельный признак со значениями 0 или 1.",
        "sourceRefs": [
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q29",
        "sectionId": "section-2",
        "order": 29,
        "text": "Какой метод часто используют для заполнения пропусков в числовом признаке?",
        "options": [
          {
            "id": "section-2-q29-a",
            "label": "а",
            "text": "Заполнение средним, медианой или специальным значением"
          },
          {
            "id": "section-2-q29-b",
            "label": "б",
            "text": "Замена всех значений на названия столбцов"
          },
          {
            "id": "section-2-q29-v",
            "label": "в",
            "text": "Удаление модели"
          },
          {
            "id": "section-2-q29-g",
            "label": "г",
            "text": "Построение ROC-кривой"
          }
        ],
        "correctOptionId": "section-2-q29-a",
        "explanation": "выбор способа зависит от распределения и смысла признака.",
        "sourceRefs": [
          "pandas documentation",
          "scikit-learn: Imputation"
        ],
        "materialIds": [
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q30",
        "sectionId": "section-2",
        "order": 30,
        "text": "Что такое выброс?",
        "options": [
          {
            "id": "section-2-q30-a",
            "label": "а",
            "text": "Наблюдение, сильно отличающееся от основной массы данных"
          },
          {
            "id": "section-2-q30-b",
            "label": "б",
            "text": "Любой пропуск"
          },
          {
            "id": "section-2-q30-v",
            "label": "в",
            "text": "Любой категориальный признак"
          },
          {
            "id": "section-2-q30-g",
            "label": "г",
            "text": "Только первая строка таблицы"
          }
        ],
        "correctOptionId": "section-2-q30-a",
        "explanation": "выброс может быть ошибкой данных или важным редким событием.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Outlier detection"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q31",
        "sectionId": "section-2",
        "order": 31,
        "text": "Что такое EDA?",
        "options": [
          {
            "id": "section-2-q31-a",
            "label": "а",
            "text": "Разведочный анализ данных"
          },
          {
            "id": "section-2-q31-b",
            "label": "б",
            "text": "Только обучение нейросети"
          },
          {
            "id": "section-2-q31-v",
            "label": "в",
            "text": "Только экспорт CSV"
          },
          {
            "id": "section-2-q31-g",
            "label": "г",
            "text": "Способ шифрования признаков"
          }
        ],
        "correctOptionId": "section-2-q31-a",
        "explanation": "EDA включает просмотр структуры данных, пропусков, распределений, связей и аномалий.",
        "sourceRefs": [
          "общая информация.md",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q32",
        "sectionId": "section-2",
        "order": 32,
        "text": "Что обычно делают на этапе EDA?",
        "options": [
          {
            "id": "section-2-q32-a",
            "label": "а",
            "text": "Изучают типы данных, пропуски, распределения, выбросы и связи признаков"
          },
          {
            "id": "section-2-q32-b",
            "label": "б",
            "text": "Сразу публикуют модель в production без проверки"
          },
          {
            "id": "section-2-q32-v",
            "label": "в",
            "text": "Удаляют все числовые признаки"
          },
          {
            "id": "section-2-q32-g",
            "label": "г",
            "text": "Меняют Python на SQL"
          }
        ],
        "correctOptionId": "section-2-q32-a",
        "explanation": "EDA помогает понять данные до выбора модели и преобразований.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q33",
        "sectionId": "section-2",
        "order": 33,
        "text": "Какую команду pandas часто используют для сводной статистики числовых столбцов?",
        "options": [
          {
            "id": "section-2-q33-a",
            "label": "а",
            "text": "`df.describe()`"
          },
          {
            "id": "section-2-q33-b",
            "label": "б",
            "text": "`df.compile()`"
          },
          {
            "id": "section-2-q33-v",
            "label": "в",
            "text": "`df.train()`"
          },
          {
            "id": "section-2-q33-g",
            "label": "г",
            "text": "`df.tokenize()`"
          }
        ],
        "correctOptionId": "section-2-q33-a",
        "explanation": "describe() выводит count, mean, std, min, квартильные значения и max.",
        "sourceRefs": [
          "pandas documentation"
        ],
        "materialIds": [
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q34",
        "sectionId": "section-2",
        "order": 34,
        "text": "Что показывает df.info()?",
        "options": [
          {
            "id": "section-2-q34-a",
            "label": "а",
            "text": "Типы столбцов, количество непустых значений и память"
          },
          {
            "id": "section-2-q34-b",
            "label": "б",
            "text": "Только ROC-AUC"
          },
          {
            "id": "section-2-q34-v",
            "label": "в",
            "text": "Только график потерь"
          },
          {
            "id": "section-2-q34-g",
            "label": "г",
            "text": "Только список моделей"
          }
        ],
        "correctOptionId": "section-2-q34-a",
        "explanation": "info() помогает быстро увидеть пропуски и типы данных.",
        "sourceRefs": [
          "pandas documentation"
        ],
        "materialIds": [
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q35",
        "sectionId": "section-2",
        "order": 35,
        "text": "Как найти количество пропусков по столбцам в pandas?",
        "options": [
          {
            "id": "section-2-q35-a",
            "label": "а",
            "text": "`df.isna().sum()`"
          },
          {
            "id": "section-2-q35-b",
            "label": "б",
            "text": "`df.missing.count_all()`"
          },
          {
            "id": "section-2-q35-v",
            "label": "в",
            "text": "`df.nulls()`"
          },
          {
            "id": "section-2-q35-g",
            "label": "г",
            "text": "`df.drop_model()`"
          }
        ],
        "correctOptionId": "section-2-q35-a",
        "explanation": "isna() создает булеву маску пропусков, а sum() считает True по столбцам.",
        "sourceRefs": [
          "pandas documentation"
        ],
        "materialIds": [
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q36",
        "sectionId": "section-2",
        "order": 36,
        "text": "Какая метрика классификации показывает долю правильных ответов среди всех объектов?",
        "options": [
          {
            "id": "section-2-q36-a",
            "label": "а",
            "text": "Accuracy"
          },
          {
            "id": "section-2-q36-b",
            "label": "б",
            "text": "MAE"
          },
          {
            "id": "section-2-q36-v",
            "label": "в",
            "text": "RMSE"
          },
          {
            "id": "section-2-q36-g",
            "label": "г",
            "text": "MSE"
          }
        ],
        "correctOptionId": "section-2-q36-a",
        "explanation": "accuracy равна числу верных предсказаний, деленному на общее число объектов.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q37",
        "sectionId": "section-2",
        "order": 37,
        "text": "Что измеряет Precision в бинарной классификации?",
        "options": [
          {
            "id": "section-2-q37-a",
            "label": "а",
            "text": "Долю истинно положительных среди всех предсказанных положительных"
          },
          {
            "id": "section-2-q37-b",
            "label": "б",
            "text": "Долю всех найденных положительных среди реальных положительных"
          },
          {
            "id": "section-2-q37-v",
            "label": "в",
            "text": "Среднюю абсолютную ошибку"
          },
          {
            "id": "section-2-q37-g",
            "label": "г",
            "text": "Корреляцию признаков"
          }
        ],
        "correctOptionId": "section-2-q37-a",
        "explanation": "precision важна, когда ложные срабатывания дороги.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q38",
        "sectionId": "section-2",
        "order": 38,
        "text": "Что измеряет Recall в бинарной классификации?",
        "options": [
          {
            "id": "section-2-q38-a",
            "label": "а",
            "text": "Долю найденных положительных объектов среди всех реальных положительных"
          },
          {
            "id": "section-2-q38-b",
            "label": "б",
            "text": "Долю правильных отрицательных среди всех отрицательных прогнозов"
          },
          {
            "id": "section-2-q38-v",
            "label": "в",
            "text": "Среднеквадратичную ошибку"
          },
          {
            "id": "section-2-q38-g",
            "label": "г",
            "text": "Количество признаков"
          }
        ],
        "correctOptionId": "section-2-q38-a",
        "explanation": "recall важна, когда пропуск положительного случая особенно опасен.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q39",
        "sectionId": "section-2",
        "order": 39,
        "text": "Что такое F1-score?",
        "options": [
          {
            "id": "section-2-q39-a",
            "label": "а",
            "text": "Гармоническое среднее precision и recall"
          },
          {
            "id": "section-2-q39-b",
            "label": "б",
            "text": "Только среднее значение признака"
          },
          {
            "id": "section-2-q39-v",
            "label": "в",
            "text": "Ошибка регрессии в единицах целевой переменной"
          },
          {
            "id": "section-2-q39-g",
            "label": "г",
            "text": "Количество кластеров"
          }
        ],
        "correctOptionId": "section-2-q39-a",
        "explanation": "F1 балансирует точность положительных предсказаний и полноту обнаружения положительного класса.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q40",
        "sectionId": "section-2",
        "order": 40,
        "text": "Что показывает confusion matrix?",
        "options": [
          {
            "id": "section-2-q40-a",
            "label": "а",
            "text": "Число объектов по комбинациям реального и предсказанного классов"
          },
          {
            "id": "section-2-q40-b",
            "label": "б",
            "text": "Только среднее значение целевой переменной"
          },
          {
            "id": "section-2-q40-v",
            "label": "в",
            "text": "Только график распределения признаков"
          },
          {
            "id": "section-2-q40-g",
            "label": "г",
            "text": "Только количество эпох обучения"
          }
        ],
        "correctOptionId": "section-2-q40-a",
        "explanation": "матрица ошибок показывает TP, FP, TN, FN для классификации.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q41",
        "sectionId": "section-2",
        "order": 41,
        "text": "Что показывает ROC-кривая?",
        "options": [
          {
            "id": "section-2-q41-a",
            "label": "а",
            "text": "Зависимость TPR от FPR при разных порогах классификации"
          },
          {
            "id": "section-2-q41-b",
            "label": "б",
            "text": "Зависимость цены от времени"
          },
          {
            "id": "section-2-q41-v",
            "label": "в",
            "text": "Только распределение одного признака"
          },
          {
            "id": "section-2-q41-g",
            "label": "г",
            "text": "Только дерево решений"
          }
        ],
        "correctOptionId": "section-2-q41-a",
        "explanation": "ROC позволяет оценивать качество ранжирования положительного класса.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q42",
        "sectionId": "section-2",
        "order": 42,
        "text": "Что означает AUC ROC?",
        "options": [
          {
            "id": "section-2-q42-a",
            "label": "а",
            "text": "Площадь под ROC-кривой"
          },
          {
            "id": "section-2-q42-b",
            "label": "б",
            "text": "Среднюю абсолютную ошибку"
          },
          {
            "id": "section-2-q42-v",
            "label": "в",
            "text": "Количество деревьев в лесу"
          },
          {
            "id": "section-2-q42-g",
            "label": "г",
            "text": "Размер обучающей выборки"
          }
        ],
        "correctOptionId": "section-2-q42-a",
        "explanation": "чем выше AUC ROC, тем лучше модель отделяет положительный класс от отрицательного.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q43",
        "sectionId": "section-2",
        "order": 43,
        "text": "Какая метрика регрессии измеряет среднюю абсолютную ошибку?",
        "options": [
          {
            "id": "section-2-q43-a",
            "label": "а",
            "text": "MAE"
          },
          {
            "id": "section-2-q43-b",
            "label": "б",
            "text": "Accuracy"
          },
          {
            "id": "section-2-q43-v",
            "label": "в",
            "text": "Recall"
          },
          {
            "id": "section-2-q43-g",
            "label": "г",
            "text": "F1-score"
          }
        ],
        "correctOptionId": "section-2-q43-a",
        "explanation": "Mean Absolute Error усредняет модули ошибок прогноза.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q44",
        "sectionId": "section-2",
        "order": 44,
        "text": "Какая метрика регрессии сильнее штрафует большие ошибки за счет квадрата?",
        "options": [
          {
            "id": "section-2-q44-a",
            "label": "а",
            "text": "MSE"
          },
          {
            "id": "section-2-q44-b",
            "label": "б",
            "text": "Accuracy"
          },
          {
            "id": "section-2-q44-v",
            "label": "в",
            "text": "Precision"
          },
          {
            "id": "section-2-q44-g",
            "label": "г",
            "text": "Silhouette score"
          }
        ],
        "correctOptionId": "section-2-q44-a",
        "explanation": "Mean Squared Error усредняет квадраты ошибок, поэтому крупные промахи влияют сильнее.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q45",
        "sectionId": "section-2",
        "order": 45,
        "text": "Что такое RMSE?",
        "options": [
          {
            "id": "section-2-q45-a",
            "label": "а",
            "text": "Корень из MSE"
          },
          {
            "id": "section-2-q45-b",
            "label": "б",
            "text": "Доля правильных классов"
          },
          {
            "id": "section-2-q45-v",
            "label": "в",
            "text": "Число кластеров"
          },
          {
            "id": "section-2-q45-g",
            "label": "г",
            "text": "Порог классификации"
          }
        ],
        "correctOptionId": "section-2-q45-a",
        "explanation": "RMSE выражается в тех же единицах, что и целевая переменная.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q46",
        "sectionId": "section-2",
        "order": 46,
        "text": "Что такое функция потерь?",
        "options": [
          {
            "id": "section-2-q46-a",
            "label": "а",
            "text": "Функция, измеряющая ошибку модели, которую алгоритм пытается минимизировать"
          },
          {
            "id": "section-2-q46-b",
            "label": "б",
            "text": "Функция удаления пропусков"
          },
          {
            "id": "section-2-q46-v",
            "label": "в",
            "text": "Способ построения гистограммы"
          },
          {
            "id": "section-2-q46-g",
            "label": "г",
            "text": "Метод чтения CSV"
          }
        ],
        "correctOptionId": "section-2-q46-a",
        "explanation": "обучение модели обычно сводится к оптимизации функции потерь.",
        "sourceRefs": [
          "общая информация.md",
          "Google ML Crash Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q47",
        "sectionId": "section-2",
        "order": 47,
        "text": "Для чего нужна регуляризация?",
        "options": [
          {
            "id": "section-2-q47-a",
            "label": "а",
            "text": "Чтобы ограничить сложность модели и снизить риск переобучения"
          },
          {
            "id": "section-2-q47-b",
            "label": "б",
            "text": "Чтобы увеличить число строк в данных"
          },
          {
            "id": "section-2-q47-v",
            "label": "в",
            "text": "Чтобы заменить train на test"
          },
          {
            "id": "section-2-q47-g",
            "label": "г",
            "text": "Чтобы автоматически выбрать язык программирования"
          }
        ],
        "correctOptionId": "section-2-q47-a",
        "explanation": "регуляризация добавляет штраф за сложность параметров модели.",
        "sourceRefs": [
          "общая информация.md",
          "Google ML Crash Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q48",
        "sectionId": "section-2",
        "order": 48,
        "text": "Что делает L2-регуляризация?",
        "options": [
          {
            "id": "section-2-q48-a",
            "label": "а",
            "text": "Штрафует сумму квадратов весов модели"
          },
          {
            "id": "section-2-q48-b",
            "label": "б",
            "text": "Удаляет все признаки"
          },
          {
            "id": "section-2-q48-v",
            "label": "в",
            "text": "Делает все веса равными 1"
          },
          {
            "id": "section-2-q48-g",
            "label": "г",
            "text": "Считает accuracy"
          }
        ],
        "correctOptionId": "section-2-q48-a",
        "explanation": "L2 помогает ограничивать большие веса и стабилизировать модель.",
        "sourceRefs": [
          "scikit-learn: Linear Models"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q49",
        "sectionId": "section-2",
        "order": 49,
        "text": "Что такое гиперпараметр?",
        "options": [
          {
            "id": "section-2-q49-a",
            "label": "а",
            "text": "Настройка алгоритма, задаваемая до обучения модели"
          },
          {
            "id": "section-2-q49-b",
            "label": "б",
            "text": "Вес модели, который всегда обучается автоматически"
          },
          {
            "id": "section-2-q49-v",
            "label": "в",
            "text": "Любой пропуск в данных"
          },
          {
            "id": "section-2-q49-g",
            "label": "г",
            "text": "Значение целевого признака"
          }
        ],
        "correctOptionId": "section-2-q49-a",
        "explanation": "например, глубина дерева или число деревьев в лесу задаются вне процесса подгонки весов.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Model selection"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q50",
        "sectionId": "section-2",
        "order": 50,
        "text": "Что делает Grid Search?",
        "options": [
          {
            "id": "section-2-q50-a",
            "label": "а",
            "text": "Перебирает заданную сетку гиперпараметров"
          },
          {
            "id": "section-2-q50-b",
            "label": "б",
            "text": "Случайно удаляет признаки"
          },
          {
            "id": "section-2-q50-v",
            "label": "в",
            "text": "Строит только тепловую карту"
          },
          {
            "id": "section-2-q50-g",
            "label": "г",
            "text": "Заменяет модель на SQL-запрос"
          }
        ],
        "correctOptionId": "section-2-q50-a",
        "explanation": "GridSearchCV проверяет комбинации параметров, часто с кросс-валидацией.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Grid search"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q51",
        "sectionId": "section-2",
        "order": 51,
        "text": "Чем Random Search отличается от Grid Search?",
        "options": [
          {
            "id": "section-2-q51-a",
            "label": "а",
            "text": "Случайно выбирает комбинации гиперпараметров из заданных распределений"
          },
          {
            "id": "section-2-q51-b",
            "label": "б",
            "text": "Всегда проверяет все возможные комбинации"
          },
          {
            "id": "section-2-q51-v",
            "label": "в",
            "text": "Работает только с текстом"
          },
          {
            "id": "section-2-q51-g",
            "label": "г",
            "text": "Не требует метрики качества"
          }
        ],
        "correctOptionId": "section-2-q51-a",
        "explanation": "Random Search может быть эффективнее при большом пространстве параметров.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Grid search"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q52",
        "sectionId": "section-2",
        "order": 52,
        "text": "Что такое Bayesian Optimization в подборе гиперпараметров?",
        "options": [
          {
            "id": "section-2-q52-a",
            "label": "а",
            "text": "Метод, который выбирает следующие параметры с учетом результатов предыдущих проверок"
          },
          {
            "id": "section-2-q52-b",
            "label": "б",
            "text": "Полный перебор всех параметров"
          },
          {
            "id": "section-2-q52-v",
            "label": "в",
            "text": "Удаление всех категориальных признаков"
          },
          {
            "id": "section-2-q52-g",
            "label": "г",
            "text": "Построение только линейного графика"
          }
        ],
        "correctOptionId": "section-2-q52-a",
        "explanation": "байесовская оптимизация строит приближенную модель качества и ищет перспективные точки.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Model selection"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q53",
        "sectionId": "section-2",
        "order": 53,
        "text": "Какой алгоритм кластеризации требует заранее выбрать число кластеров k?",
        "options": [
          {
            "id": "section-2-q53-a",
            "label": "а",
            "text": "k-means"
          },
          {
            "id": "section-2-q53-b",
            "label": "б",
            "text": "DBSCAN"
          },
          {
            "id": "section-2-q53-v",
            "label": "в",
            "text": "Isolation Forest"
          },
          {
            "id": "section-2-q53-g",
            "label": "г",
            "text": "Logistic Regression"
          }
        ],
        "correctOptionId": "section-2-q53-a",
        "explanation": "k-means ищет заранее заданное количество центров кластеров.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Clustering"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-clustering"
        ]
      },
      {
        "id": "section-2-q54",
        "sectionId": "section-2",
        "order": 54,
        "text": "Для чего используют elbow method в k-means?",
        "options": [
          {
            "id": "section-2-q54-a",
            "label": "а",
            "text": "Для выбора разумного числа кластеров по графику внутрикластерной ошибки"
          },
          {
            "id": "section-2-q54-b",
            "label": "б",
            "text": "Для выбора размера тестовой выборки"
          },
          {
            "id": "section-2-q54-v",
            "label": "в",
            "text": "Для подсчета пропусков"
          },
          {
            "id": "section-2-q54-g",
            "label": "г",
            "text": "Для кодирования категорий"
          }
        ],
        "correctOptionId": "section-2-q54-a",
        "explanation": "\"локоть\" на графике показывает точку, после которой улучшение становится менее заметным.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Clustering"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-scikit-learn-clustering"
        ]
      },
      {
        "id": "section-2-q55",
        "sectionId": "section-2",
        "order": 55,
        "text": "Какая особенность DBSCAN отличает его от k-means?",
        "options": [
          {
            "id": "section-2-q55-a",
            "label": "а",
            "text": "Он может находить шум и не требует заранее задавать число кластеров"
          },
          {
            "id": "section-2-q55-b",
            "label": "б",
            "text": "Он работает только для регрессии"
          },
          {
            "id": "section-2-q55-v",
            "label": "в",
            "text": "Он обязательно строит ровно два кластера"
          },
          {
            "id": "section-2-q55-g",
            "label": "г",
            "text": "Он требует целевую переменную"
          }
        ],
        "correctOptionId": "section-2-q55-a",
        "explanation": "DBSCAN основан на плотности и помечает разреженные точки как шум.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: DBSCAN"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q56",
        "sectionId": "section-2",
        "order": 56,
        "text": "Что означает параметр eps в DBSCAN?",
        "options": [
          {
            "id": "section-2-q56-a",
            "label": "а",
            "text": "Радиус окрестности точки"
          },
          {
            "id": "section-2-q56-b",
            "label": "б",
            "text": "Количество деревьев"
          },
          {
            "id": "section-2-q56-v",
            "label": "в",
            "text": "Скорость обучения нейросети"
          },
          {
            "id": "section-2-q56-g",
            "label": "г",
            "text": "Долю тестовой выборки"
          }
        ],
        "correctOptionId": "section-2-q56-a",
        "explanation": "DBSCAN считает соседями точки, находящиеся не дальше eps.",
        "sourceRefs": [
          "scikit-learn: DBSCAN"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q57",
        "sectionId": "section-2",
        "order": 57,
        "text": "Что такое silhouette score?",
        "options": [
          {
            "id": "section-2-q57-a",
            "label": "а",
            "text": "Метрика качества кластеризации по компактности и отделимости кластеров"
          },
          {
            "id": "section-2-q57-b",
            "label": "б",
            "text": "Метрика бинарной классификации по TP и FP"
          },
          {
            "id": "section-2-q57-v",
            "label": "в",
            "text": "Ошибка регрессии"
          },
          {
            "id": "section-2-q57-g",
            "label": "г",
            "text": "Размер DataFrame"
          }
        ],
        "correctOptionId": "section-2-q57-a",
        "explanation": "значение ближе к 1 обычно означает более четкую кластерную структуру.",
        "sourceRefs": [
          "scikit-learn: Clustering metrics"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q58",
        "sectionId": "section-2",
        "order": 58,
        "text": "Для чего используют график в параллельных координатах?",
        "options": [
          {
            "id": "section-2-q58-a",
            "label": "а",
            "text": "Для сравнения многомерных объектов или кластеров по нескольким признакам"
          },
          {
            "id": "section-2-q58-b",
            "label": "б",
            "text": "Для отображения только одного числа"
          },
          {
            "id": "section-2-q58-v",
            "label": "в",
            "text": "Для построения ROC-кривой"
          },
          {
            "id": "section-2-q58-g",
            "label": "г",
            "text": "Для чтения CSV"
          }
        ],
        "correctOptionId": "section-2-q58-a",
        "explanation": "каждая ось соответствует признаку, а линии показывают профили объектов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "pandas/Matplotlib documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q59",
        "sectionId": "section-2",
        "order": 59,
        "text": "Что такое anomaly detection?",
        "options": [
          {
            "id": "section-2-q59-a",
            "label": "а",
            "text": "Поиск наблюдений, нетипичных относительно основной массы данных"
          },
          {
            "id": "section-2-q59-b",
            "label": "б",
            "text": "Прогнозирование класса только по тексту"
          },
          {
            "id": "section-2-q59-v",
            "label": "в",
            "text": "Построение SQL JOIN"
          },
          {
            "id": "section-2-q59-g",
            "label": "г",
            "text": "Удаление всех строк с нулями"
          }
        ],
        "correctOptionId": "section-2-q59-a",
        "explanation": "аномалии могут указывать на ошибки, мошенничество, сбои или редкие события.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Outlier detection"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q60",
        "sectionId": "section-2",
        "order": 60,
        "text": "Какой алгоритм часто используют для обнаружения аномалий?",
        "options": [
          {
            "id": "section-2-q60-a",
            "label": "а",
            "text": "Isolation Forest"
          },
          {
            "id": "section-2-q60-b",
            "label": "б",
            "text": "LinearRegression только для всех случаев"
          },
          {
            "id": "section-2-q60-v",
            "label": "в",
            "text": "OneHotEncoder"
          },
          {
            "id": "section-2-q60-g",
            "label": "г",
            "text": "CountVectorizer как единственный вариант"
          }
        ],
        "correctOptionId": "section-2-q60-a",
        "explanation": "Isolation Forest строит случайные деревья и быстрее изолирует аномальные объекты.",
        "sourceRefs": [
          "scikit-learn: Outlier detection"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q61",
        "sectionId": "section-2",
        "order": 61,
        "text": "Что означает обучение с учителем?",
        "options": [
          {
            "id": "section-2-q61-a",
            "label": "а",
            "text": "Обучение на данных, где есть признаки и известные целевые ответы"
          },
          {
            "id": "section-2-q61-b",
            "label": "б",
            "text": "Обучение без каких-либо данных"
          },
          {
            "id": "section-2-q61-v",
            "label": "в",
            "text": "Только кластеризация без меток"
          },
          {
            "id": "section-2-q61-g",
            "label": "г",
            "text": "Только визуализация графиков"
          }
        ],
        "correctOptionId": "section-2-q61-a",
        "explanation": "модель учится сопоставлять входные признаки с правильными ответами.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Supervised learning"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-supervised-learning"
        ]
      },
      {
        "id": "section-2-q62",
        "sectionId": "section-2",
        "order": 62,
        "text": "Что означает обучение без учителя?",
        "options": [
          {
            "id": "section-2-q62-a",
            "label": "а",
            "text": "Поиск структуры в данных без заранее заданных целевых меток"
          },
          {
            "id": "section-2-q62-b",
            "label": "б",
            "text": "Обучение без алгоритмов"
          },
          {
            "id": "section-2-q62-v",
            "label": "в",
            "text": "Только ручная разметка"
          },
          {
            "id": "section-2-q62-g",
            "label": "г",
            "text": "Только регрессия"
          }
        ],
        "correctOptionId": "section-2-q62-a",
        "explanation": "кластеризация и снижение размерности относятся к unsupervised learning.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Unsupervised learning"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q63",
        "sectionId": "section-2",
        "order": 63,
        "text": "Какой алгоритм относится к линейным моделям для регрессии?",
        "options": [
          {
            "id": "section-2-q63-a",
            "label": "а",
            "text": "Linear Regression"
          },
          {
            "id": "section-2-q63-b",
            "label": "б",
            "text": "k-means"
          },
          {
            "id": "section-2-q63-v",
            "label": "в",
            "text": "DBSCAN"
          },
          {
            "id": "section-2-q63-g",
            "label": "г",
            "text": "Apriori как классификатор"
          }
        ],
        "correctOptionId": "section-2-q63-a",
        "explanation": "линейная регрессия моделирует целевую переменную как линейную комбинацию признаков.",
        "sourceRefs": [
          "scikit-learn: Linear Models"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q64",
        "sectionId": "section-2",
        "order": 64,
        "text": "Что такое коэффициенты линейной регрессии?",
        "options": [
          {
            "id": "section-2-q64-a",
            "label": "а",
            "text": "Веса признаков в линейной формуле прогноза"
          },
          {
            "id": "section-2-q64-b",
            "label": "б",
            "text": "Количество строк в CSV"
          },
          {
            "id": "section-2-q64-v",
            "label": "в",
            "text": "Номера кластеров"
          },
          {
            "id": "section-2-q64-g",
            "label": "г",
            "text": "Значения ROC-кривой"
          }
        ],
        "correctOptionId": "section-2-q64-a",
        "explanation": "коэффициент показывает вклад признака при прочих равных в рамках линейной модели.",
        "sourceRefs": [
          "scikit-learn: Linear Models"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q65",
        "sectionId": "section-2",
        "order": 65,
        "text": "Какой график полезен для сравнения реальных и предсказанных значений регрессии?",
        "options": [
          {
            "id": "section-2-q65-a",
            "label": "а",
            "text": "Scatter plot `y_true` против `y_pred`"
          },
          {
            "id": "section-2-q65-b",
            "label": "б",
            "text": "Только круговая диаграмма"
          },
          {
            "id": "section-2-q65-v",
            "label": "в",
            "text": "Только dendrogram для всех задач"
          },
          {
            "id": "section-2-q65-g",
            "label": "г",
            "text": "Только confusion matrix"
          }
        ],
        "correctOptionId": "section-2-q65-a",
        "explanation": "чем ближе точки к диагонали, тем лучше прогнозы совпадают с реальными значениями.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Matplotlib documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-matplotlib-documentation"
        ]
      },
      {
        "id": "section-2-q66",
        "sectionId": "section-2",
        "order": 66,
        "text": "Что такое baseline model?",
        "options": [
          {
            "id": "section-2-q66-a",
            "label": "а",
            "text": "Простая базовая модель для сравнения с более сложными решениями"
          },
          {
            "id": "section-2-q66-b",
            "label": "б",
            "text": "Финальная модель без проверки"
          },
          {
            "id": "section-2-q66-v",
            "label": "в",
            "text": "Только нейросеть с миллионами параметров"
          },
          {
            "id": "section-2-q66-g",
            "label": "г",
            "text": "Случайный файл с данными"
          }
        ],
        "correctOptionId": "section-2-q66-a",
        "explanation": "baseline помогает понять, есть ли реальный выигрыш от сложного подхода.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Kaggle Learn"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-kaggle-learn"
        ]
      },
      {
        "id": "section-2-q67",
        "sectionId": "section-2",
        "order": 67,
        "text": "Что такое AutoML?",
        "options": [
          {
            "id": "section-2-q67-a",
            "label": "а",
            "text": "Автоматизация частей процесса построения ML-моделей"
          },
          {
            "id": "section-2-q67-b",
            "label": "б",
            "text": "Ручное написание всех SQL-запросов"
          },
          {
            "id": "section-2-q67-v",
            "label": "в",
            "text": "Только построение графиков"
          },
          {
            "id": "section-2-q67-g",
            "label": "г",
            "text": "Только хранение данных"
          }
        ],
        "correctOptionId": "section-2-q67-a",
        "explanation": "AutoML может автоматизировать подбор моделей, гиперпараметров и preprocessing.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "общая информация.md"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q68",
        "sectionId": "section-2",
        "order": 68,
        "text": "Почему для классификации на несбалансированных классах accuracy может быть плохой основной метрикой?",
        "options": [
          {
            "id": "section-2-q68-a",
            "label": "а",
            "text": "Она может быть высокой даже у модели, игнорирующей редкий класс"
          },
          {
            "id": "section-2-q68-b",
            "label": "б",
            "text": "Она не считается для классов"
          },
          {
            "id": "section-2-q68-v",
            "label": "в",
            "text": "Она работает только в регрессии"
          },
          {
            "id": "section-2-q68-g",
            "label": "г",
            "text": "Она всегда равна нулю"
          }
        ],
        "correctOptionId": "section-2-q68-a",
        "explanation": "при сильном дисбалансе важнее смотреть precision, recall, F1, ROC-AUC или PR-AUC.",
        "sourceRefs": [
          "scikit-learn: Model evaluation"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-model-evaluation"
        ]
      },
      {
        "id": "section-2-q69",
        "sectionId": "section-2",
        "order": 69,
        "text": "Что такое стратифицированное разбиение?",
        "options": [
          {
            "id": "section-2-q69-a",
            "label": "а",
            "text": "Разбиение, сохраняющее пропорции классов в train и test"
          },
          {
            "id": "section-2-q69-b",
            "label": "б",
            "text": "Разбиение только по алфавиту"
          },
          {
            "id": "section-2-q69-v",
            "label": "в",
            "text": "Удаление всех редких классов"
          },
          {
            "id": "section-2-q69-g",
            "label": "г",
            "text": "Случайная замена целевой переменной"
          }
        ],
        "correctOptionId": "section-2-q69-a",
        "explanation": "это важно для классификации, особенно при дисбалансе классов.",
        "sourceRefs": [
          "scikit-learn: Model selection"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q70",
        "sectionId": "section-2",
        "order": 70,
        "text": "Что такое целевая переменная?",
        "options": [
          {
            "id": "section-2-q70-a",
            "label": "а",
            "text": "Признак, который модель должна предсказывать"
          },
          {
            "id": "section-2-q70-b",
            "label": "б",
            "text": "Первый столбец DataFrame всегда"
          },
          {
            "id": "section-2-q70-v",
            "label": "в",
            "text": "Любой пропуск"
          },
          {
            "id": "section-2-q70-g",
            "label": "г",
            "text": "Любой идентификатор строки"
          }
        ],
        "correctOptionId": "section-2-q70-a",
        "explanation": "целевая переменная также называется target, label или y.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Supervised learning"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-supervised-learning"
        ]
      },
      {
        "id": "section-2-q71",
        "sectionId": "section-2",
        "order": 71,
        "text": "Что такое признаки в ML?",
        "options": [
          {
            "id": "section-2-q71-a",
            "label": "а",
            "text": "Входные переменные, по которым модель строит прогноз"
          },
          {
            "id": "section-2-q71-b",
            "label": "б",
            "text": "Только ответы модели"
          },
          {
            "id": "section-2-q71-v",
            "label": "в",
            "text": "Только названия файлов"
          },
          {
            "id": "section-2-q71-g",
            "label": "г",
            "text": "Только индексы строк"
          }
        ],
        "correctOptionId": "section-2-q71-a",
        "explanation": "признаки часто обозначают как X, а целевую переменную как y.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Supervised learning"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-scikit-learn-supervised-learning"
        ]
      },
      {
        "id": "section-2-q72",
        "sectionId": "section-2",
        "order": 72,
        "text": "Что делает fit() в API scikit-learn?",
        "options": [
          {
            "id": "section-2-q72-a",
            "label": "а",
            "text": "Обучает модель или преобразователь на данных"
          },
          {
            "id": "section-2-q72-b",
            "label": "б",
            "text": "Строит только график"
          },
          {
            "id": "section-2-q72-v",
            "label": "в",
            "text": "Удаляет датасет"
          },
          {
            "id": "section-2-q72-g",
            "label": "г",
            "text": "Загружает библиотеку"
          }
        ],
        "correctOptionId": "section-2-q72-a",
        "explanation": "после fit() объект хранит найденные параметры, например веса модели или средние значения scaler.",
        "sourceRefs": [
          "scikit-learn User Guide"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-user-guide"
        ]
      },
      {
        "id": "section-2-q73",
        "sectionId": "section-2",
        "order": 73,
        "text": "Что делает predict() в API scikit-learn?",
        "options": [
          {
            "id": "section-2-q73-a",
            "label": "а",
            "text": "Возвращает прогнозы обученной модели"
          },
          {
            "id": "section-2-q73-b",
            "label": "б",
            "text": "Обучает модель с нуля"
          },
          {
            "id": "section-2-q73-v",
            "label": "в",
            "text": "Удаляет признаки"
          },
          {
            "id": "section-2-q73-g",
            "label": "г",
            "text": "Читает CSV"
          }
        ],
        "correctOptionId": "section-2-q73-a",
        "explanation": "predict() применяет уже обученную модель к новым объектам.",
        "sourceRefs": [
          "scikit-learn User Guide"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-user-guide"
        ]
      },
      {
        "id": "section-2-q74",
        "sectionId": "section-2",
        "order": 74,
        "text": "Что делает fit_transform() у преобразователя?",
        "options": [
          {
            "id": "section-2-q74-a",
            "label": "а",
            "text": "Обучает преобразователь и сразу применяет преобразование"
          },
          {
            "id": "section-2-q74-b",
            "label": "б",
            "text": "Только строит ROC-кривую"
          },
          {
            "id": "section-2-q74-v",
            "label": "в",
            "text": "Только удаляет выбросы"
          },
          {
            "id": "section-2-q74-g",
            "label": "г",
            "text": "Только сохраняет модель в файл"
          }
        ],
        "correctOptionId": "section-2-q74-a",
        "explanation": "это сокращение для последовательного вызова fit() и transform().",
        "sourceRefs": [
          "scikit-learn User Guide"
        ],
        "materialIds": [
          "mat-section-2-scikit-learn-user-guide"
        ]
      },
      {
        "id": "section-2-q75",
        "sectionId": "section-2",
        "order": 75,
        "text": "Почему preprocessing лучше оформлять через Pipeline?",
        "options": [
          {
            "id": "section-2-q75-a",
            "label": "а",
            "text": "Чтобы применять одинаковые шаги к train/test и снижать риск утечки данных"
          },
          {
            "id": "section-2-q75-b",
            "label": "б",
            "text": "Чтобы отключить кросс-валидацию"
          },
          {
            "id": "section-2-q75-v",
            "label": "в",
            "text": "Чтобы заменить Python на Excel"
          },
          {
            "id": "section-2-q75-g",
            "label": "г",
            "text": "Чтобы всегда использовать только одну модель"
          }
        ],
        "correctOptionId": "section-2-q75-a",
        "explanation": "Pipeline связывает preprocessing и модель в единый воспроизводимый процесс.",
        "sourceRefs": [
          "scikit-learn: Pipeline"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q76",
        "sectionId": "section-2",
        "order": 76,
        "text": "Что такое корреляционная матрица?",
        "options": [
          {
            "id": "section-2-q76-a",
            "label": "а",
            "text": "Таблица попарных корреляций между признаками"
          },
          {
            "id": "section-2-q76-b",
            "label": "б",
            "text": "Таблица пропусков только в целевой переменной"
          },
          {
            "id": "section-2-q76-v",
            "label": "в",
            "text": "Набор классов нейросети"
          },
          {
            "id": "section-2-q76-g",
            "label": "г",
            "text": "Список гиперпараметров"
          }
        ],
        "correctOptionId": "section-2-q76-a",
        "explanation": "она помогает увидеть линейные связи и возможную мультиколлинеарность.",
        "sourceRefs": [
          "pandas documentation",
          "Seaborn tutorials"
        ],
        "materialIds": [
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q77",
        "sectionId": "section-2",
        "order": 77,
        "text": "Что такое мультиколлинеарность?",
        "options": [
          {
            "id": "section-2-q77-a",
            "label": "а",
            "text": "Сильная линейная связь между признаками"
          },
          {
            "id": "section-2-q77-b",
            "label": "б",
            "text": "Отсутствие пропусков"
          },
          {
            "id": "section-2-q77-v",
            "label": "в",
            "text": "Наличие только одного класса"
          },
          {
            "id": "section-2-q77-g",
            "label": "г",
            "text": "Ошибка чтения CSV"
          }
        ],
        "correctOptionId": "section-2-q77-a",
        "explanation": "она может усложнять интерпретацию коэффициентов линейных моделей.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Linear Models"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q78",
        "sectionId": "section-2",
        "order": 78,
        "text": "Что показывает boxplot?",
        "options": [
          {
            "id": "section-2-q78-a",
            "label": "а",
            "text": "Медиану, квартильный разброс и потенциальные выбросы"
          },
          {
            "id": "section-2-q78-b",
            "label": "б",
            "text": "Только количество классов"
          },
          {
            "id": "section-2-q78-v",
            "label": "в",
            "text": "Только точность модели"
          },
          {
            "id": "section-2-q78-g",
            "label": "г",
            "text": "Только дерево решений"
          }
        ],
        "correctOptionId": "section-2-q78-a",
        "explanation": "boxplot полезен для сравнения распределений и поиска аномальных значений.",
        "sourceRefs": [
          "Matplotlib documentation",
          "Seaborn tutorials"
        ],
        "materialIds": [
          "mat-section-2-matplotlib-documentation"
        ]
      },
      {
        "id": "section-2-q79",
        "sectionId": "section-2",
        "order": 79,
        "text": "Что такое бининг?",
        "options": [
          {
            "id": "section-2-q79-a",
            "label": "а",
            "text": "Разбиение числового признака на интервалы"
          },
          {
            "id": "section-2-q79-b",
            "label": "б",
            "text": "Удаление всех категорий"
          },
          {
            "id": "section-2-q79-v",
            "label": "в",
            "text": "Сохранение модели"
          },
          {
            "id": "section-2-q79-g",
            "label": "г",
            "text": "Подсчет ROC-AUC"
          }
        ],
        "correctOptionId": "section-2-q79-a",
        "explanation": "бининг превращает непрерывные значения в интервальные группы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "pandas documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-pandas-documentation"
        ]
      },
      {
        "id": "section-2-q80",
        "sectionId": "section-2",
        "order": 80,
        "text": "Что такое \"золотая запись\" в качестве данных?",
        "options": [
          {
            "id": "section-2-q80-a",
            "label": "а",
            "text": "Наиболее полная и согласованная версия записи об объекте"
          },
          {
            "id": "section-2-q80-b",
            "label": "б",
            "text": "Первая строка CSV"
          },
          {
            "id": "section-2-q80-v",
            "label": "в",
            "text": "Любая строка без чисел"
          },
          {
            "id": "section-2-q80-g",
            "label": "г",
            "text": "Модель с лучшей accuracy"
          }
        ],
        "correctOptionId": "section-2-q80-a",
        "explanation": "golden record используют при объединении дублей из разных источников.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "общая информация.md"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q81",
        "sectionId": "section-2",
        "order": 81,
        "text": "Какая нейросеть чаще всего применяется для обработки изображений?",
        "options": [
          {
            "id": "section-2-q81-a",
            "label": "а",
            "text": "CNN"
          },
          {
            "id": "section-2-q81-b",
            "label": "б",
            "text": "RNN"
          },
          {
            "id": "section-2-q81-v",
            "label": "в",
            "text": "Только линейная регрессия"
          },
          {
            "id": "section-2-q81-g",
            "label": "г",
            "text": "k-means"
          }
        ],
        "correctOptionId": "section-2-q81-a",
        "explanation": "сверточные нейросети хорошо извлекают локальные признаки изображений.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q82",
        "sectionId": "section-2",
        "order": 82,
        "text": "Какая нейросеть часто применяется для последовательностей и временных рядов?",
        "options": [
          {
            "id": "section-2-q82-a",
            "label": "а",
            "text": "RNN или LSTM"
          },
          {
            "id": "section-2-q82-b",
            "label": "б",
            "text": "Только k-means"
          },
          {
            "id": "section-2-q82-v",
            "label": "в",
            "text": "Только Random Forest"
          },
          {
            "id": "section-2-q82-g",
            "label": "г",
            "text": "Только PCA"
          }
        ],
        "correctOptionId": "section-2-q82-a",
        "explanation": "рекуррентные архитектуры учитывают порядок элементов последовательности.",
        "sourceRefs": [
          "общая информация.md",
          "PyTorch/TensorFlow tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q83",
        "sectionId": "section-2",
        "order": 83,
        "text": "Для чего используют LSTM?",
        "options": [
          {
            "id": "section-2-q83-a",
            "label": "а",
            "text": "Для работы с последовательностями и долгосрочными зависимостями"
          },
          {
            "id": "section-2-q83-b",
            "label": "б",
            "text": "Только для чтения CSV"
          },
          {
            "id": "section-2-q83-v",
            "label": "в",
            "text": "Только для кодирования категорий"
          },
          {
            "id": "section-2-q83-g",
            "label": "г",
            "text": "Только для построения histogram"
          }
        ],
        "correctOptionId": "section-2-q83-a",
        "explanation": "LSTM содержит механизмы управления памятью, которые помогают хранить важную информацию.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q84",
        "sectionId": "section-2",
        "order": 84,
        "text": "Что такое GAN?",
        "options": [
          {
            "id": "section-2-q84-a",
            "label": "а",
            "text": "Генеративно-состязательная сеть из генератора и дискриминатора"
          },
          {
            "id": "section-2-q84-b",
            "label": "б",
            "text": "Таблица корреляций"
          },
          {
            "id": "section-2-q84-v",
            "label": "в",
            "text": "Алгоритм сортировки"
          },
          {
            "id": "section-2-q84-g",
            "label": "г",
            "text": "Метод SQL JOIN"
          }
        ],
        "correctOptionId": "section-2-q84-a",
        "explanation": "генератор пытается создавать похожие данные, а дискриминатор отличает реальные данные от сгенерированных.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q85",
        "sectionId": "section-2",
        "order": 85,
        "text": "Какая функция активации часто используется в скрытых слоях нейросетей благодаря простоте и борьбе с затуханием градиента?",
        "options": [
          {
            "id": "section-2-q85-a",
            "label": "а",
            "text": "ReLU"
          },
          {
            "id": "section-2-q85-b",
            "label": "б",
            "text": "Softmax"
          },
          {
            "id": "section-2-q85-v",
            "label": "в",
            "text": "Только линейная функция вывода без ограничений"
          },
          {
            "id": "section-2-q85-g",
            "label": "г",
            "text": "SQL"
          }
        ],
        "correctOptionId": "section-2-q85-a",
        "explanation": "ReLU возвращает max(0, x) и часто ускоряет обучение глубоких сетей.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q86",
        "sectionId": "section-2",
        "order": 86,
        "text": "Где обычно применяют Softmax?",
        "options": [
          {
            "id": "section-2-q86-a",
            "label": "а",
            "text": "В выходном слое многоклассовой классификации"
          },
          {
            "id": "section-2-q86-b",
            "label": "б",
            "text": "Для чтения CSV"
          },
          {
            "id": "section-2-q86-v",
            "label": "в",
            "text": "Для удаления пропусков"
          },
          {
            "id": "section-2-q86-g",
            "label": "г",
            "text": "Для разбиения train/test"
          }
        ],
        "correctOptionId": "section-2-q86-a",
        "explanation": "Softmax преобразует набор чисел в распределение вероятностей по классам.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q87",
        "sectionId": "section-2",
        "order": 87,
        "text": "Что делает Sigmoid?",
        "options": [
          {
            "id": "section-2-q87-a",
            "label": "а",
            "text": "Преобразует число в диапазон от 0 до 1"
          },
          {
            "id": "section-2-q87-b",
            "label": "б",
            "text": "Сортирует DataFrame"
          },
          {
            "id": "section-2-q87-v",
            "label": "в",
            "text": "Удаляет выбросы"
          },
          {
            "id": "section-2-q87-g",
            "label": "г",
            "text": "Делит данные на кластеры"
          }
        ],
        "correctOptionId": "section-2-q87-a",
        "explanation": "sigmoid часто используют для вероятности бинарного события.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q88",
        "sectionId": "section-2",
        "order": 88,
        "text": "Что такое эпоха обучения нейросети?",
        "options": [
          {
            "id": "section-2-q88-a",
            "label": "а",
            "text": "Один полный проход по обучающему набору данных"
          },
          {
            "id": "section-2-q88-b",
            "label": "б",
            "text": "Один признак таблицы"
          },
          {
            "id": "section-2-q88-v",
            "label": "в",
            "text": "Один класс в классификации"
          },
          {
            "id": "section-2-q88-g",
            "label": "г",
            "text": "Один тип графика"
          }
        ],
        "correctOptionId": "section-2-q88-a",
        "explanation": "количество эпох задает, сколько раз модель увидит обучающие данные.",
        "sourceRefs": [
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q89",
        "sectionId": "section-2",
        "order": 89,
        "text": "Что такое learning rate?",
        "options": [
          {
            "id": "section-2-q89-a",
            "label": "а",
            "text": "Размер шага обновления параметров при оптимизации"
          },
          {
            "id": "section-2-q89-b",
            "label": "б",
            "text": "Количество классов"
          },
          {
            "id": "section-2-q89-v",
            "label": "в",
            "text": "Размер CSV-файла"
          },
          {
            "id": "section-2-q89-g",
            "label": "г",
            "text": "Число пропусков"
          }
        ],
        "correctOptionId": "section-2-q89-a",
        "explanation": "слишком большой шаг может мешать сходимости, слишком маленький - замедлять обучение.",
        "sourceRefs": [
          "Google ML Crash Course"
        ],
        "materialIds": []
      },
      {
        "id": "section-2-q90",
        "sectionId": "section-2",
        "order": 90,
        "text": "Что такое dropout?",
        "options": [
          {
            "id": "section-2-q90-a",
            "label": "а",
            "text": "Метод регуляризации, случайно отключающий часть нейронов при обучении"
          },
          {
            "id": "section-2-q90-b",
            "label": "б",
            "text": "Удаление всех строк из DataFrame"
          },
          {
            "id": "section-2-q90-v",
            "label": "в",
            "text": "Способ сортировки"
          },
          {
            "id": "section-2-q90-g",
            "label": "г",
            "text": "Метод чтения Excel"
          }
        ],
        "correctOptionId": "section-2-q90-a",
        "explanation": "dropout снижает зависимость модели от отдельных нейронов и помогает против переобучения.",
        "sourceRefs": [
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q91",
        "sectionId": "section-2",
        "order": 91,
        "text": "Что такое Bag of Words?",
        "options": [
          {
            "id": "section-2-q91-a",
            "label": "а",
            "text": "Представление текста через частоты или факты наличия слов без учета порядка"
          },
          {
            "id": "section-2-q91-b",
            "label": "б",
            "text": "Нейросеть для изображений"
          },
          {
            "id": "section-2-q91-v",
            "label": "в",
            "text": "Метод масштабирования чисел"
          },
          {
            "id": "section-2-q91-g",
            "label": "г",
            "text": "Таблица пропусков"
          }
        ],
        "correctOptionId": "section-2-q91-a",
        "explanation": "Bag of Words превращает текст в числовой вектор словарных признаков.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q92",
        "sectionId": "section-2",
        "order": 92,
        "text": "Что такое TF-IDF?",
        "options": [
          {
            "id": "section-2-q92-a",
            "label": "а",
            "text": "Взвешивание слов по частоте в документе и редкости в корпусе"
          },
          {
            "id": "section-2-q92-b",
            "label": "б",
            "text": "Деление данных на train и test"
          },
          {
            "id": "section-2-q92-v",
            "label": "в",
            "text": "Алгоритм кластеризации по плотности"
          },
          {
            "id": "section-2-q92-g",
            "label": "г",
            "text": "Функция активации"
          }
        ],
        "correctOptionId": "section-2-q92-a",
        "explanation": "TF-IDF уменьшает вес слишком общих слов и выделяет более информативные.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q93",
        "sectionId": "section-2",
        "order": 93,
        "text": "Что такое стоп-слова в обработке текста?",
        "options": [
          {
            "id": "section-2-q93-a",
            "label": "а",
            "text": "Частые служебные слова, которые иногда удаляют перед анализом"
          },
          {
            "id": "section-2-q93-b",
            "label": "б",
            "text": "Ошибки компиляции Python"
          },
          {
            "id": "section-2-q93-v",
            "label": "в",
            "text": "Только имена людей"
          },
          {
            "id": "section-2-q93-g",
            "label": "г",
            "text": "Только числа"
          }
        ],
        "correctOptionId": "section-2-q93-a",
        "explanation": "стоп-слова могут не нести полезного смысла для конкретной задачи, хотя удалять их нужно осознанно.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q94",
        "sectionId": "section-2",
        "order": 94,
        "text": "Что такое n-грамма?",
        "options": [
          {
            "id": "section-2-q94-a",
            "label": "а",
            "text": "Последовательность из `n` соседних токенов"
          },
          {
            "id": "section-2-q94-b",
            "label": "б",
            "text": "Количество эпох обучения"
          },
          {
            "id": "section-2-q94-v",
            "label": "в",
            "text": "Число кластеров"
          },
          {
            "id": "section-2-q94-g",
            "label": "г",
            "text": "Ошибка регрессии"
          }
        ],
        "correctOptionId": "section-2-q94-a",
        "explanation": "биграммы и триграммы помогают учитывать локальный контекст слов.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q95",
        "sectionId": "section-2",
        "order": 95,
        "text": "Что такое word embedding?",
        "options": [
          {
            "id": "section-2-q95-a",
            "label": "а",
            "text": "Плотное векторное представление слова или токена"
          },
          {
            "id": "section-2-q95-b",
            "label": "б",
            "text": "Таблица ошибок классификации"
          },
          {
            "id": "section-2-q95-v",
            "label": "в",
            "text": "Способ масштабирования от 0 до 1"
          },
          {
            "id": "section-2-q95-g",
            "label": "г",
            "text": "Случайное удаление столбцов"
          }
        ],
        "correctOptionId": "section-2-q95-a",
        "explanation": "эмбеддинги кодируют смысловую близость слов в векторном пространстве.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q96",
        "sectionId": "section-2",
        "order": 96,
        "text": "Какой из методов является контекстуальным представлением текста?",
        "options": [
          {
            "id": "section-2-q96-a",
            "label": "а",
            "text": "BERT"
          },
          {
            "id": "section-2-q96-b",
            "label": "б",
            "text": "One-hot encoding категории цвета"
          },
          {
            "id": "section-2-q96-v",
            "label": "в",
            "text": "MinMaxScaler"
          },
          {
            "id": "section-2-q96-g",
            "label": "г",
            "text": "Histogram"
          }
        ],
        "correctOptionId": "section-2-q96-a",
        "explanation": "BERT строит представление слова с учетом его контекста в предложении.",
        "sourceRefs": [
          "общая информация.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q97",
        "sectionId": "section-2",
        "order": 97,
        "text": "Что такое topic modeling?",
        "options": [
          {
            "id": "section-2-q97-a",
            "label": "а",
            "text": "Поиск скрытых тем в коллекции документов без ручных меток"
          },
          {
            "id": "section-2-q97-b",
            "label": "б",
            "text": "Бинарная классификация изображений"
          },
          {
            "id": "section-2-q97-v",
            "label": "в",
            "text": "Подсчет RMSE"
          },
          {
            "id": "section-2-q97-g",
            "label": "г",
            "text": "Масштабирование признаков"
          }
        ],
        "correctOptionId": "section-2-q97-a",
        "explanation": "тематическое моделирование обычно относится к обучению без учителя.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q98",
        "sectionId": "section-2",
        "order": 98,
        "text": "Что такое NER?",
        "options": [
          {
            "id": "section-2-q98-a",
            "label": "а",
            "text": "Извлечение именованных сущностей из текста"
          },
          {
            "id": "section-2-q98-b",
            "label": "б",
            "text": "Нормализация числовых признаков"
          },
          {
            "id": "section-2-q98-v",
            "label": "в",
            "text": "Регрессия на временном ряду"
          },
          {
            "id": "section-2-q98-g",
            "label": "г",
            "text": "Кластеризация по k средним"
          }
        ],
        "correctOptionId": "section-2-q98-a",
        "explanation": "NER находит сущности вроде людей, организаций, локаций, дат и других именованных объектов.",
        "sourceRefs": [
          "общая информация.md",
          "NLP documentation/resources"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-2-q99",
        "sectionId": "section-2",
        "order": 99,
        "text": "Что такое анализ тональности?",
        "options": [
          {
            "id": "section-2-q99-a",
            "label": "а",
            "text": "Определение эмоциональной окраски текста, например позитивной или негативной"
          },
          {
            "id": "section-2-q99-b",
            "label": "б",
            "text": "Поиск максимума в числовом массиве"
          },
          {
            "id": "section-2-q99-v",
            "label": "в",
            "text": "Расчет MSE для регрессии"
          },
          {
            "id": "section-2-q99-g",
            "label": "г",
            "text": "Масштабирование данных"
          }
        ],
        "correctOptionId": "section-2-q99-a",
        "explanation": "sentiment analysis относится к задачам классификации текстов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-2-q100",
        "sectionId": "section-2",
        "order": 100,
        "text": "Какой порядок действий наиболее корректен для практической ML-задачи на табличных данных?",
        "options": [
          {
            "id": "section-2-q100-a",
            "label": "а",
            "text": "Понять задачу, выполнить EDA, подготовить данные, разделить выборки, обучить baseline, оценить метрики, улучшать модель"
          },
          {
            "id": "section-2-q100-b",
            "label": "б",
            "text": "Сразу обучить самую сложную нейросеть на всех данных и оценить на train"
          },
          {
            "id": "section-2-q100-v",
            "label": "в",
            "text": "Удалить целевую переменную и построить только гистограмму"
          },
          {
            "id": "section-2-q100-g",
            "label": "г",
            "text": "Сначала смотреть тестовую выборку, затем подбирать под нее все признаки"
          }
        ],
        "correctOptionId": "section-2-q100-a",
        "explanation": "такой процесс снижает риск утечек, помогает выбрать правильную метрику и делает результат воспроизводимым.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Kaggle Learn",
          "scikit-learn User Guide"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-2-kaggle-learn",
          "mat-section-2-scikit-learn-user-guide"
        ]
      },
      {
        "id": "section-2-q101",
        "sectionId": "section-2",
        "order": 101,
        "text": "Что произойдёт с моделью машинного обучения, если не масштабировать признаки?",
        "options": [
          {
            "id": "section-2-q101-a",
            "label": "а",
            "text": "Модель будет работать быстрее"
          },
          {
            "id": "section-2-q101-b",
            "label": "б",
            "text": "Признаки с большими числовыми диапазонами будут иметь больший вес, что исказит обучение"
          },
          {
            "id": "section-2-q101-v",
            "label": "в",
            "text": "Модель автоматически нормализует данные"
          },
          {
            "id": "section-2-q101-g",
            "label": "г",
            "text": "Ничего не произойдёт, масштабирование не важно"
          }
        ],
        "correctOptionId": "section-2-q101-b",
        "explanation": "многие алгоритмы чувствительны к масштабу признаков, особенно методы на расстояниях и градиентные методы. Признаки с большим диапазоном могут непропорционально влиять на модель.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q102",
        "sectionId": "section-2",
        "order": 102,
        "text": "Какой метод преобразования текста в числа позволяет различать редкие важные события и частые неважные?",
        "options": [
          {
            "id": "section-2-q102-a",
            "label": "а",
            "text": "Bag of Words считает только частоту"
          },
          {
            "id": "section-2-q102-b",
            "label": "б",
            "text": "TF-IDF повышает вес редких слов и понижает вес частых слов"
          },
          {
            "id": "section-2-q102-v",
            "label": "в",
            "text": "One-hot encoding"
          },
          {
            "id": "section-2-q102-g",
            "label": "г",
            "text": "Векторизация через среднее арифметическое"
          }
        ],
        "correctOptionId": "section-2-q102-b",
        "explanation": "TF-IDF учитывает частоту слова в документе и обратную частоту по корпусу, поэтому частые общие слова получают меньший вес.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q103",
        "sectionId": "section-2",
        "order": 103,
        "text": "Какой метод используется для оценки качества модели на ограниченных данных?",
        "options": [
          {
            "id": "section-2-q103-a",
            "label": "а",
            "text": "Кросс-валидация"
          },
          {
            "id": "section-2-q103-b",
            "label": "б",
            "text": "Градиентный спуск"
          },
          {
            "id": "section-2-q103-v",
            "label": "в",
            "text": "Метод главных компонент"
          },
          {
            "id": "section-2-q103-g",
            "label": "г",
            "text": "Случайный лес"
          }
        ],
        "correctOptionId": "section-2-q103-a",
        "explanation": "кросс-валидация позволяет несколько раз обучать и проверять модель на разных частях данных, получая более устойчивую оценку качества.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Cross-validation"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-scikit-learn-cross-validation"
        ]
      },
      {
        "id": "section-2-q104",
        "sectionId": "section-2",
        "order": 104,
        "text": "Какая архитектура нейросети лучше всего подходит для обработки последовательных данных?",
        "options": [
          {
            "id": "section-2-q104-a",
            "label": "а",
            "text": "RNN / LSTM"
          },
          {
            "id": "section-2-q104-b",
            "label": "б",
            "text": "Автоэнкодер"
          },
          {
            "id": "section-2-q104-v",
            "label": "в",
            "text": "CNN"
          },
          {
            "id": "section-2-q104-g",
            "label": "г",
            "text": "GAN"
          }
        ],
        "correctOptionId": "section-2-q104-a",
        "explanation": "RNN и LSTM предназначены для данных, где важен порядок элементов и зависимость от предыдущих состояний.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "TensorFlow/PyTorch tutorials"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q105",
        "sectionId": "section-2",
        "order": 105,
        "text": "Какой метод подбора гиперпараметров сэмплирует случайные комбинации из заданных распределений?",
        "options": [
          {
            "id": "section-2-q105-a",
            "label": "а",
            "text": "Manual Search"
          },
          {
            "id": "section-2-q105-b",
            "label": "б",
            "text": "Exhaustive Search"
          },
          {
            "id": "section-2-q105-v",
            "label": "в",
            "text": "Random Search"
          },
          {
            "id": "section-2-q105-g",
            "label": "г",
            "text": "Grid Search"
          }
        ],
        "correctOptionId": "section-2-q105-v",
        "explanation": "Random Search не перебирает всю сетку, а случайно выбирает комбинации параметров из заданных диапазонов или распределений.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Grid search"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q106",
        "sectionId": "section-2",
        "order": 106,
        "text": "Какой алгоритм лучше всего подходит для бинарной классификации с чёткими правилами?",
        "options": [
          {
            "id": "section-2-q106-a",
            "label": "а",
            "text": "Логистическая регрессия"
          },
          {
            "id": "section-2-q106-b",
            "label": "б",
            "text": "Дерево решений"
          },
          {
            "id": "section-2-q106-v",
            "label": "в",
            "text": "K-ближайших соседей"
          },
          {
            "id": "section-2-q106-g",
            "label": "г",
            "text": "Нейронная сеть"
          }
        ],
        "correctOptionId": "section-2-q106-b",
        "explanation": "дерево решений хорошо выражает набор правил вида если условие, то класс, поэтому подходит для интерпретируемых пороговых условий.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Decision Trees"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q107",
        "sectionId": "section-2",
        "order": 107,
        "text": "Какой результат выполнения кода обучения модели с кросс-валидацией?",
        "options": [
          {
            "id": "section-2-q107-a",
            "label": "а",
            "text": "`Folds: 5\\nPerfect: False`"
          },
          {
            "id": "section-2-q107-b",
            "label": "б",
            "text": "`Folds: 10\\nPerfect: True`"
          },
          {
            "id": "section-2-q107-v",
            "label": "в",
            "text": "`Folds: 5\\nPerfect: True`"
          },
          {
            "id": "section-2-q107-g",
            "label": "г",
            "text": "`Folds: 3\\nPerfect: False`"
          }
        ],
        "correctOptionId": "section-2-q107-a",
        "explanation": "cv=5 дает 5 фолдов, но при обычной KFold-кросс-валидации без перемешивания некоторые тестовые фолды лежат целиком внутри одного класса или около границы, а обучающие данные могут не покрывать обе стороны порога для каждого фолда идеально. Поэтому все scores не будут равны 1.0.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Cross-validation"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-scikit-learn-cross-validation"
        ]
      },
      {
        "id": "section-2-q108",
        "sectionId": "section-2",
        "order": 108,
        "text": "Какая функция активации чаще всего используется в выходном слое для задачи многоклассовой классификации?",
        "options": [
          {
            "id": "section-2-q108-a",
            "label": "а",
            "text": "Sigmoid"
          },
          {
            "id": "section-2-q108-b",
            "label": "б",
            "text": "Tanh"
          },
          {
            "id": "section-2-q108-v",
            "label": "в",
            "text": "ReLU"
          },
          {
            "id": "section-2-q108-g",
            "label": "г",
            "text": "Softmax"
          }
        ],
        "correctOptionId": "section-2-q108-g",
        "explanation": "Softmax преобразует выходы модели в распределение вероятностей по нескольким взаимоисключающим классам.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "TensorFlow Tutorials"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-tensorflow-tutorials"
        ]
      },
      {
        "id": "section-2-q109",
        "sectionId": "section-2",
        "order": 109,
        "text": "Как называется ситуация, когда модель хорошо работает на обучающих данных, но плохо на новых?",
        "options": [
          {
            "id": "section-2-q109-a",
            "label": "а",
            "text": "Underfitting (недообучение)"
          },
          {
            "id": "section-2-q109-b",
            "label": "б",
            "text": "Overfitting (переобучение)"
          },
          {
            "id": "section-2-q109-v",
            "label": "в",
            "text": "Bias-variance tradeoff"
          },
          {
            "id": "section-2-q109-g",
            "label": "г",
            "text": "Градиентный спуск"
          }
        ],
        "correctOptionId": "section-2-q109-b",
        "explanation": "переобученная модель слишком сильно подстроилась под обучающую выборку и хуже обобщает закономерности на новые данные.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Google Machine Learning Crash Course"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-google-machine-learning-crash-course"
        ]
      },
      {
        "id": "section-2-q110",
        "sectionId": "section-2",
        "order": 110,
        "text": "Для какой задачи чаще всего используются свёрточные нейронные сети (CNN)?",
        "options": [
          {
            "id": "section-2-q110-a",
            "label": "а",
            "text": "Обработка текстов"
          },
          {
            "id": "section-2-q110-b",
            "label": "б",
            "text": "Распознавание изображений"
          },
          {
            "id": "section-2-q110-v",
            "label": "в",
            "text": "Прогнозирование временных рядов"
          },
          {
            "id": "section-2-q110-g",
            "label": "г",
            "text": "Кластеризация данных"
          }
        ],
        "correctOptionId": "section-2-q110-b",
        "explanation": "CNN извлекают локальные пространственные признаки и поэтому особенно эффективны для изображений.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "TensorFlow/PyTorch tutorials"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q111",
        "sectionId": "section-2",
        "order": 111,
        "text": "Что такое нормализация или масштабирование признаков?",
        "options": [
          {
            "id": "section-2-q111-a",
            "label": "а",
            "text": "Удаление выбросов из данных"
          },
          {
            "id": "section-2-q111-b",
            "label": "б",
            "text": "Приведение числовых признаков к одному диапазону, например 0-1"
          },
          {
            "id": "section-2-q111-v",
            "label": "в",
            "text": "Заполнение пропущенных значений"
          },
          {
            "id": "section-2-q111-g",
            "label": "г",
            "text": "Кодирование категориальных признаков"
          }
        ],
        "correctOptionId": "section-2-q111-b",
        "explanation": "масштабирование меняет шкалу числовых признаков, чтобы они были сопоставимы для алгоритмов обучения.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Preprocessing"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-2-scikit-learn-preprocessing"
        ]
      },
      {
        "id": "section-2-q112",
        "sectionId": "section-2",
        "order": 112,
        "text": "Что такое стоп-слова в обработке текста?",
        "options": [
          {
            "id": "section-2-q112-a",
            "label": "а",
            "text": "Самые частые слова, которые обычно удаляют перед анализом"
          },
          {
            "id": "section-2-q112-b",
            "label": "б",
            "text": "Редкие слова, которые не влияют на смысл"
          },
          {
            "id": "section-2-q112-v",
            "label": "в",
            "text": "Ключевые слова, определяющие тему текста"
          },
          {
            "id": "section-2-q112-g",
            "label": "г",
            "text": "Синонимы основных терминов"
          }
        ],
        "correctOptionId": "section-2-q112-a",
        "explanation": "стоп-словами часто называют служебные и очень частые слова, которые могут давать мало полезной информации для конкретной модели.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Working with text data"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-2-q113",
        "sectionId": "section-2",
        "order": 113,
        "text": "Какое утверждение о методах подбора гиперпараметров является верным?",
        "options": [
          {
            "id": "section-2-q113-a",
            "label": "а",
            "text": "Grid Search перебирает все комбинации из заданного набора гиперпараметров, а Random Search выбирает случайные комбинации, что может быть эффективнее при большом количестве параметров"
          },
          {
            "id": "section-2-q113-b",
            "label": "б",
            "text": "Bayesian Optimization гарантирует нахождение глобального оптимума за меньшее количество итераций, чем Grid Search"
          },
          {
            "id": "section-2-q113-v",
            "label": "в",
            "text": "Подбор гиперпараметров выполняется только на тестовой выборке"
          },
          {
            "id": "section-2-q113-g",
            "label": "г",
            "text": "Все алгоритмы машинного обучения имеют одинаковый набор гиперпараметров"
          }
        ],
        "correctOptionId": "section-2-q113-a",
        "explanation": "Grid Search делает полный перебор заданной сетки, а Random Search проверяет случайные комбинации и часто эффективен в больших пространствах поиска.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "scikit-learn: Grid search"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      }
    ]
  },
  {
    "id": "section-3",
    "title": "Тема 3. Алгоритмы и структуры данных: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_3_алгоритмы_и_структуры_данных_100_тестовых_вопросов.md.",
    "order": 3,
    "questions": [
      {
        "id": "section-3-q1",
        "sectionId": "section-3",
        "order": 1,
        "text": "Выберите правильное рекуррентное соотношение для создания последовательности чисел Фибоначчи.",
        "options": [
          {
            "id": "section-3-q1-a",
            "label": "а",
            "text": "`F(0) = 0, F(1) = 1, F(n)=F(n-1)+F(n-2)`"
          },
          {
            "id": "section-3-q1-b",
            "label": "б",
            "text": "`F(0) = 1, F(1) = 1, F(n)=F(n-1)+F(n-2)`"
          },
          {
            "id": "section-3-q1-v",
            "label": "в",
            "text": "`F(0) = 1, F(1) = 2, F(n)=F(n-1)+F(n-2)`"
          },
          {
            "id": "section-3-q1-g",
            "label": "г",
            "text": "`F(0) = 0, F(1) = 2, F(n)=F(n-1)*F(n-2)`"
          }
        ],
        "correctOptionId": "section-3-q1-a",
        "explanation": "классическое определение: первые два числа 0 и 1, каждое следующее равно сумме двух предыдущих.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q2",
        "sectionId": "section-3",
        "order": 2,
        "text": "Что такое итерация цикла в программировании?",
        "options": [
          {
            "id": "section-3-q2-a",
            "label": "а",
            "text": "Процесс завершения выполнения программы"
          },
          {
            "id": "section-3-q2-b",
            "label": "б",
            "text": "Процесс повторного выполнения блока кода до тех пор, пока выполняется заданное условие"
          },
          {
            "id": "section-3-q2-v",
            "label": "в",
            "text": "Способ хранения данных в памяти"
          },
          {
            "id": "section-3-q2-g",
            "label": "г",
            "text": "Метод оптимизации алгоритма для повышения скорости"
          }
        ],
        "correctOptionId": "section-3-q2-b",
        "explanation": "итерация - один повтор тела цикла или сам процесс повторения блока команд.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python Tutorial: control flow"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-3-q3",
        "sectionId": "section-3",
        "order": 3,
        "text": "Как называется структура, которая позволяет организовать данные в форме дерева, где каждый узел может иметь несколько дочерних узлов?",
        "options": [
          {
            "id": "section-3-q3-a",
            "label": "а",
            "text": "Линейная структура"
          },
          {
            "id": "section-3-q3-b",
            "label": "б",
            "text": "Структура с иерархией"
          },
          {
            "id": "section-3-q3-v",
            "label": "в",
            "text": "Граф без связей"
          },
          {
            "id": "section-3-q3-g",
            "label": "г",
            "text": "Динамический массив"
          }
        ],
        "correctOptionId": "section-3-q3-b",
        "explanation": "дерево описывает иерархию: есть корневой узел, потомки и связи родитель-потомок.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "VisuAlgo: Tree/BST"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-3-q4",
        "sectionId": "section-3",
        "order": 4,
        "text": "Какое десятичное число соответствует восьмеричному числу 17?",
        "options": [
          {
            "id": "section-3-q4-a",
            "label": "а",
            "text": "13"
          },
          {
            "id": "section-3-q4-b",
            "label": "б",
            "text": "14"
          },
          {
            "id": "section-3-q4-v",
            "label": "в",
            "text": "15"
          },
          {
            "id": "section-3-q4-g",
            "label": "г",
            "text": "16"
          }
        ],
        "correctOptionId": "section-3-q4-v",
        "explanation": "17₈ = 1 * 8 + 7 = 15₁₀.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "материалы по системам счисления"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-3-q5",
        "sectionId": "section-3",
        "order": 5,
        "text": "Что будет выведено на экран?",
        "options": [
          {
            "id": "section-3-q5-a",
            "label": "а",
            "text": "`2, 5`"
          },
          {
            "id": "section-3-q5-b",
            "label": "б",
            "text": "`0, 6`"
          },
          {
            "id": "section-3-q5-v",
            "label": "в",
            "text": "`0, 5`"
          },
          {
            "id": "section-3-q5-g",
            "label": "г",
            "text": "`3, 4`"
          }
        ],
        "correctOptionId": "section-3-q5-v",
        "explanation": "последний проход начинается при a = 5: 5 // 6 = 0, 5 % 6 = 5, затем a становится отрицательным.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python: operators"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-3-q6",
        "sectionId": "section-3",
        "order": 6,
        "text": "Выберите правильное рекуррентное соотношение для создания последовательности чисел Фибоначчи.",
        "options": [
          {
            "id": "section-3-q6-a",
            "label": "а",
            "text": "`F(n) = F(n-1) + F(n-2), где F(0) = 0, F(1) = 1`"
          },
          {
            "id": "section-3-q6-b",
            "label": "б",
            "text": "`F(n) = F(n-1) + F(n-2), где F(1) = 1, F(2) = 2`"
          },
          {
            "id": "section-3-q6-v",
            "label": "в",
            "text": "`F(n) = F(n-1) * F(n-2), где F(0) = 1, F(1) = 1`"
          },
          {
            "id": "section-3-q6-g",
            "label": "г",
            "text": "`F(n) = F(n-1) + n, где F(0) = 0`"
          }
        ],
        "correctOptionId": "section-3-q6-a",
        "explanation": "это стандартное рекуррентное определение чисел Фибоначчи.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q7",
        "sectionId": "section-3",
        "order": 7,
        "text": "Какое десятичное число соответствует восьмеричному числу 17?",
        "options": [
          {
            "id": "section-3-q7-a",
            "label": "а",
            "text": "13"
          },
          {
            "id": "section-3-q7-b",
            "label": "б",
            "text": "14"
          },
          {
            "id": "section-3-q7-v",
            "label": "в",
            "text": "15"
          },
          {
            "id": "section-3-q7-g",
            "label": "г",
            "text": "16"
          }
        ],
        "correctOptionId": "section-3-q7-v",
        "explanation": "17₈ = 1 * 8 + 7 = 15₁₀.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "материалы по системам счисления"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q8",
        "sectionId": "section-3",
        "order": 8,
        "text": "Какая структура данных работает по принципу LIFO?",
        "options": [
          {
            "id": "section-3-q8-a",
            "label": "а",
            "text": "Очередь"
          },
          {
            "id": "section-3-q8-b",
            "label": "б",
            "text": "Стек"
          },
          {
            "id": "section-3-q8-v",
            "label": "в",
            "text": "Дек"
          },
          {
            "id": "section-3-q8-g",
            "label": "г",
            "text": "Связный список"
          }
        ],
        "correctOptionId": "section-3-q8-b",
        "explanation": "LIFO означает Last In, First Out: последним добавили, первым извлекли.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Stack"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q9",
        "sectionId": "section-3",
        "order": 9,
        "text": "Какая временная сложность поиска элемента в несортированном массиве в худшем случае?",
        "options": [
          {
            "id": "section-3-q9-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q9-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q9-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q9-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q9-v",
        "explanation": "в худшем случае нужно проверить все n элементов.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q10",
        "sectionId": "section-3",
        "order": 10,
        "text": "Алгоритм сортировки, который на каждом шаге выбирает наименьший элемент и ставит его в начало, называется:",
        "options": [
          {
            "id": "section-3-q10-a",
            "label": "а",
            "text": "Сортировка пузырьком"
          },
          {
            "id": "section-3-q10-b",
            "label": "б",
            "text": "Быстрая сортировка"
          },
          {
            "id": "section-3-q10-v",
            "label": "в",
            "text": "Сортировка выбором"
          },
          {
            "id": "section-3-q10-g",
            "label": "г",
            "text": "Сортировка вставками"
          }
        ],
        "correctOptionId": "section-3-q10-v",
        "explanation": "selection sort выбирает минимальный элемент из неотсортированной части и переносит его на правильную позицию.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Sorting"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q11",
        "sectionId": "section-3",
        "order": 11,
        "text": "Какая структура данных чаще всего используется для реализации DFS в графах?",
        "options": [
          {
            "id": "section-3-q11-a",
            "label": "а",
            "text": "Очередь"
          },
          {
            "id": "section-3-q11-b",
            "label": "б",
            "text": "Хеш-таблица"
          },
          {
            "id": "section-3-q11-v",
            "label": "в",
            "text": "Стек"
          },
          {
            "id": "section-3-q11-g",
            "label": "г",
            "text": "Массив"
          }
        ],
        "correctOptionId": "section-3-q11-v",
        "explanation": "DFS углубляется по одному пути; это естественно реализуется стеком вызовов рекурсии или явным стеком.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Graph Traversal"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q12",
        "sectionId": "section-3",
        "order": 12,
        "text": "Какое утверждение о двусвязном списке является верным?",
        "options": [
          {
            "id": "section-3-q12-a",
            "label": "а",
            "text": "Каждый узел хранит ссылку только на следующий элемент"
          },
          {
            "id": "section-3-q12-b",
            "label": "б",
            "text": "Каждый узел хранит ссылки как на следующий, так и на предыдущий элемент"
          },
          {
            "id": "section-3-q12-v",
            "label": "в",
            "text": "Доступ к любому элементу осуществляется за `O(1)`"
          },
          {
            "id": "section-3-q12-g",
            "label": "г",
            "text": "Двусвязный список не может быть использован для реализации очереди"
          }
        ],
        "correctOptionId": "section-3-q12-b",
        "explanation": "узел двусвязного списка содержит ссылку на следующий и предыдущий элементы.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Linked List"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q13",
        "sectionId": "section-3",
        "order": 13,
        "text": "Какая временная сложность бинарного поиска в отсортированном массиве в худшем случае?",
        "options": [
          {
            "id": "section-3-q13-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q13-b",
            "label": "б",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q13-v",
            "label": "в",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q13-g",
            "label": "г",
            "text": "`O(n log n)`"
          }
        ],
        "correctOptionId": "section-3-q13-v",
        "explanation": "на каждом шаге бинарный поиск отбрасывает примерно половину оставшегося диапазона.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Binary Search"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q14",
        "sectionId": "section-3",
        "order": 14,
        "text": "Какая структура данных работает по принципу FIFO?",
        "options": [
          {
            "id": "section-3-q14-a",
            "label": "а",
            "text": "Стек"
          },
          {
            "id": "section-3-q14-b",
            "label": "б",
            "text": "Очередь"
          },
          {
            "id": "section-3-q14-v",
            "label": "в",
            "text": "Дек"
          },
          {
            "id": "section-3-q14-g",
            "label": "г",
            "text": "Множество"
          }
        ],
        "correctOptionId": "section-3-q14-b",
        "explanation": "FIFO означает First In, First Out: первым добавили, первым извлекли.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Queue"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q15",
        "sectionId": "section-3",
        "order": 15,
        "text": "Какое утверждение о хеш-таблице является верным?",
        "options": [
          {
            "id": "section-3-q15-a",
            "label": "а",
            "text": "Хеш-таблица гарантирует упорядоченное хранение элементов"
          },
          {
            "id": "section-3-q15-b",
            "label": "б",
            "text": "Временная сложность операции поиска в среднем случае составляет `O(1)`"
          },
          {
            "id": "section-3-q15-v",
            "label": "в",
            "text": "Хеш-таблица не допускает хранения пар ключ-значение"
          },
          {
            "id": "section-3-q15-g",
            "label": "г",
            "text": "Коллизии в хеш-таблице невозможно разрешить"
          }
        ],
        "correctOptionId": "section-3-q15-b",
        "explanation": "при хорошем хешировании поиск, вставка и удаление в среднем выполняются за константное время.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md",
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q16",
        "sectionId": "section-3",
        "order": 16,
        "text": "Алгоритм сортировки, который многократно проходит по массиву, сравнивая и меняя местами соседние элементы, называется:",
        "options": [
          {
            "id": "section-3-q16-a",
            "label": "а",
            "text": "Сортировка пузырьком"
          },
          {
            "id": "section-3-q16-b",
            "label": "б",
            "text": "Быстрая сортировка"
          },
          {
            "id": "section-3-q16-v",
            "label": "в",
            "text": "Сортировка слиянием"
          },
          {
            "id": "section-3-q16-g",
            "label": "г",
            "text": "Сортировка вставками"
          }
        ],
        "correctOptionId": "section-3-q16-a",
        "explanation": "bubble sort постепенно \"всплывает\" большие элементы к концу массива через обмен соседних элементов.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Sorting"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q17",
        "sectionId": "section-3",
        "order": 17,
        "text": "Какая структура данных чаще всего используется для реализации BFS в графах?",
        "options": [
          {
            "id": "section-3-q17-a",
            "label": "а",
            "text": "Стек"
          },
          {
            "id": "section-3-q17-b",
            "label": "б",
            "text": "Очередь"
          },
          {
            "id": "section-3-q17-v",
            "label": "в",
            "text": "Массив"
          },
          {
            "id": "section-3-q17-g",
            "label": "г",
            "text": "Двоичная куча"
          }
        ],
        "correctOptionId": "section-3-q17-b",
        "explanation": "BFS обходит вершины слоями, поэтому сначала обрабатываются вершины, добавленные раньше.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Graph Traversal"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q18",
        "sectionId": "section-3",
        "order": 18,
        "text": "Какая дополнительная память требуется для сортировки слиянием?",
        "options": [
          {
            "id": "section-3-q18-a",
            "label": "а",
            "text": "Стек"
          },
          {
            "id": "section-3-q18-b",
            "label": "б",
            "text": "Очередь"
          },
          {
            "id": "section-3-q18-v",
            "label": "в",
            "text": "Массив"
          },
          {
            "id": "section-3-q18-g",
            "label": "г",
            "text": "Двоичная куча"
          }
        ],
        "correctOptionId": "section-3-q18-v",
        "explanation": "классическая merge sort использует дополнительный массив для слияния отсортированных частей.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Merge Sort"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q19",
        "sectionId": "section-3",
        "order": 19,
        "text": "Какое утверждение о бинарном дереве поиска является верным?",
        "options": [
          {
            "id": "section-3-q19-a",
            "label": "а",
            "text": "В левом поддереве значения больше корня"
          },
          {
            "id": "section-3-q19-b",
            "label": "б",
            "text": "В левом поддереве значения меньше корня, а в правом - больше"
          },
          {
            "id": "section-3-q19-v",
            "label": "в",
            "text": "BST не позволяет выполнять поиск за `O(log n)` в среднем случае"
          },
          {
            "id": "section-3-q19-g",
            "label": "г",
            "text": "BST всегда является сбалансированным деревом"
          }
        ],
        "correctOptionId": "section-3-q19-b",
        "explanation": "свойство BST: слева значения меньше узла, справа - больше; при сбалансированности это дает быстрый поиск.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "VisuAlgo: Binary Search Tree"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-3-q20",
        "sectionId": "section-3",
        "order": 20,
        "text": "Что такое рекурсия?",
        "options": [
          {
            "id": "section-3-q20-a",
            "label": "а",
            "text": "Вызов функцией самой себя напрямую или через цепочку вызовов"
          },
          {
            "id": "section-3-q20-b",
            "label": "б",
            "text": "Сортировка массива по возрастанию"
          },
          {
            "id": "section-3-q20-v",
            "label": "в",
            "text": "Хранение элементов по ключу"
          },
          {
            "id": "section-3-q20-g",
            "label": "г",
            "text": "Обход массива только слева направо"
          }
        ],
        "correctOptionId": "section-3-q20-a",
        "explanation": "рекурсивный алгоритм решает задачу через такие же подзадачи меньшего размера.",
        "sourceRefs": [
          "общая информация.md",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q21",
        "sectionId": "section-3",
        "order": 21,
        "text": "Что обязательно должно быть у корректной рекурсивной функции?",
        "options": [
          {
            "id": "section-3-q21-a",
            "label": "а",
            "text": "Базовый случай завершения"
          },
          {
            "id": "section-3-q21-b",
            "label": "б",
            "text": "Только глобальная переменная"
          },
          {
            "id": "section-3-q21-v",
            "label": "в",
            "text": "Только цикл `while`"
          },
          {
            "id": "section-3-q21-g",
            "label": "г",
            "text": "Сортировка результата"
          }
        ],
        "correctOptionId": "section-3-q21-a",
        "explanation": "без базового случая рекурсия не остановится и приведет к переполнению стека вызовов.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Recursion"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q22",
        "sectionId": "section-3",
        "order": 22,
        "text": "Какова временная сложность наивного рекурсивного вычисления F(n) без мемоизации?",
        "options": [
          {
            "id": "section-3-q22-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q22-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q22-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q22-g",
            "label": "г",
            "text": "Экспоненциальная, примерно `O(2^n)`"
          }
        ],
        "correctOptionId": "section-3-q22-g",
        "explanation": "одни и те же значения Фибоначчи пересчитываются много раз.",
        "sourceRefs": [
          "общая информация.md",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q23",
        "sectionId": "section-3",
        "order": 23,
        "text": "Какова временная сложность итеративного вычисления n-го числа Фибоначчи?",
        "options": [
          {
            "id": "section-3-q23-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q23-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q23-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q23-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q23-v",
        "explanation": "алгоритм последовательно вычисляет значения от начала до n.",
        "sourceRefs": [
          "общая информация.md",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q24",
        "sectionId": "section-3",
        "order": 24,
        "text": "Что означает O(1)?",
        "options": [
          {
            "id": "section-3-q24-a",
            "label": "а",
            "text": "Время работы не зависит от размера входных данных"
          },
          {
            "id": "section-3-q24-b",
            "label": "б",
            "text": "Время растет линейно"
          },
          {
            "id": "section-3-q24-v",
            "label": "в",
            "text": "Время растет квадратично"
          },
          {
            "id": "section-3-q24-g",
            "label": "г",
            "text": "Алгоритм всегда выполняется за одну наносекунду"
          }
        ],
        "correctOptionId": "section-3-q24-a",
        "explanation": "константная сложность означает ограниченное число операций независимо от n.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q25",
        "sectionId": "section-3",
        "order": 25,
        "text": "Что означает O(n)?",
        "options": [
          {
            "id": "section-3-q25-a",
            "label": "а",
            "text": "Время растет пропорционально размеру входа"
          },
          {
            "id": "section-3-q25-b",
            "label": "б",
            "text": "Время не зависит от входа"
          },
          {
            "id": "section-3-q25-v",
            "label": "в",
            "text": "Время растет как логарифм"
          },
          {
            "id": "section-3-q25-g",
            "label": "г",
            "text": "Алгоритм всегда сортирует данные"
          }
        ],
        "correctOptionId": "section-3-q25-a",
        "explanation": "при удвоении размера входа число операций примерно удваивается.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q26",
        "sectionId": "section-3",
        "order": 26,
        "text": "Что означает O(n²)?",
        "options": [
          {
            "id": "section-3-q26-a",
            "label": "а",
            "text": "Два независимых прохода по массиву"
          },
          {
            "id": "section-3-q26-b",
            "label": "б",
            "text": "Количество операций пропорционально квадрату размера входа"
          },
          {
            "id": "section-3-q26-v",
            "label": "в",
            "text": "Алгоритм работает быстрее линейного"
          },
          {
            "id": "section-3-q26-g",
            "label": "г",
            "text": "Алгоритм использует только два элемента"
          }
        ],
        "correctOptionId": "section-3-q26-b",
        "explanation": "типичный пример - два вложенных цикла по n элементов.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q27",
        "sectionId": "section-3",
        "order": 27,
        "text": "Какая сложность обычно характерна для эффективных сравнительных сортировок вроде merge sort и quicksort в среднем случае?",
        "options": [
          {
            "id": "section-3-q27-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q27-b",
            "label": "б",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q27-v",
            "label": "в",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q27-g",
            "label": "г",
            "text": "`O(n³)`"
          }
        ],
        "correctOptionId": "section-3-q27-v",
        "explanation": "сортировки делят данные и выполняют работу на каждом уровне разбиения.",
        "sourceRefs": [
          "VisuAlgo: Sorting"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q28",
        "sectionId": "section-3",
        "order": 28,
        "text": "Какое условие обязательно для бинарного поиска?",
        "options": [
          {
            "id": "section-3-q28-a",
            "label": "а",
            "text": "Данные должны быть отсортированы"
          },
          {
            "id": "section-3-q28-b",
            "label": "б",
            "text": "Данные должны быть строками"
          },
          {
            "id": "section-3-q28-v",
            "label": "в",
            "text": "В массиве не должно быть чисел"
          },
          {
            "id": "section-3-q28-g",
            "label": "г",
            "text": "Массив должен быть связанным списком"
          }
        ],
        "correctOptionId": "section-3-q28-a",
        "explanation": "бинарный поиск использует порядок элементов, чтобы отбрасывать половину диапазона.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Binary Search"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q29",
        "sectionId": "section-3",
        "order": 29,
        "text": "Какова сложность линейного поиска в лучшем случае?",
        "options": [
          {
            "id": "section-3-q29-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q29-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q29-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q29-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q29-a",
        "explanation": "искомый элемент может оказаться первым.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q30",
        "sectionId": "section-3",
        "order": 30,
        "text": "Что делает операция push в стеке?",
        "options": [
          {
            "id": "section-3-q30-a",
            "label": "а",
            "text": "Добавляет элемент на вершину стека"
          },
          {
            "id": "section-3-q30-b",
            "label": "б",
            "text": "Удаляет первый добавленный элемент"
          },
          {
            "id": "section-3-q30-v",
            "label": "в",
            "text": "Сортирует стек"
          },
          {
            "id": "section-3-q30-g",
            "label": "г",
            "text": "Проверяет хеш ключа"
          }
        ],
        "correctOptionId": "section-3-q30-a",
        "explanation": "стек добавляет и удаляет элементы с одного конца - вершины.",
        "sourceRefs": [
          "VisuAlgo: Stack"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q31",
        "sectionId": "section-3",
        "order": 31,
        "text": "Что делает операция pop в стеке?",
        "options": [
          {
            "id": "section-3-q31-a",
            "label": "а",
            "text": "Удаляет и возвращает верхний элемент"
          },
          {
            "id": "section-3-q31-b",
            "label": "б",
            "text": "Добавляет элемент в конец очереди"
          },
          {
            "id": "section-3-q31-v",
            "label": "в",
            "text": "Удаляет все элементы"
          },
          {
            "id": "section-3-q31-g",
            "label": "г",
            "text": "Выполняет бинарный поиск"
          }
        ],
        "correctOptionId": "section-3-q31-a",
        "explanation": "pop извлекает последний добавленный элемент.",
        "sourceRefs": [
          "VisuAlgo: Stack"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q32",
        "sectionId": "section-3",
        "order": 32,
        "text": "Где естественно используется стек вызовов?",
        "options": [
          {
            "id": "section-3-q32-a",
            "label": "а",
            "text": "При выполнении рекурсивных функций"
          },
          {
            "id": "section-3-q32-b",
            "label": "б",
            "text": "Только при сортировке выбором"
          },
          {
            "id": "section-3-q32-v",
            "label": "в",
            "text": "Только при работе хеш-таблицы"
          },
          {
            "id": "section-3-q32-g",
            "label": "г",
            "text": "Только при переводе чисел в десятичную систему"
          }
        ],
        "correctOptionId": "section-3-q32-a",
        "explanation": "каждый рекурсивный вызов помещает новый фрейм в стек вызовов.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Recursion"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q33",
        "sectionId": "section-3",
        "order": 33,
        "text": "Что делает операция enqueue в очереди?",
        "options": [
          {
            "id": "section-3-q33-a",
            "label": "а",
            "text": "Добавляет элемент в конец очереди"
          },
          {
            "id": "section-3-q33-b",
            "label": "б",
            "text": "Удаляет элемент с вершины стека"
          },
          {
            "id": "section-3-q33-v",
            "label": "в",
            "text": "Делит массив пополам"
          },
          {
            "id": "section-3-q33-g",
            "label": "г",
            "text": "Проверяет свойство BST"
          }
        ],
        "correctOptionId": "section-3-q33-a",
        "explanation": "очередь добавляет новые элементы в конец и извлекает из начала.",
        "sourceRefs": [
          "VisuAlgo: Queue"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q34",
        "sectionId": "section-3",
        "order": 34,
        "text": "Что делает операция dequeue в очереди?",
        "options": [
          {
            "id": "section-3-q34-a",
            "label": "а",
            "text": "Удаляет и возвращает первый добавленный элемент"
          },
          {
            "id": "section-3-q34-b",
            "label": "б",
            "text": "Добавляет элемент в начало стека"
          },
          {
            "id": "section-3-q34-v",
            "label": "в",
            "text": "Сортирует очередь"
          },
          {
            "id": "section-3-q34-g",
            "label": "г",
            "text": "Создает хеш-функцию"
          }
        ],
        "correctOptionId": "section-3-q34-a",
        "explanation": "очередь работает по принципу FIFO.",
        "sourceRefs": [
          "VisuAlgo: Queue"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q35",
        "sectionId": "section-3",
        "order": 35,
        "text": "Чем дек отличается от обычной очереди?",
        "options": [
          {
            "id": "section-3-q35-a",
            "label": "а",
            "text": "Позволяет добавлять и удалять элементы с обоих концов"
          },
          {
            "id": "section-3-q35-b",
            "label": "б",
            "text": "Запрещает удаление элементов"
          },
          {
            "id": "section-3-q35-v",
            "label": "в",
            "text": "Всегда хранит элементы отсортированными"
          },
          {
            "id": "section-3-q35-g",
            "label": "г",
            "text": "Работает только с числами"
          }
        ],
        "correctOptionId": "section-3-q35-a",
        "explanation": "deque означает double-ended queue.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Linked List/Deque"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q36",
        "sectionId": "section-3",
        "order": 36,
        "text": "Что такое хеш-функция?",
        "options": [
          {
            "id": "section-3-q36-a",
            "label": "а",
            "text": "Функция, преобразующая ключ в индекс или хеш-значение"
          },
          {
            "id": "section-3-q36-b",
            "label": "б",
            "text": "Функция сортировки массива"
          },
          {
            "id": "section-3-q36-v",
            "label": "в",
            "text": "Функция обхода графа"
          },
          {
            "id": "section-3-q36-g",
            "label": "г",
            "text": "Функция вычисления высоты дерева"
          }
        ],
        "correctOptionId": "section-3-q36-a",
        "explanation": "хеш-таблица использует хеш ключа для быстрого поиска места хранения.",
        "sourceRefs": [
          "VisuAlgo: Hash Table"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q37",
        "sectionId": "section-3",
        "order": 37,
        "text": "Что такое коллизия в хеш-таблице?",
        "options": [
          {
            "id": "section-3-q37-a",
            "label": "а",
            "text": "Ситуация, когда разные ключи получают один и тот же хеш или индекс"
          },
          {
            "id": "section-3-q37-b",
            "label": "б",
            "text": "Удаление всех ключей"
          },
          {
            "id": "section-3-q37-v",
            "label": "в",
            "text": "Превращение списка в стек"
          },
          {
            "id": "section-3-q37-g",
            "label": "г",
            "text": "Нахождение минимального элемента"
          }
        ],
        "correctOptionId": "section-3-q37-a",
        "explanation": "пространство индексов ограничено, поэтому разные ключи могут попасть в одну ячейку.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Hash Table"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q38",
        "sectionId": "section-3",
        "order": 38,
        "text": "Какой способ разрешения коллизий хранит несколько элементов в одной ячейке через список или цепочку?",
        "options": [
          {
            "id": "section-3-q38-a",
            "label": "а",
            "text": "Метод цепочек"
          },
          {
            "id": "section-3-q38-b",
            "label": "б",
            "text": "Бинарный поиск"
          },
          {
            "id": "section-3-q38-v",
            "label": "в",
            "text": "Сортировка вставками"
          },
          {
            "id": "section-3-q38-g",
            "label": "г",
            "text": "DFS"
          }
        ],
        "correctOptionId": "section-3-q38-a",
        "explanation": "chaining хранит все элементы с одинаковым индексом в отдельной цепочке.",
        "sourceRefs": [
          "VisuAlgo: Hash Table"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q39",
        "sectionId": "section-3",
        "order": 39,
        "text": "Что такое открытая адресация в хеш-таблице?",
        "options": [
          {
            "id": "section-3-q39-a",
            "label": "а",
            "text": "Поиск другой свободной ячейки внутри самой таблицы при коллизии"
          },
          {
            "id": "section-3-q39-b",
            "label": "б",
            "text": "Хранение всех элементов в связанном списке вне таблицы"
          },
          {
            "id": "section-3-q39-v",
            "label": "в",
            "text": "Сортировка ключей перед вставкой"
          },
          {
            "id": "section-3-q39-g",
            "label": "г",
            "text": "Обход графа в ширину"
          }
        ],
        "correctOptionId": "section-3-q39-a",
        "explanation": "при open addressing элемент размещается в другой позиции таблицы по правилу пробирования.",
        "sourceRefs": [
          "VisuAlgo: Hash Table"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q40",
        "sectionId": "section-3",
        "order": 40,
        "text": "Какова худшая сложность поиска в хеш-таблице при большом числе коллизий?",
        "options": [
          {
            "id": "section-3-q40-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q40-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q40-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q40-g",
            "label": "г",
            "text": "`O(n log n)`"
          }
        ],
        "correctOptionId": "section-3-q40-v",
        "explanation": "если много ключей попали в одну цепочку или пробирование стало длинным, поиск может просмотреть много элементов.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q41",
        "sectionId": "section-3",
        "order": 41,
        "text": "Что такое корень дерева?",
        "options": [
          {
            "id": "section-3-q41-a",
            "label": "а",
            "text": "Узел без родителя"
          },
          {
            "id": "section-3-q41-b",
            "label": "б",
            "text": "Узел без детей"
          },
          {
            "id": "section-3-q41-v",
            "label": "в",
            "text": "Последний элемент массива"
          },
          {
            "id": "section-3-q41-g",
            "label": "г",
            "text": "Ребро минимального веса"
          }
        ],
        "correctOptionId": "section-3-q41-a",
        "explanation": "корень - начальный верхний узел иерархии дерева.",
        "sourceRefs": [
          "VisuAlgo: Tree/BST"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q42",
        "sectionId": "section-3",
        "order": 42,
        "text": "Что такое лист дерева?",
        "options": [
          {
            "id": "section-3-q42-a",
            "label": "а",
            "text": "Узел без дочерних узлов"
          },
          {
            "id": "section-3-q42-b",
            "label": "б",
            "text": "Узел без родителя"
          },
          {
            "id": "section-3-q42-v",
            "label": "в",
            "text": "Любое ребро графа"
          },
          {
            "id": "section-3-q42-g",
            "label": "г",
            "text": "Корень двоичной кучи"
          }
        ],
        "correctOptionId": "section-3-q42-a",
        "explanation": "лист является конечным узлом ветви дерева.",
        "sourceRefs": [
          "VisuAlgo: Tree/BST"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q43",
        "sectionId": "section-3",
        "order": 43,
        "text": "Что такое высота дерева?",
        "options": [
          {
            "id": "section-3-q43-a",
            "label": "а",
            "text": "Длина самого длинного пути от корня к листу"
          },
          {
            "id": "section-3-q43-b",
            "label": "б",
            "text": "Количество всех ребер графа"
          },
          {
            "id": "section-3-q43-v",
            "label": "в",
            "text": "Размер хеш-таблицы"
          },
          {
            "id": "section-3-q43-g",
            "label": "г",
            "text": "Количество сортировок массива"
          }
        ],
        "correctOptionId": "section-3-q43-a",
        "explanation": "высота показывает максимальную глубину дерева.",
        "sourceRefs": [
          "VisuAlgo: Tree/BST"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q44",
        "sectionId": "section-3",
        "order": 44,
        "text": "Какая максимальная степень узла в бинарном дереве?",
        "options": [
          {
            "id": "section-3-q44-a",
            "label": "а",
            "text": "1"
          },
          {
            "id": "section-3-q44-b",
            "label": "б",
            "text": "2"
          },
          {
            "id": "section-3-q44-v",
            "label": "в",
            "text": "3"
          },
          {
            "id": "section-3-q44-g",
            "label": "г",
            "text": "Любое число"
          }
        ],
        "correctOptionId": "section-3-q44-b",
        "explanation": "в бинарном дереве у узла может быть не более двух потомков.",
        "sourceRefs": [
          "VisuAlgo: Binary Search Tree"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q45",
        "sectionId": "section-3",
        "order": 45,
        "text": "Какова средняя сложность поиска в сбалансированном BST?",
        "options": [
          {
            "id": "section-3-q45-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q45-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q45-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q45-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q45-b",
        "explanation": "высота сбалансированного дерева логарифмически зависит от числа узлов.",
        "sourceRefs": [
          "VisuAlgo: Binary Search Tree"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q46",
        "sectionId": "section-3",
        "order": 46,
        "text": "Какова сложность поиска в вырожденном BST, похожем на список?",
        "options": [
          {
            "id": "section-3-q46-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q46-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q46-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q46-g",
            "label": "г",
            "text": "`O(n log n)`"
          }
        ],
        "correctOptionId": "section-3-q46-v",
        "explanation": "если дерево превратилось в цепочку, поиск проходит по узлам почти как в связанном списке.",
        "sourceRefs": [
          "VisuAlgo: Binary Search Tree"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q47",
        "sectionId": "section-3",
        "order": 47,
        "text": "Что такое двоичная куча?",
        "options": [
          {
            "id": "section-3-q47-a",
            "label": "а",
            "text": "Почти полное бинарное дерево со свойством кучи"
          },
          {
            "id": "section-3-q47-b",
            "label": "б",
            "text": "Хеш-таблица с коллизиями"
          },
          {
            "id": "section-3-q47-v",
            "label": "в",
            "text": "Любой связный граф"
          },
          {
            "id": "section-3-q47-g",
            "label": "г",
            "text": "Список без порядка"
          }
        ],
        "correctOptionId": "section-3-q47-a",
        "explanation": "в min-heap родитель не больше детей, в max-heap родитель не меньше детей.",
        "sourceRefs": [
          "VisuAlgo: Binary Heap"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q48",
        "sectionId": "section-3",
        "order": 48,
        "text": "Для чего обычно используют приоритетную очередь?",
        "options": [
          {
            "id": "section-3-q48-a",
            "label": "а",
            "text": "Для извлечения элемента с наивысшим или наименьшим приоритетом"
          },
          {
            "id": "section-3-q48-b",
            "label": "б",
            "text": "Для хранения только уникальных строк"
          },
          {
            "id": "section-3-q48-v",
            "label": "в",
            "text": "Для обхода графа в глубину без стека"
          },
          {
            "id": "section-3-q48-g",
            "label": "г",
            "text": "Для проверки скобочной последовательности"
          }
        ],
        "correctOptionId": "section-3-q48-a",
        "explanation": "приоритетная очередь быстро возвращает элемент с лучшим приоритетом.",
        "sourceRefs": [
          "VisuAlgo: Binary Heap"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q49",
        "sectionId": "section-3",
        "order": 49,
        "text": "Что такое граф?",
        "options": [
          {
            "id": "section-3-q49-a",
            "label": "а",
            "text": "Множество вершин и ребер между ними"
          },
          {
            "id": "section-3-q49-b",
            "label": "б",
            "text": "Только отсортированный массив"
          },
          {
            "id": "section-3-q49-v",
            "label": "в",
            "text": "Только дерево с одним корнем"
          },
          {
            "id": "section-3-q49-g",
            "label": "г",
            "text": "Только очередь"
          }
        ],
        "correctOptionId": "section-3-q49-a",
        "explanation": "граф моделирует объекты и связи между ними.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: Graph"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q50",
        "sectionId": "section-3",
        "order": 50,
        "text": "Чем ориентированный граф отличается от неориентированного?",
        "options": [
          {
            "id": "section-3-q50-a",
            "label": "а",
            "text": "В ориентированном графе ребра имеют направление"
          },
          {
            "id": "section-3-q50-b",
            "label": "б",
            "text": "В ориентированном графе нет вершин"
          },
          {
            "id": "section-3-q50-v",
            "label": "в",
            "text": "В неориентированном графе всегда есть веса"
          },
          {
            "id": "section-3-q50-g",
            "label": "г",
            "text": "В ориентированном графе нельзя делать DFS"
          }
        ],
        "correctOptionId": "section-3-q50-a",
        "explanation": "ребро u -> v в ориентированном графе не равно ребру v -> u.",
        "sourceRefs": [
          "VisuAlgo: Graph"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q51",
        "sectionId": "section-3",
        "order": 51,
        "text": "Что такое взвешенный граф?",
        "options": [
          {
            "id": "section-3-q51-a",
            "label": "а",
            "text": "Граф, у ребер или вершин которого есть числовые веса"
          },
          {
            "id": "section-3-q51-b",
            "label": "б",
            "text": "Граф без циклов"
          },
          {
            "id": "section-3-q51-v",
            "label": "в",
            "text": "Граф только из двух вершин"
          },
          {
            "id": "section-3-q51-g",
            "label": "г",
            "text": "Граф, хранящийся только в матрице"
          }
        ],
        "correctOptionId": "section-3-q51-a",
        "explanation": "веса могут обозначать расстояния, стоимость, время или пропускную способность.",
        "sourceRefs": [
          "общая информация.md",
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q52",
        "sectionId": "section-3",
        "order": 52,
        "text": "Что хранит список смежности графа?",
        "options": [
          {
            "id": "section-3-q52-a",
            "label": "а",
            "text": "Для каждой вершины список ее соседей"
          },
          {
            "id": "section-3-q52-b",
            "label": "б",
            "text": "Только количество вершин"
          },
          {
            "id": "section-3-q52-v",
            "label": "в",
            "text": "Только отсортированные веса"
          },
          {
            "id": "section-3-q52-g",
            "label": "г",
            "text": "Только минимальный путь"
          }
        ],
        "correctOptionId": "section-3-q52-a",
        "explanation": "adjacency list компактно хранит связи, особенно в разреженных графах.",
        "sourceRefs": [
          "CP-Algorithms",
          "VisuAlgo: Graph"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q53",
        "sectionId": "section-3",
        "order": 53,
        "text": "Что хранит матрица смежности графа?",
        "options": [
          {
            "id": "section-3-q53-a",
            "label": "а",
            "text": "Таблицу `V x V`, где ячейка показывает наличие или вес ребра"
          },
          {
            "id": "section-3-q53-b",
            "label": "б",
            "text": "Только список посещенных вершин"
          },
          {
            "id": "section-3-q53-v",
            "label": "в",
            "text": "Только очередь BFS"
          },
          {
            "id": "section-3-q53-g",
            "label": "г",
            "text": "Только глубину DFS"
          }
        ],
        "correctOptionId": "section-3-q53-a",
        "explanation": "матрица позволяет быстро проверить наличие ребра между двумя вершинами.",
        "sourceRefs": [
          "CP-Algorithms",
          "VisuAlgo: Graph"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q54",
        "sectionId": "section-3",
        "order": 54,
        "text": "Какая память требуется матрице смежности для графа с V вершинами?",
        "options": [
          {
            "id": "section-3-q54-a",
            "label": "а",
            "text": "`O(V)`"
          },
          {
            "id": "section-3-q54-b",
            "label": "б",
            "text": "`O(E)`"
          },
          {
            "id": "section-3-q54-v",
            "label": "в",
            "text": "`O(V²)`"
          },
          {
            "id": "section-3-q54-g",
            "label": "г",
            "text": "`O(log V)`"
          }
        ],
        "correctOptionId": "section-3-q54-v",
        "explanation": "матрица хранит ячейку для каждой пары вершин.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q55",
        "sectionId": "section-3",
        "order": 55,
        "text": "Какая память требуется списку смежности?",
        "options": [
          {
            "id": "section-3-q55-a",
            "label": "а",
            "text": "`O(V + E)`"
          },
          {
            "id": "section-3-q55-b",
            "label": "б",
            "text": "`O(V²)`"
          },
          {
            "id": "section-3-q55-v",
            "label": "в",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q55-g",
            "label": "г",
            "text": "`O(E²)`"
          }
        ],
        "correctOptionId": "section-3-q55-a",
        "explanation": "хранятся вершины и фактически существующие ребра.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q56",
        "sectionId": "section-3",
        "order": 56,
        "text": "Для чего обычно применяют BFS в невзвешенном графе?",
        "options": [
          {
            "id": "section-3-q56-a",
            "label": "а",
            "text": "Для поиска кратчайшего пути по числу ребер"
          },
          {
            "id": "section-3-q56-b",
            "label": "б",
            "text": "Для сортировки массива"
          },
          {
            "id": "section-3-q56-v",
            "label": "в",
            "text": "Для разрешения коллизий"
          },
          {
            "id": "section-3-q56-g",
            "label": "г",
            "text": "Для вычисления хеша"
          }
        ],
        "correctOptionId": "section-3-q56-a",
        "explanation": "BFS обходит граф слоями, поэтому впервые достигнутая вершина имеет минимальное число ребер от старта.",
        "sourceRefs": [
          "общая информация.md",
          "VisuAlgo: BFS"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q57",
        "sectionId": "section-3",
        "order": 57,
        "text": "Что обычно хранит массив visited при обходе графа?",
        "options": [
          {
            "id": "section-3-q57-a",
            "label": "а",
            "text": "Информацию о том, была ли вершина уже посещена"
          },
          {
            "id": "section-3-q57-b",
            "label": "б",
            "text": "Отсортированные ребра"
          },
          {
            "id": "section-3-q57-v",
            "label": "в",
            "text": "Только веса ребер"
          },
          {
            "id": "section-3-q57-g",
            "label": "г",
            "text": "Размер очереди"
          }
        ],
        "correctOptionId": "section-3-q57-a",
        "explanation": "visited предотвращает повторный обход одних и тех же вершин и зацикливание.",
        "sourceRefs": [
          "VisuAlgo: Graph Traversal"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q58",
        "sectionId": "section-3",
        "order": 58,
        "text": "Для каких графов подходит классический алгоритм Дейкстры?",
        "options": [
          {
            "id": "section-3-q58-a",
            "label": "а",
            "text": "Для графов с неотрицательными весами ребер"
          },
          {
            "id": "section-3-q58-b",
            "label": "б",
            "text": "Для графов только с отрицательными весами"
          },
          {
            "id": "section-3-q58-v",
            "label": "в",
            "text": "Только для несвязных неориентированных графов без весов"
          },
          {
            "id": "section-3-q58-g",
            "label": "г",
            "text": "Только для деревьев"
          }
        ],
        "correctOptionId": "section-3-q58-a",
        "explanation": "отрицательные ребра нарушают жадное свойство выбора ближайшей непосещенной вершины.",
        "sourceRefs": [
          "общая информация.md",
          "CP-Algorithms: Dijkstra"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-3-q59",
        "sectionId": "section-3",
        "order": 59,
        "text": "Какую структуру данных часто используют для эффективной реализации Дейкстры?",
        "options": [
          {
            "id": "section-3-q59-a",
            "label": "а",
            "text": "Приоритетную очередь"
          },
          {
            "id": "section-3-q59-b",
            "label": "б",
            "text": "Стек"
          },
          {
            "id": "section-3-q59-v",
            "label": "в",
            "text": "Дек без приоритетов"
          },
          {
            "id": "section-3-q59-g",
            "label": "г",
            "text": "Строку"
          }
        ],
        "correctOptionId": "section-3-q59-a",
        "explanation": "нужно быстро извлекать вершину с минимальным текущим расстоянием.",
        "sourceRefs": [
          "CP-Algorithms: Dijkstra"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q60",
        "sectionId": "section-3",
        "order": 60,
        "text": "Что хранит массив расстояний в алгоритме Дейкстры?",
        "options": [
          {
            "id": "section-3-q60-a",
            "label": "а",
            "text": "Текущую лучшую известную длину пути от стартовой вершины"
          },
          {
            "id": "section-3-q60-b",
            "label": "б",
            "text": "Только номера ребер"
          },
          {
            "id": "section-3-q60-v",
            "label": "в",
            "text": "Только порядок сортировки"
          },
          {
            "id": "section-3-q60-g",
            "label": "г",
            "text": "Только глубину рекурсии"
          }
        ],
        "correctOptionId": "section-3-q60-a",
        "explanation": "алгоритм постепенно улучшает оценки кратчайших расстояний.",
        "sourceRefs": [
          "CP-Algorithms: Dijkstra"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q61",
        "sectionId": "section-3",
        "order": 61,
        "text": "Что такое релаксация ребра?",
        "options": [
          {
            "id": "section-3-q61-a",
            "label": "а",
            "text": "Попытка улучшить расстояние до вершины через данное ребро"
          },
          {
            "id": "section-3-q61-b",
            "label": "б",
            "text": "Удаление всех ребер графа"
          },
          {
            "id": "section-3-q61-v",
            "label": "в",
            "text": "Сортировка вершин по алфавиту"
          },
          {
            "id": "section-3-q61-g",
            "label": "г",
            "text": "Создание хеш-таблицы"
          }
        ],
        "correctOptionId": "section-3-q61-a",
        "explanation": "если путь через текущую вершину короче уже известного, расстояние обновляется.",
        "sourceRefs": [
          "CP-Algorithms: Shortest paths"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q62",
        "sectionId": "section-3",
        "order": 62,
        "text": "Какой алгоритм подходит для кратчайших путей при наличии отрицательных ребер без отрицательных циклов?",
        "options": [
          {
            "id": "section-3-q62-a",
            "label": "а",
            "text": "Беллмана-Форда"
          },
          {
            "id": "section-3-q62-b",
            "label": "б",
            "text": "Только бинарный поиск"
          },
          {
            "id": "section-3-q62-v",
            "label": "в",
            "text": "Сортировка выбором"
          },
          {
            "id": "section-3-q62-g",
            "label": "г",
            "text": "Хеширование"
          }
        ],
        "correctOptionId": "section-3-q62-a",
        "explanation": "алгоритм Беллмана-Форда корректно обрабатывает отрицательные веса, в отличие от классического Дейкстры.",
        "sourceRefs": [
          "CP-Algorithms: Bellman-Ford"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q63",
        "sectionId": "section-3",
        "order": 63,
        "text": "Что такое цикл в графе?",
        "options": [
          {
            "id": "section-3-q63-a",
            "label": "а",
            "text": "Путь, который начинается и заканчивается в одной вершине"
          },
          {
            "id": "section-3-q63-b",
            "label": "б",
            "text": "Ребро минимального веса"
          },
          {
            "id": "section-3-q63-v",
            "label": "в",
            "text": "Изолированная вершина"
          },
          {
            "id": "section-3-q63-g",
            "label": "г",
            "text": "Отсортированный список соседей"
          }
        ],
        "correctOptionId": "section-3-q63-a",
        "explanation": "цикл возвращается в исходную вершину по ребрам графа.",
        "sourceRefs": [
          "VisuAlgo: Graph"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q64",
        "sectionId": "section-3",
        "order": 64,
        "text": "Что такое связный неориентированный граф?",
        "options": [
          {
            "id": "section-3-q64-a",
            "label": "а",
            "text": "Из любой вершины можно добраться до любой другой"
          },
          {
            "id": "section-3-q64-b",
            "label": "б",
            "text": "В графе нет ребер"
          },
          {
            "id": "section-3-q64-v",
            "label": "в",
            "text": "Все ребра имеют отрицательные веса"
          },
          {
            "id": "section-3-q64-g",
            "label": "г",
            "text": "В графе ровно одна вершина"
          }
        ],
        "correctOptionId": "section-3-q64-a",
        "explanation": "связность означает наличие пути между любой парой вершин.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q65",
        "sectionId": "section-3",
        "order": 65,
        "text": "Что такое дерево как частный случай графа?",
        "options": [
          {
            "id": "section-3-q65-a",
            "label": "а",
            "text": "Связный ациклический граф"
          },
          {
            "id": "section-3-q65-b",
            "label": "б",
            "text": "Любой граф с циклами"
          },
          {
            "id": "section-3-q65-v",
            "label": "в",
            "text": "Полный ориентированный граф"
          },
          {
            "id": "section-3-q65-g",
            "label": "г",
            "text": "Граф без вершин"
          }
        ],
        "correctOptionId": "section-3-q65-a",
        "explanation": "дерево не содержит циклов и имеет единственный простой путь между любыми двумя вершинами.",
        "sourceRefs": [
          "CP-Algorithms",
          "VisuAlgo: Graph"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q66",
        "sectionId": "section-3",
        "order": 66,
        "text": "Сколько ребер в дереве с n вершинами?",
        "options": [
          {
            "id": "section-3-q66-a",
            "label": "а",
            "text": "`n - 1`"
          },
          {
            "id": "section-3-q66-b",
            "label": "б",
            "text": "`n`"
          },
          {
            "id": "section-3-q66-v",
            "label": "в",
            "text": "`n + 1`"
          },
          {
            "id": "section-3-q66-g",
            "label": "г",
            "text": "`n²`"
          }
        ],
        "correctOptionId": "section-3-q66-a",
        "explanation": "связный ациклический граф с n вершинами всегда содержит n - 1 ребер.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q67",
        "sectionId": "section-3",
        "order": 67,
        "text": "Как работает сортировка вставками?",
        "options": [
          {
            "id": "section-3-q67-a",
            "label": "а",
            "text": "Берет очередной элемент и вставляет его в правильное место среди уже отсортированных"
          },
          {
            "id": "section-3-q67-b",
            "label": "б",
            "text": "Всегда делит массив пополам"
          },
          {
            "id": "section-3-q67-v",
            "label": "в",
            "text": "Выбирает случайный pivot и рекурсивно сортирует части"
          },
          {
            "id": "section-3-q67-g",
            "label": "г",
            "text": "Использует хеш-таблицу для всех элементов"
          }
        ],
        "correctOptionId": "section-3-q67-a",
        "explanation": "insertion sort постепенно расширяет отсортированную часть массива.",
        "sourceRefs": [
          "VisuAlgo: Sorting"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q68",
        "sectionId": "section-3",
        "order": 68,
        "text": "Какова худшая временная сложность сортировки вставками?",
        "options": [
          {
            "id": "section-3-q68-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q68-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q68-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q68-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q68-g",
        "explanation": "в худшем случае каждый элемент приходится сдвигать через почти всю отсортированную часть.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q69",
        "sectionId": "section-3",
        "order": 69,
        "text": "Какова лучшая временная сложность сортировки вставками на уже отсортированном массиве?",
        "options": [
          {
            "id": "section-3-q69-a",
            "label": "а",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q69-b",
            "label": "б",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q69-v",
            "label": "в",
            "text": "`O(n²)`"
          },
          {
            "id": "section-3-q69-g",
            "label": "г",
            "text": "`O(2^n)`"
          }
        ],
        "correctOptionId": "section-3-q69-a",
        "explanation": "если массив уже отсортирован, каждый элемент проверяется без длинных сдвигов.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q70",
        "sectionId": "section-3",
        "order": 70,
        "text": "Как работает быстрая сортировка?",
        "options": [
          {
            "id": "section-3-q70-a",
            "label": "а",
            "text": "Выбирает опорный элемент и разделяет массив на элементы меньше и больше него"
          },
          {
            "id": "section-3-q70-b",
            "label": "б",
            "text": "Каждый раз выбирает минимальный элемент"
          },
          {
            "id": "section-3-q70-v",
            "label": "в",
            "text": "Сравнивает только соседние элементы до полного порядка"
          },
          {
            "id": "section-3-q70-g",
            "label": "г",
            "text": "Строит матрицу смежности"
          }
        ],
        "correctOptionId": "section-3-q70-a",
        "explanation": "quicksort использует partition вокруг pivot и рекурсивно сортирует части.",
        "sourceRefs": [
          "VisuAlgo: Quick Sort"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q71",
        "sectionId": "section-3",
        "order": 71,
        "text": "Какова средняя сложность quicksort?",
        "options": [
          {
            "id": "section-3-q71-a",
            "label": "а",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q71-b",
            "label": "б",
            "text": "`O(n²)`"
          },
          {
            "id": "section-3-q71-v",
            "label": "в",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q71-g",
            "label": "г",
            "text": "`O(1)`"
          }
        ],
        "correctOptionId": "section-3-q71-a",
        "explanation": "при хороших разбиениях глубина рекурсии логарифмическая, а на каждом уровне обрабатываются все элементы.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q72",
        "sectionId": "section-3",
        "order": 72,
        "text": "Какова худшая сложность quicksort?",
        "options": [
          {
            "id": "section-3-q72-a",
            "label": "а",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q72-b",
            "label": "б",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q72-v",
            "label": "в",
            "text": "`O(n²)`"
          },
          {
            "id": "section-3-q72-g",
            "label": "г",
            "text": "`O(log n)`"
          }
        ],
        "correctOptionId": "section-3-q72-v",
        "explanation": "худший случай возникает при крайне неравномерных разбиениях.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q73",
        "sectionId": "section-3",
        "order": 73,
        "text": "Как работает сортировка слиянием?",
        "options": [
          {
            "id": "section-3-q73-a",
            "label": "а",
            "text": "Делит массив на части, сортирует их и сливает отсортированные части"
          },
          {
            "id": "section-3-q73-b",
            "label": "б",
            "text": "Переставляет только соседние элементы"
          },
          {
            "id": "section-3-q73-v",
            "label": "в",
            "text": "Использует хеш-функцию"
          },
          {
            "id": "section-3-q73-g",
            "label": "г",
            "text": "Обходит граф в ширину"
          }
        ],
        "correctOptionId": "section-3-q73-a",
        "explanation": "merge sort следует стратегии \"разделяй и властвуй\".",
        "sourceRefs": [
          "VisuAlgo: Merge Sort"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q74",
        "sectionId": "section-3",
        "order": 74,
        "text": "Какова временная сложность merge sort в худшем случае?",
        "options": [
          {
            "id": "section-3-q74-a",
            "label": "а",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q74-b",
            "label": "б",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q74-v",
            "label": "в",
            "text": "`O(n²)`"
          },
          {
            "id": "section-3-q74-g",
            "label": "г",
            "text": "`O(1)`"
          }
        ],
        "correctOptionId": "section-3-q74-b",
        "explanation": "массив делится на логарифмическое число уровней, на каждом уровне выполняется линейное слияние.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q75",
        "sectionId": "section-3",
        "order": 75,
        "text": "Какая сортировка обычно является устойчивой при стандартной реализации?",
        "options": [
          {
            "id": "section-3-q75-a",
            "label": "а",
            "text": "Сортировка слиянием"
          },
          {
            "id": "section-3-q75-b",
            "label": "б",
            "text": "Сортировка выбором"
          },
          {
            "id": "section-3-q75-v",
            "label": "в",
            "text": "Быстрая сортировка"
          },
          {
            "id": "section-3-q75-g",
            "label": "г",
            "text": "Пирамидальная сортировка"
          }
        ],
        "correctOptionId": "section-3-q75-a",
        "explanation": "merge sort может сохранять относительный порядок равных элементов при корректном слиянии.",
        "sourceRefs": [
          "VisuAlgo: Sorting"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q76",
        "sectionId": "section-3",
        "order": 76,
        "text": "Что означает устойчивость сортировки?",
        "options": [
          {
            "id": "section-3-q76-a",
            "label": "а",
            "text": "Равные элементы сохраняют исходный относительный порядок"
          },
          {
            "id": "section-3-q76-b",
            "label": "б",
            "text": "Алгоритм никогда не использует память"
          },
          {
            "id": "section-3-q76-v",
            "label": "в",
            "text": "Алгоритм всегда работает за `O(1)`"
          },
          {
            "id": "section-3-q76-g",
            "label": "г",
            "text": "Сортировка не меняет массив"
          }
        ],
        "correctOptionId": "section-3-q76-a",
        "explanation": "это важно при сортировке записей по нескольким ключам.",
        "sourceRefs": [
          "VisuAlgo: Sorting"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q77",
        "sectionId": "section-3",
        "order": 77,
        "text": "Что означает \"in-place\" сортировка?",
        "options": [
          {
            "id": "section-3-q77-a",
            "label": "а",
            "text": "Сортировка использует `O(1)` или малую дополнительную память"
          },
          {
            "id": "section-3-q77-b",
            "label": "б",
            "text": "Сортировка всегда устойчива"
          },
          {
            "id": "section-3-q77-v",
            "label": "в",
            "text": "Сортировка требует отдельную копию всего массива"
          },
          {
            "id": "section-3-q77-g",
            "label": "г",
            "text": "Сортировка работает только для строк"
          }
        ],
        "correctOptionId": "section-3-q77-a",
        "explanation": "in-place алгоритм в основном переставляет элементы внутри исходной структуры.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q78",
        "sectionId": "section-3",
        "order": 78,
        "text": "Какая сортировка обычно НЕ является эффективной для больших массивов из-за O(n²)?",
        "options": [
          {
            "id": "section-3-q78-a",
            "label": "а",
            "text": "Сортировка пузырьком"
          },
          {
            "id": "section-3-q78-b",
            "label": "б",
            "text": "Сортировка слиянием"
          },
          {
            "id": "section-3-q78-v",
            "label": "в",
            "text": "Быстрая сортировка в среднем случае"
          },
          {
            "id": "section-3-q78-g",
            "label": "г",
            "text": "Пирамидальная сортировка"
          }
        ],
        "correctOptionId": "section-3-q78-a",
        "explanation": "bubble sort прост, но выполняет много сравнений и обменов.",
        "sourceRefs": [
          "VisuAlgo: Bubble Sort"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q79",
        "sectionId": "section-3",
        "order": 79,
        "text": "Что такое массив?",
        "options": [
          {
            "id": "section-3-q79-a",
            "label": "а",
            "text": "Последовательная структура данных с доступом по индексу"
          },
          {
            "id": "section-3-q79-b",
            "label": "б",
            "text": "Граф с весами"
          },
          {
            "id": "section-3-q79-v",
            "label": "в",
            "text": "Дерево без корня"
          },
          {
            "id": "section-3-q79-g",
            "label": "г",
            "text": "Хеш-функция"
          }
        ],
        "correctOptionId": "section-3-q79-a",
        "explanation": "массив хранит элементы в упорядоченных позициях и позволяет обращаться по индексу.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q80",
        "sectionId": "section-3",
        "order": 80,
        "text": "Какова сложность доступа к элементу массива по индексу?",
        "options": [
          {
            "id": "section-3-q80-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q80-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q80-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q80-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q80-a",
        "explanation": "адрес элемента вычисляется напрямую по индексу.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q81",
        "sectionId": "section-3",
        "order": 81,
        "text": "Какова сложность вставки элемента в начало обычного массива?",
        "options": [
          {
            "id": "section-3-q81-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q81-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q81-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q81-g",
            "label": "г",
            "text": "`O(n log n)`"
          }
        ],
        "correctOptionId": "section-3-q81-v",
        "explanation": "нужно сдвинуть существующие элементы вправо.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q82",
        "sectionId": "section-3",
        "order": 82,
        "text": "В чем преимущество связного списка перед массивом?",
        "options": [
          {
            "id": "section-3-q82-a",
            "label": "а",
            "text": "Быстрая вставка/удаление узла при наличии ссылки на него"
          },
          {
            "id": "section-3-q82-b",
            "label": "б",
            "text": "Мгновенный доступ по индексу"
          },
          {
            "id": "section-3-q82-v",
            "label": "в",
            "text": "Всегда меньше памяти"
          },
          {
            "id": "section-3-q82-g",
            "label": "г",
            "text": "Автоматическая сортировка"
          }
        ],
        "correctOptionId": "section-3-q82-a",
        "explanation": "связный список не требует сдвига всех последующих элементов.",
        "sourceRefs": [
          "VisuAlgo: Linked List"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q83",
        "sectionId": "section-3",
        "order": 83,
        "text": "Какова сложность доступа к i-му элементу односвязного списка?",
        "options": [
          {
            "id": "section-3-q83-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q83-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q83-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q83-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q83-v",
        "explanation": "нужно пройти по ссылкам от начала списка до нужного узла.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q84",
        "sectionId": "section-3",
        "order": 84,
        "text": "Что хранит узел односвязного списка?",
        "options": [
          {
            "id": "section-3-q84-a",
            "label": "а",
            "text": "Значение и ссылку на следующий узел"
          },
          {
            "id": "section-3-q84-b",
            "label": "б",
            "text": "Только индекс в массиве"
          },
          {
            "id": "section-3-q84-v",
            "label": "в",
            "text": "Значение и все предыдущие значения"
          },
          {
            "id": "section-3-q84-g",
            "label": "г",
            "text": "Матрицу смежности"
          }
        ],
        "correctOptionId": "section-3-q84-a",
        "explanation": "односвязный список связывает узлы указателями на следующий элемент.",
        "sourceRefs": [
          "VisuAlgo: Linked List"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q85",
        "sectionId": "section-3",
        "order": 85,
        "text": "Что такое асимптотическая сложность?",
        "options": [
          {
            "id": "section-3-q85-a",
            "label": "а",
            "text": "Оценка роста ресурсов алгоритма при увеличении размера входа"
          },
          {
            "id": "section-3-q85-b",
            "label": "б",
            "text": "Точное время работы в секундах"
          },
          {
            "id": "section-3-q85-v",
            "label": "в",
            "text": "Количество строк кода"
          },
          {
            "id": "section-3-q85-g",
            "label": "г",
            "text": "Тип данных результата"
          }
        ],
        "correctOptionId": "section-3-q85-a",
        "explanation": "асимптотика описывает поведение алгоритма при больших n, абстрагируясь от конкретного железа.",
        "sourceRefs": [
          "общая информация.md",
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q86",
        "sectionId": "section-3",
        "order": 86,
        "text": "Что обычно игнорируется в Big-O записи?",
        "options": [
          {
            "id": "section-3-q86-a",
            "label": "а",
            "text": "Константные множители и младшие члены"
          },
          {
            "id": "section-3-q86-b",
            "label": "б",
            "text": "Все циклы"
          },
          {
            "id": "section-3-q86-v",
            "label": "в",
            "text": "Все ошибки алгоритма"
          },
          {
            "id": "section-3-q86-g",
            "label": "г",
            "text": "Размер входных данных"
          }
        ],
        "correctOptionId": "section-3-q86-a",
        "explanation": "Big-O показывает главный порядок роста, например 3n + 10 записывают как O(n).",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q87",
        "sectionId": "section-3",
        "order": 87,
        "text": "Какая сложность быстрее растет при больших n: O(n) или O(n log n)?",
        "options": [
          {
            "id": "section-3-q87-a",
            "label": "а",
            "text": "`O(n log n)` растет быстрее"
          },
          {
            "id": "section-3-q87-b",
            "label": "б",
            "text": "`O(n)` растет быстрее"
          },
          {
            "id": "section-3-q87-v",
            "label": "в",
            "text": "Они всегда равны"
          },
          {
            "id": "section-3-q87-g",
            "label": "г",
            "text": "Сравнить невозможно"
          }
        ],
        "correctOptionId": "section-3-q87-a",
        "explanation": "множитель log n дополнительно увеличивает число операций относительно линейного роста.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q88",
        "sectionId": "section-3",
        "order": 88,
        "text": "Какая сложность обычно хуже: O(n²) или O(n log n)?",
        "options": [
          {
            "id": "section-3-q88-a",
            "label": "а",
            "text": "`O(n²)`"
          },
          {
            "id": "section-3-q88-b",
            "label": "б",
            "text": "`O(n log n)`"
          },
          {
            "id": "section-3-q88-v",
            "label": "в",
            "text": "Они всегда одинаковы"
          },
          {
            "id": "section-3-q88-g",
            "label": "г",
            "text": "`O(n log n)` хуже только для `n = 1`"
          }
        ],
        "correctOptionId": "section-3-q88-a",
        "explanation": "квадратичный рост быстрее становится слишком большим при увеличении n.",
        "sourceRefs": [
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet"
        ]
      },
      {
        "id": "section-3-q89",
        "sectionId": "section-3",
        "order": 89,
        "text": "Что такое полный граф?",
        "options": [
          {
            "id": "section-3-q89-a",
            "label": "а",
            "text": "Граф, в котором каждая пара различных вершин соединена ребром"
          },
          {
            "id": "section-3-q89-b",
            "label": "б",
            "text": "Граф без ребер"
          },
          {
            "id": "section-3-q89-v",
            "label": "в",
            "text": "Дерево с одним листом"
          },
          {
            "id": "section-3-q89-g",
            "label": "г",
            "text": "Граф только с отрицательными весами"
          }
        ],
        "correctOptionId": "section-3-q89-a",
        "explanation": "в полном графе присутствуют все возможные ребра между вершинами.",
        "sourceRefs": [
          "VisuAlgo: Graph"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q90",
        "sectionId": "section-3",
        "order": 90,
        "text": "Что такое разреженный граф?",
        "options": [
          {
            "id": "section-3-q90-a",
            "label": "а",
            "text": "Граф, в котором ребер существенно меньше, чем максимально возможно"
          },
          {
            "id": "section-3-q90-b",
            "label": "б",
            "text": "Граф, где каждая вершина соединена со всеми"
          },
          {
            "id": "section-3-q90-v",
            "label": "в",
            "text": "Граф без вершин"
          },
          {
            "id": "section-3-q90-g",
            "label": "г",
            "text": "Граф только с петлями"
          }
        ],
        "correctOptionId": "section-3-q90-a",
        "explanation": "для разреженных графов обычно выгоднее список смежности.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q91",
        "sectionId": "section-3",
        "order": 91,
        "text": "Что такое плотный граф?",
        "options": [
          {
            "id": "section-3-q91-a",
            "label": "а",
            "text": "Граф с числом ребер, близким к максимально возможному"
          },
          {
            "id": "section-3-q91-b",
            "label": "б",
            "text": "Граф с одной вершиной"
          },
          {
            "id": "section-3-q91-v",
            "label": "в",
            "text": "Граф без циклов"
          },
          {
            "id": "section-3-q91-g",
            "label": "г",
            "text": "Только дерево"
          }
        ],
        "correctOptionId": "section-3-q91-a",
        "explanation": "в плотном графе многие пары вершин соединены ребрами.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q92",
        "sectionId": "section-3",
        "order": 92,
        "text": "Что такое топологическая сортировка?",
        "options": [
          {
            "id": "section-3-q92-a",
            "label": "а",
            "text": "Линейный порядок вершин DAG, где каждое ребро идет слева направо"
          },
          {
            "id": "section-3-q92-b",
            "label": "б",
            "text": "Сортировка массива пузырьком"
          },
          {
            "id": "section-3-q92-v",
            "label": "в",
            "text": "Поиск минимального элемента"
          },
          {
            "id": "section-3-q92-g",
            "label": "г",
            "text": "Хеширование строк"
          }
        ],
        "correctOptionId": "section-3-q92-a",
        "explanation": "топологический порядок существует для ориентированных ациклических графов.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q93",
        "sectionId": "section-3",
        "order": 93,
        "text": "Для какого графа возможна топологическая сортировка?",
        "options": [
          {
            "id": "section-3-q93-a",
            "label": "а",
            "text": "Для ориентированного ациклического графа"
          },
          {
            "id": "section-3-q93-b",
            "label": "б",
            "text": "Для любого графа с отрицательными весами"
          },
          {
            "id": "section-3-q93-v",
            "label": "в",
            "text": "Только для полного неориентированного графа"
          },
          {
            "id": "section-3-q93-g",
            "label": "г",
            "text": "Только для хеш-таблицы"
          }
        ],
        "correctOptionId": "section-3-q93-a",
        "explanation": "цикл создает противоречие в линейном порядке зависимостей.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q94",
        "sectionId": "section-3",
        "order": 94,
        "text": "Какой алгоритм можно использовать для топологической сортировки?",
        "options": [
          {
            "id": "section-3-q94-a",
            "label": "а",
            "text": "DFS"
          },
          {
            "id": "section-3-q94-b",
            "label": "б",
            "text": "Сортировка пузырьком"
          },
          {
            "id": "section-3-q94-v",
            "label": "в",
            "text": "Линейный поиск"
          },
          {
            "id": "section-3-q94-g",
            "label": "г",
            "text": "Метод цепочек"
          }
        ],
        "correctOptionId": "section-3-q94-a",
        "explanation": "DFS может добавлять вершины в порядок после обработки всех исходящих ребер.",
        "sourceRefs": [
          "CP-Algorithms"
        ],
        "materialIds": [
          "mat-section-3-cp-algorithms"
        ]
      },
      {
        "id": "section-3-q95",
        "sectionId": "section-3",
        "order": 95,
        "text": "Что такое очередь с приоритетом?",
        "options": [
          {
            "id": "section-3-q95-a",
            "label": "а",
            "text": "Структура, где извлекается элемент с лучшим приоритетом, а не самый старый"
          },
          {
            "id": "section-3-q95-b",
            "label": "б",
            "text": "Очередь, где нельзя удалять элементы"
          },
          {
            "id": "section-3-q95-v",
            "label": "в",
            "text": "Массив только из строк"
          },
          {
            "id": "section-3-q95-g",
            "label": "г",
            "text": "Граф без весов"
          }
        ],
        "correctOptionId": "section-3-q95-a",
        "explanation": "приоритетная очередь обычно реализуется через кучу.",
        "sourceRefs": [
          "VisuAlgo: Binary Heap"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q96",
        "sectionId": "section-3",
        "order": 96,
        "text": "Что такое минимальная куча?",
        "options": [
          {
            "id": "section-3-q96-a",
            "label": "а",
            "text": "Куча, где каждый родитель не больше своих детей"
          },
          {
            "id": "section-3-q96-b",
            "label": "б",
            "text": "Куча, где каждый родитель больше всех потомков"
          },
          {
            "id": "section-3-q96-v",
            "label": "в",
            "text": "Любой отсортированный массив"
          },
          {
            "id": "section-3-q96-g",
            "label": "г",
            "text": "Очередь FIFO"
          }
        ],
        "correctOptionId": "section-3-q96-a",
        "explanation": "поэтому минимум находится в корне min-heap.",
        "sourceRefs": [
          "VisuAlgo: Binary Heap"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q97",
        "sectionId": "section-3",
        "order": 97,
        "text": "Какова сложность извлечения минимума из бинарной кучи?",
        "options": [
          {
            "id": "section-3-q97-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q97-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q97-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q97-g",
            "label": "г",
            "text": "`O(n²)`"
          }
        ],
        "correctOptionId": "section-3-q97-b",
        "explanation": "после удаления корня нужно восстановить свойство кучи по пути высоты log n.",
        "sourceRefs": [
          "Big-O Cheat Sheet",
          "VisuAlgo"
        ],
        "materialIds": [
          "mat-section-3-big-o-cheat-sheet",
          "mat-section-3-visualgo"
        ]
      },
      {
        "id": "section-3-q98",
        "sectionId": "section-3",
        "order": 98,
        "text": "Какова сложность получения минимума в min-heap без удаления?",
        "options": [
          {
            "id": "section-3-q98-a",
            "label": "а",
            "text": "`O(1)`"
          },
          {
            "id": "section-3-q98-b",
            "label": "б",
            "text": "`O(log n)`"
          },
          {
            "id": "section-3-q98-v",
            "label": "в",
            "text": "`O(n)`"
          },
          {
            "id": "section-3-q98-g",
            "label": "г",
            "text": "`O(n log n)`"
          }
        ],
        "correctOptionId": "section-3-q98-a",
        "explanation": "минимум хранится в корне кучи.",
        "sourceRefs": [
          "VisuAlgo: Binary Heap"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q99",
        "sectionId": "section-3",
        "order": 99,
        "text": "Что такое проверка скобочной последовательности с помощью стека?",
        "options": [
          {
            "id": "section-3-q99-a",
            "label": "а",
            "text": "Открывающие скобки кладутся в стек, закрывающие сверяются с вершиной"
          },
          {
            "id": "section-3-q99-b",
            "label": "б",
            "text": "Все символы сортируются"
          },
          {
            "id": "section-3-q99-v",
            "label": "в",
            "text": "Каждая скобка хешируется и удаляется"
          },
          {
            "id": "section-3-q99-g",
            "label": "г",
            "text": "Используется только бинарный поиск"
          }
        ],
        "correctOptionId": "section-3-q99-a",
        "explanation": "стек хранит последние еще не закрытые открывающие скобки, что соответствует вложенности.",
        "sourceRefs": [
          "VisuAlgo: Stack"
        ],
        "materialIds": []
      },
      {
        "id": "section-3-q100",
        "sectionId": "section-3",
        "order": 100,
        "text": "Какой алгоритм лучше подходит для поиска минимального числа в последовательности?",
        "options": [
          {
            "id": "section-3-q100-a",
            "label": "а",
            "text": "Один линейный проход с хранением текущего минимума"
          },
          {
            "id": "section-3-q100-b",
            "label": "б",
            "text": "Полная сортировка всегда обязательна"
          },
          {
            "id": "section-3-q100-v",
            "label": "в",
            "text": "Бинарный поиск без сортировки"
          },
          {
            "id": "section-3-q100-g",
            "label": "г",
            "text": "Алгоритм Дейкстры"
          }
        ],
        "correctOptionId": "section-3-q100-a",
        "explanation": "минимум можно найти за O(n) и O(1) дополнительной памяти, не сортируя всю последовательность.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Big-O Cheat Sheet"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-3-big-o-cheat-sheet"
        ]
      }
    ]
  },
  {
    "id": "section-4",
    "title": "Тема 4. SQL и базы данных: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_4_sql_и_базы_данных_100_тестовых_вопросов.md.",
    "order": 4,
    "questions": [
      {
        "id": "section-4-q1",
        "sectionId": "section-4",
        "order": 1,
        "text": "Что такое реляционные базы данных?",
        "options": [
          {
            "id": "section-4-q1-a",
            "label": "а",
            "text": "База данных, в которой информация хранится в виде двумерных таблиц, связанных между собой"
          },
          {
            "id": "section-4-q1-b",
            "label": "б",
            "text": "База данных, в которой одна ни с чем не связанная таблица"
          },
          {
            "id": "section-4-q1-v",
            "label": "в",
            "text": "Любая база данных - реляционная"
          },
          {
            "id": "section-4-q1-g",
            "label": "г",
            "text": "Совокупность данных, не связанных между собой"
          }
        ],
        "correctOptionId": "section-4-q1-a",
        "explanation": "реляционная модель представляет данные как таблицы и связи между ними.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL Documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q2",
        "sectionId": "section-4",
        "order": 2,
        "text": "Как выглядит запрос для вывода всех значений из таблицы Orders?",
        "options": [
          {
            "id": "section-4-q2-a",
            "label": "а",
            "text": "`SELECT ALL FROM Orders;`"
          },
          {
            "id": "section-4-q2-b",
            "label": "б",
            "text": "`SELECT % FROM Orders;`"
          },
          {
            "id": "section-4-q2-v",
            "label": "в",
            "text": "`SELECT * FROM Orders;`"
          },
          {
            "id": "section-4-q2-g",
            "label": "г",
            "text": "`SELECT *.Orders FROM Orders;`"
          }
        ],
        "correctOptionId": "section-4-q2-v",
        "explanation": "* в списке выбора означает все столбцы таблицы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q3",
        "sectionId": "section-4",
        "order": 3,
        "text": "Какие данные вернет запрос SELECT id, date, customer_name FROM Orders;?",
        "options": [
          {
            "id": "section-4-q3-a",
            "label": "а",
            "text": "Номера, даты всех заказов и имена заказчиков без гарантированной сортировки"
          },
          {
            "id": "section-4-q3-b",
            "label": "б",
            "text": "Никакие, запрос составлен неверно"
          },
          {
            "id": "section-4-q3-v",
            "label": "в",
            "text": "Данные, отсортированные по первой колонке"
          },
          {
            "id": "section-4-q3-g",
            "label": "г",
            "text": "Данные, отсортированные по всем колонкам, содержащим слово `Order`"
          }
        ],
        "correctOptionId": "section-4-q3-a",
        "explanation": "без ORDER BY SQL не гарантирует порядок строк.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q4",
        "sectionId": "section-4",
        "order": 4,
        "text": "Есть ли ошибка в запросе SELECT id, date, customer_name FROM Orders WHERE customer_name = Mike;?",
        "options": [
          {
            "id": "section-4-q4-a",
            "label": "а",
            "text": "Запрос составлен правильно"
          },
          {
            "id": "section-4-q4-b",
            "label": "б",
            "text": "`Mike` необходимо записать в кавычках `'Mike'`"
          },
          {
            "id": "section-4-q4-v",
            "label": "в",
            "text": "Нужно убрать лишние поля из запроса"
          },
          {
            "id": "section-4-q4-g",
            "label": "г",
            "text": "Строку с `WHERE` нужно поменять местами с `FROM`"
          }
        ],
        "correctOptionId": "section-4-q4-b",
        "explanation": "строковые литералы в SQL записываются в одинарных кавычках.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: lexical structure"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q5",
        "sectionId": "section-4",
        "order": 5,
        "text": "Что покажет запрос SELECT * FROM Orders WHERE date BETWEEN '2017-01-01' AND '2017-12-31';?",
        "options": [
          {
            "id": "section-4-q5-a",
            "label": "а",
            "text": "Все заказы за 2017 год, кроме 1 января"
          },
          {
            "id": "section-4-q5-b",
            "label": "б",
            "text": "Все заказы за 2017 год, кроме 31 декабря"
          },
          {
            "id": "section-4-q5-v",
            "label": "в",
            "text": "Все заказы за 2017 год"
          },
          {
            "id": "section-4-q5-g",
            "label": "г",
            "text": "Ничего, запрос составлен неверно"
          }
        ],
        "correctOptionId": "section-4-q5-v",
        "explanation": "BETWEEN включает обе границы диапазона.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: comparison functions"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q6",
        "sectionId": "section-4",
        "order": 6,
        "text": "Какой запрос может получить пользователей, в email которых содержится более двух точек?",
        "options": [
          {
            "id": "section-4-q6-a",
            "label": "а",
            "text": "`SELECT * FROM users WHERE \".\" IN email MATCHES > 2;`"
          },
          {
            "id": "section-4-q6-b",
            "label": "б",
            "text": "`SELECT * FROM users WHERE email LIKE \"%.%.%.%\";`"
          },
          {
            "id": "section-4-q6-v",
            "label": "в",
            "text": "`SELECT * FROM users WHERE email COUNT(\".\") > 2;`"
          }
        ],
        "correctOptionId": "section-4-q6-b",
        "explanation": "шаблон с тремя точками через LIKE ищет строки, где встречается минимум три точки. В некоторых СУБД для строковых литералов нужны одинарные кавычки: '%.%.%.%'.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "SQLBolt",
          "PostgreSQL: pattern matching"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-4-sqlbolt"
        ]
      },
      {
        "id": "section-4-q7",
        "sectionId": "section-4",
        "order": 7,
        "text": "Какой механизм в реляционных СУБД обеспечивает согласованность данных в связанных таблицах?",
        "options": [
          {
            "id": "section-4-q7-a",
            "label": "а",
            "text": "Первичный ключ"
          },
          {
            "id": "section-4-q7-b",
            "label": "б",
            "text": "Внешний ключ"
          },
          {
            "id": "section-4-q7-v",
            "label": "в",
            "text": "Кластерный индекс"
          },
          {
            "id": "section-4-q7-g",
            "label": "г",
            "text": "Псевдоним таблицы"
          }
        ],
        "correctOptionId": "section-4-q7-b",
        "explanation": "внешний ключ задает ссылочную целостность между таблицами.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: Foreign Keys"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q8",
        "sectionId": "section-4",
        "order": 8,
        "text": "Какой оператор позволяет объединить строки с одинаковыми значениями в заданных полях?",
        "options": [
          {
            "id": "section-4-q8-a",
            "label": "а",
            "text": "`ORDER BY`"
          },
          {
            "id": "section-4-q8-b",
            "label": "б",
            "text": "`WHERE`"
          },
          {
            "id": "section-4-q8-v",
            "label": "в",
            "text": "`GROUP BY`"
          },
          {
            "id": "section-4-q8-g",
            "label": "г",
            "text": "`FROM`"
          }
        ],
        "correctOptionId": "section-4-q8-v",
        "explanation": "GROUP BY группирует строки для агрегатных вычислений.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q9",
        "sectionId": "section-4",
        "order": 9,
        "text": "Какой JOIN вернет строки, для которых в обеих таблицах выполняется условие соединения?",
        "options": [
          {
            "id": "section-4-q9-a",
            "label": "а",
            "text": "`LEFT JOIN`"
          },
          {
            "id": "section-4-q9-b",
            "label": "б",
            "text": "`FULL JOIN`"
          },
          {
            "id": "section-4-q9-v",
            "label": "в",
            "text": "`RIGHT JOIN`"
          },
          {
            "id": "section-4-q9-g",
            "label": "г",
            "text": "`INNER JOIN`"
          }
        ],
        "correctOptionId": "section-4-q9-g",
        "explanation": "INNER JOIN оставляет только совпавшие пары строк.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "SQLBolt: JOIN"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q10",
        "sectionId": "section-4",
        "order": 10,
        "text": "Какой инструмент SQL позволяет получить результат обработки строк и подставить его в текущую строку как новый столбец?",
        "options": [
          {
            "id": "section-4-q10-a",
            "label": "а",
            "text": "`GROUP BY`"
          },
          {
            "id": "section-4-q10-b",
            "label": "б",
            "text": "JOIN"
          },
          {
            "id": "section-4-q10-v",
            "label": "в",
            "text": "Оконные функции"
          },
          {
            "id": "section-4-q10-g",
            "label": "г",
            "text": "`WHERE`"
          }
        ],
        "correctOptionId": "section-4-q10-v",
        "explanation": "оконные функции вычисляют значения по окну строк, не схлопывая результат как GROUP BY.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: Window Functions"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q11",
        "sectionId": "section-4",
        "order": 11,
        "text": "Какой оператор возвращает уникальные строки, выводимые левым и правым входными запросами?",
        "options": [
          {
            "id": "section-4-q11-a",
            "label": "а",
            "text": "`UNION`"
          },
          {
            "id": "section-4-q11-b",
            "label": "б",
            "text": "`EXCEPT`"
          },
          {
            "id": "section-4-q11-v",
            "label": "в",
            "text": "`INTERSECT`"
          },
          {
            "id": "section-4-q11-g",
            "label": "г",
            "text": "`JOIN`"
          }
        ],
        "correctOptionId": "section-4-q11-a",
        "explanation": "UNION объединяет результаты двух запросов и по умолчанию удаляет дубликаты.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q12",
        "sectionId": "section-4",
        "order": 12,
        "text": "Что такое CTE?",
        "options": [
          {
            "id": "section-4-q12-a",
            "label": "а",
            "text": "Хранимая процедура"
          },
          {
            "id": "section-4-q12-b",
            "label": "б",
            "text": "Временная таблица в базе данных"
          },
          {
            "id": "section-4-q12-v",
            "label": "в",
            "text": "Именованный временный набор данных, определённый с помощью `WITH` и доступный в пределах одного запроса"
          },
          {
            "id": "section-4-q12-g",
            "label": "г",
            "text": "Индекс для оптимизации"
          }
        ],
        "correctOptionId": "section-4-q12-v",
        "explanation": "CTE задается в WITH и используется внутри одного SQL-запроса.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q13",
        "sectionId": "section-4",
        "order": 13,
        "text": "Что делает функция COALESCE()?",
        "options": [
          {
            "id": "section-4-q13-a",
            "label": "а",
            "text": "Возвращает первое не-`NULL` значение из списка аргументов"
          },
          {
            "id": "section-4-q13-b",
            "label": "б",
            "text": "Проверяет наличие дубликатов"
          },
          {
            "id": "section-4-q13-v",
            "label": "в",
            "text": "Объединяет строки"
          },
          {
            "id": "section-4-q13-g",
            "label": "г",
            "text": "Преобразует типы данных"
          }
        ],
        "correctOptionId": "section-4-q13-a",
        "explanation": "COALESCE(phone, 'Нет контактов') вернет phone, если он не NULL, иначе запасное значение.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: conditional expressions"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q14",
        "sectionId": "section-4",
        "order": 14,
        "text": "Что произойдет, если выполнить JOIN двух таблиц без условия ON?",
        "options": [
          {
            "id": "section-4-q14-a",
            "label": "а",
            "text": "SQL вернет пустой результат"
          },
          {
            "id": "section-4-q14-b",
            "label": "б",
            "text": "SQL вернет декартово произведение"
          },
          {
            "id": "section-4-q14-v",
            "label": "в",
            "text": "Будет ошибка синтаксиса"
          },
          {
            "id": "section-4-q14-g",
            "label": "г",
            "text": "SQL автоматически соединит по внешним ключам"
          }
        ],
        "correctOptionId": "section-4-q14-b",
        "explanation": "соединение без условия фактически сопоставляет каждую строку первой таблицы с каждой строкой второй.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q15",
        "sectionId": "section-4",
        "order": 15,
        "text": "Какой оператор SQL используется для выборки данных?",
        "options": [
          {
            "id": "section-4-q15-a",
            "label": "а",
            "text": "`INSERT`"
          },
          {
            "id": "section-4-q15-b",
            "label": "б",
            "text": "`SELECT`"
          },
          {
            "id": "section-4-q15-v",
            "label": "в",
            "text": "`DELETE`"
          },
          {
            "id": "section-4-q15-g",
            "label": "г",
            "text": "`UPDATE`"
          }
        ],
        "correctOptionId": "section-4-q15-b",
        "explanation": "SELECT извлекает строки из таблиц, представлений или выражений.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q16",
        "sectionId": "section-4",
        "order": 16,
        "text": "Какое ключевое слово используется для сортировки по возрастанию?",
        "options": [
          {
            "id": "section-4-q16-a",
            "label": "а",
            "text": "`ORDER BY ... DESC`"
          },
          {
            "id": "section-4-q16-b",
            "label": "б",
            "text": "`ORDER BY ... ASC`"
          },
          {
            "id": "section-4-q16-v",
            "label": "в",
            "text": "`SORT BY ... ASC`"
          },
          {
            "id": "section-4-q16-g",
            "label": "г",
            "text": "`GROUP BY ... ASC`"
          }
        ],
        "correctOptionId": "section-4-q16-b",
        "explanation": "ASC задает ascending order, то есть сортировку по возрастанию.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q17",
        "sectionId": "section-4",
        "order": 17,
        "text": "Для чего используется оконная функция LAG()?",
        "options": [
          {
            "id": "section-4-q17-a",
            "label": "а",
            "text": "Для нумерации строк"
          },
          {
            "id": "section-4-q17-b",
            "label": "б",
            "text": "Для вычисления задержки запроса"
          },
          {
            "id": "section-4-q17-v",
            "label": "в",
            "text": "Для получения предыдущего значения в окне"
          },
          {
            "id": "section-4-q17-g",
            "label": "г",
            "text": "Для получения следующего значения в окне"
          }
        ],
        "correctOptionId": "section-4-q17-v",
        "explanation": "LAG() возвращает значение из предыдущей строки относительно текущей внутри окна.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: Window Functions"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q18",
        "sectionId": "section-4",
        "order": 18,
        "text": "Что делает оконная функция ROW_NUMBER()?",
        "options": [
          {
            "id": "section-4-q18-a",
            "label": "а",
            "text": "Группирует строки по зарплате"
          },
          {
            "id": "section-4-q18-b",
            "label": "б",
            "text": "Возвращает общее количество строк"
          },
          {
            "id": "section-4-q18-v",
            "label": "в",
            "text": "Присваивает уникальный последовательный номер каждой строке в окне"
          },
          {
            "id": "section-4-q18-g",
            "label": "г",
            "text": "Возвращает номер строки в таблице"
          }
        ],
        "correctOptionId": "section-4-q18-v",
        "explanation": "ROW_NUMBER() нумерует строки в рамках заданного окна.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: Window Functions"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q19",
        "sectionId": "section-4",
        "order": 19,
        "text": "Чем отличается ROW_NUMBER() от RANK()?",
        "options": [
          {
            "id": "section-4-q19-a",
            "label": "а",
            "text": "Ничем не отличается"
          },
          {
            "id": "section-4-q19-b",
            "label": "б",
            "text": "`RANK()` присваивает одинаковый ранг строкам с одинаковыми значениями и пропускает номера"
          },
          {
            "id": "section-4-q19-v",
            "label": "в",
            "text": "`RANK()` работает только с числовыми данными"
          },
          {
            "id": "section-4-q19-g",
            "label": "г",
            "text": "`ROW_NUMBER()` работает быстрее"
          }
        ],
        "correctOptionId": "section-4-q19-b",
        "explanation": "при равных значениях RANK() дает одинаковый ранг и оставляет разрыв в следующем номере; ROW_NUMBER() всегда уникален.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: Window Functions"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q20",
        "sectionId": "section-4",
        "order": 20,
        "text": "Что покажет команда EXPLAIN для SQL-запроса?",
        "options": [
          {
            "id": "section-4-q20-a",
            "label": "а",
            "text": "План выполнения запроса, выбранный оптимизатором"
          },
          {
            "id": "section-4-q20-b",
            "label": "б",
            "text": "Список таблиц в базе данных"
          },
          {
            "id": "section-4-q20-v",
            "label": "в",
            "text": "Схему таблицы"
          },
          {
            "id": "section-4-q20-g",
            "label": "г",
            "text": "Результат выполнения запроса"
          }
        ],
        "correctOptionId": "section-4-q20-a",
        "explanation": "EXPLAIN показывает, как СУБД планирует выполнять запрос.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: EXPLAIN"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q21",
        "sectionId": "section-4",
        "order": 21,
        "text": "Для чего используется индекс в базе данных?",
        "options": [
          {
            "id": "section-4-q21-a",
            "label": "а",
            "text": "Для шифрования данных"
          },
          {
            "id": "section-4-q21-b",
            "label": "б",
            "text": "Для ускорения поиска и сортировки данных"
          },
          {
            "id": "section-4-q21-v",
            "label": "в",
            "text": "Для автоматического резервного копирования"
          },
          {
            "id": "section-4-q21-g",
            "label": "г",
            "text": "Для сжатия данных"
          }
        ],
        "correctOptionId": "section-4-q21-b",
        "explanation": "индекс помогает быстрее находить строки, но требует дополнительного места и обслуживания при изменениях.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: Indexes"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q22",
        "sectionId": "section-4",
        "order": 22,
        "text": "Какое ключевое слово объединяет результаты двух запросов с удалением дубликатов?",
        "options": [
          {
            "id": "section-4-q22-a",
            "label": "а",
            "text": "`JOIN`"
          },
          {
            "id": "section-4-q22-b",
            "label": "б",
            "text": "`UNION`"
          },
          {
            "id": "section-4-q22-v",
            "label": "в",
            "text": "`INTERSECT`"
          },
          {
            "id": "section-4-q22-g",
            "label": "г",
            "text": "`EXCEPT`"
          }
        ],
        "correctOptionId": "section-4-q22-b",
        "explanation": "UNION объединяет строки двух запросов и удаляет дубликаты, если не указан ALL.",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: SELECT"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q23",
        "sectionId": "section-4",
        "order": 23,
        "text": "Какой оператор создает индекс для столбца name в таблице users?",
        "options": [
          {
            "id": "section-4-q23-a",
            "label": "а",
            "text": "`MAKE INDEX idx_name ON users(name)`"
          },
          {
            "id": "section-4-q23-b",
            "label": "б",
            "text": "`CREATE INDEX idx_name ON users(name)`"
          },
          {
            "id": "section-4-q23-v",
            "label": "в",
            "text": "`ADD INDEX idx_name TO users(name)`"
          },
          {
            "id": "section-4-q23-g",
            "label": "г",
            "text": "`NEW INDEX idx_name FOR users(name)`"
          }
        ],
        "correctOptionId": "section-4-q23-b",
        "explanation": "стандартная форма создания индекса: CREATE INDEX имя ON таблица(столбец).",
        "sourceRefs": [
          "вопросы_из_pdf_гиа_2026.md",
          "PostgreSQL: CREATE INDEX"
        ],
        "materialIds": [
          "mat-shared-voprosy-iz-pdf-gia-2026-md"
        ]
      },
      {
        "id": "section-4-q24",
        "sectionId": "section-4",
        "order": 24,
        "text": "Что такое первичный ключ?",
        "options": [
          {
            "id": "section-4-q24-a",
            "label": "а",
            "text": "Столбец или набор столбцов, уникально идентифицирующий строку таблицы"
          },
          {
            "id": "section-4-q24-b",
            "label": "б",
            "text": "Любой текстовый столбец"
          },
          {
            "id": "section-4-q24-v",
            "label": "в",
            "text": "Индекс, который всегда допускает `NULL`"
          },
          {
            "id": "section-4-q24-g",
            "label": "г",
            "text": "Таблица с архивными данными"
          }
        ],
        "correctOptionId": "section-4-q24-a",
        "explanation": "primary key обеспечивает уникальность и отсутствие NULL для идентификатора записи.",
        "sourceRefs": [
          "общая информация.md",
          "PostgreSQL: Constraints"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-4-q25",
        "sectionId": "section-4",
        "order": 25,
        "text": "Что такое внешний ключ?",
        "options": [
          {
            "id": "section-4-q25-a",
            "label": "а",
            "text": "Ссылка на ключ другой или той же таблицы"
          },
          {
            "id": "section-4-q25-b",
            "label": "б",
            "text": "Любой индекс"
          },
          {
            "id": "section-4-q25-v",
            "label": "в",
            "text": "Команда для удаления таблицы"
          },
          {
            "id": "section-4-q25-g",
            "label": "г",
            "text": "Временный столбец запроса"
          }
        ],
        "correctOptionId": "section-4-q25-a",
        "explanation": "foreign key поддерживает ссылочную целостность между связанными таблицами.",
        "sourceRefs": [
          "общая информация.md",
          "PostgreSQL: Foreign Keys"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-4-q26",
        "sectionId": "section-4",
        "order": 26,
        "text": "Что делает WHERE?",
        "options": [
          {
            "id": "section-4-q26-a",
            "label": "а",
            "text": "Фильтрует строки до группировки и вывода"
          },
          {
            "id": "section-4-q26-b",
            "label": "б",
            "text": "Сортирует результат"
          },
          {
            "id": "section-4-q26-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q26-g",
            "label": "г",
            "text": "Объединяет таблицы без условия"
          }
        ],
        "correctOptionId": "section-4-q26-a",
        "explanation": "WHERE оставляет только строки, удовлетворяющие условию.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q27",
        "sectionId": "section-4",
        "order": 27,
        "text": "Что делает ORDER BY?",
        "options": [
          {
            "id": "section-4-q27-a",
            "label": "а",
            "text": "Задает порядок строк результата"
          },
          {
            "id": "section-4-q27-b",
            "label": "б",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-4-q27-v",
            "label": "в",
            "text": "Создает таблицу"
          },
          {
            "id": "section-4-q27-g",
            "label": "г",
            "text": "Фильтрует группы"
          }
        ],
        "correctOptionId": "section-4-q27-a",
        "explanation": "без ORDER BY порядок строк результата не гарантирован.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q28",
        "sectionId": "section-4",
        "order": 28,
        "text": "Чем WHERE отличается от HAVING?",
        "options": [
          {
            "id": "section-4-q28-a",
            "label": "а",
            "text": "`WHERE` фильтрует строки до группировки, `HAVING` фильтрует группы после агрегирования"
          },
          {
            "id": "section-4-q28-b",
            "label": "б",
            "text": "`HAVING` используется только для сортировки"
          },
          {
            "id": "section-4-q28-v",
            "label": "в",
            "text": "`WHERE` работает только с индексами"
          },
          {
            "id": "section-4-q28-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-4-q28-a",
        "explanation": "HAVING часто применяют к агрегатам вроде COUNT(*).",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q29",
        "sectionId": "section-4",
        "order": 29,
        "text": "Что делает COUNT(*)?",
        "options": [
          {
            "id": "section-4-q29-a",
            "label": "а",
            "text": "Считает строки в группе или результате"
          },
          {
            "id": "section-4-q29-b",
            "label": "б",
            "text": "Считает только не-`NULL` значения одного столбца"
          },
          {
            "id": "section-4-q29-v",
            "label": "в",
            "text": "Сортирует строки"
          },
          {
            "id": "section-4-q29-g",
            "label": "г",
            "text": "Удаляет дубликаты"
          }
        ],
        "correctOptionId": "section-4-q29-a",
        "explanation": "COUNT(*) учитывает все строки, включая строки с NULL в отдельных столбцах.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q30",
        "sectionId": "section-4",
        "order": 30,
        "text": "Что делает COUNT(column)?",
        "options": [
          {
            "id": "section-4-q30-a",
            "label": "а",
            "text": "Считает только не-`NULL` значения указанного столбца"
          },
          {
            "id": "section-4-q30-b",
            "label": "б",
            "text": "Считает все строки всегда"
          },
          {
            "id": "section-4-q30-v",
            "label": "в",
            "text": "Возвращает сумму значений"
          },
          {
            "id": "section-4-q30-g",
            "label": "г",
            "text": "Возвращает первое значение"
          }
        ],
        "correctOptionId": "section-4-q30-a",
        "explanation": "большинство агрегатных функций игнорируют NULL.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q31",
        "sectionId": "section-4",
        "order": 31,
        "text": "Что делает SUM(amount)?",
        "options": [
          {
            "id": "section-4-q31-a",
            "label": "а",
            "text": "Суммирует значения столбца `amount`"
          },
          {
            "id": "section-4-q31-b",
            "label": "б",
            "text": "Считает количество строк"
          },
          {
            "id": "section-4-q31-v",
            "label": "в",
            "text": "Возвращает минимальное значение"
          },
          {
            "id": "section-4-q31-g",
            "label": "г",
            "text": "Объединяет строки"
          }
        ],
        "correctOptionId": "section-4-q31-a",
        "explanation": "SUM - агрегатная функция для суммы числовых значений.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q32",
        "sectionId": "section-4",
        "order": 32,
        "text": "Что делает AVG(price)?",
        "options": [
          {
            "id": "section-4-q32-a",
            "label": "а",
            "text": "Возвращает среднее значение `price`"
          },
          {
            "id": "section-4-q32-b",
            "label": "б",
            "text": "Возвращает максимальное значение"
          },
          {
            "id": "section-4-q32-v",
            "label": "в",
            "text": "Сортирует по `price`"
          },
          {
            "id": "section-4-q32-g",
            "label": "г",
            "text": "Удаляет `NULL`"
          }
        ],
        "correctOptionId": "section-4-q32-a",
        "explanation": "AVG вычисляет среднее по не-NULL значениям.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q33",
        "sectionId": "section-4",
        "order": 33,
        "text": "Что делает MIN(created_at)?",
        "options": [
          {
            "id": "section-4-q33-a",
            "label": "а",
            "text": "Возвращает минимальное значение"
          },
          {
            "id": "section-4-q33-b",
            "label": "б",
            "text": "Возвращает максимальное значение"
          },
          {
            "id": "section-4-q33-v",
            "label": "в",
            "text": "Считает строки"
          },
          {
            "id": "section-4-q33-g",
            "label": "г",
            "text": "Создает дату"
          }
        ],
        "correctOptionId": "section-4-q33-a",
        "explanation": "для дат минимальное значение обычно означает самую раннюю дату.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q34",
        "sectionId": "section-4",
        "order": 34,
        "text": "Что делает MAX(score)?",
        "options": [
          {
            "id": "section-4-q34-a",
            "label": "а",
            "text": "Возвращает максимальное значение"
          },
          {
            "id": "section-4-q34-b",
            "label": "б",
            "text": "Возвращает среднее"
          },
          {
            "id": "section-4-q34-v",
            "label": "в",
            "text": "Возвращает количество строк"
          },
          {
            "id": "section-4-q34-g",
            "label": "г",
            "text": "Проверяет `NULL`"
          }
        ],
        "correctOptionId": "section-4-q34-a",
        "explanation": "MAX выбирает наибольшее значение в группе.",
        "sourceRefs": [
          "PostgreSQL: Aggregate Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q35",
        "sectionId": "section-4",
        "order": 35,
        "text": "Что делает DISTINCT?",
        "options": [
          {
            "id": "section-4-q35-a",
            "label": "а",
            "text": "Убирает дублирующиеся строки из результата"
          },
          {
            "id": "section-4-q35-b",
            "label": "б",
            "text": "Добавляет индекс"
          },
          {
            "id": "section-4-q35-v",
            "label": "в",
            "text": "Сортирует по убыванию"
          },
          {
            "id": "section-4-q35-g",
            "label": "г",
            "text": "Объединяет таблицы"
          }
        ],
        "correctOptionId": "section-4-q35-a",
        "explanation": "SELECT DISTINCT возвращает уникальные комбинации выбранных столбцов.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q36",
        "sectionId": "section-4",
        "order": 36,
        "text": "Что делает LIKE 'A%'?",
        "options": [
          {
            "id": "section-4-q36-a",
            "label": "а",
            "text": "Ищет строки, начинающиеся на `A`"
          },
          {
            "id": "section-4-q36-b",
            "label": "б",
            "text": "Ищет строки, заканчивающиеся на `A`"
          },
          {
            "id": "section-4-q36-v",
            "label": "в",
            "text": "Ищет только строку `A%` буквально"
          },
          {
            "id": "section-4-q36-g",
            "label": "г",
            "text": "Сравнивает числа"
          }
        ],
        "correctOptionId": "section-4-q36-a",
        "explanation": "% означает любую последовательность символов.",
        "sourceRefs": [
          "PostgreSQL: Pattern Matching"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q37",
        "sectionId": "section-4",
        "order": 37,
        "text": "Что означает шаблон LIKE '%@gmail.com'?",
        "options": [
          {
            "id": "section-4-q37-a",
            "label": "а",
            "text": "Строка заканчивается на `@gmail.com`"
          },
          {
            "id": "section-4-q37-b",
            "label": "б",
            "text": "Строка начинается с `@gmail.com`"
          },
          {
            "id": "section-4-q37-v",
            "label": "в",
            "text": "Строка равна `%@gmail.com`"
          },
          {
            "id": "section-4-q37-g",
            "label": "г",
            "text": "Строка содержит только числа"
          }
        ],
        "correctOptionId": "section-4-q37-a",
        "explanation": "% перед текстом допускает любые символы до суффикса.",
        "sourceRefs": [
          "PostgreSQL: Pattern Matching"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q38",
        "sectionId": "section-4",
        "order": 38,
        "text": "Что означает _ в SQL-шаблоне LIKE?",
        "options": [
          {
            "id": "section-4-q38-a",
            "label": "а",
            "text": "Ровно один любой символ"
          },
          {
            "id": "section-4-q38-b",
            "label": "б",
            "text": "Любое количество символов"
          },
          {
            "id": "section-4-q38-v",
            "label": "в",
            "text": "Только пробел"
          },
          {
            "id": "section-4-q38-g",
            "label": "г",
            "text": "Только цифру"
          }
        ],
        "correctOptionId": "section-4-q38-a",
        "explanation": "_ сопоставляется с одним символом, а % - с любой последовательностью.",
        "sourceRefs": [
          "PostgreSQL: Pattern Matching"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q39",
        "sectionId": "section-4",
        "order": 39,
        "text": "Что делает IN ('A', 'B')?",
        "options": [
          {
            "id": "section-4-q39-a",
            "label": "а",
            "text": "Проверяет, входит ли значение в указанный список"
          },
          {
            "id": "section-4-q39-b",
            "label": "б",
            "text": "Проверяет диапазон чисел"
          },
          {
            "id": "section-4-q39-v",
            "label": "в",
            "text": "Сортирует значения"
          },
          {
            "id": "section-4-q39-g",
            "label": "г",
            "text": "Создает таблицу"
          }
        ],
        "correctOptionId": "section-4-q39-a",
        "explanation": "IN - компактная форма нескольких сравнений через OR.",
        "sourceRefs": [
          "PostgreSQL: Row and Array Comparisons"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q40",
        "sectionId": "section-4",
        "order": 40,
        "text": "Что делает IS NULL?",
        "options": [
          {
            "id": "section-4-q40-a",
            "label": "а",
            "text": "Проверяет отсутствие значения"
          },
          {
            "id": "section-4-q40-b",
            "label": "б",
            "text": "Сравнивает со строкой `'NULL'`"
          },
          {
            "id": "section-4-q40-v",
            "label": "в",
            "text": "Заменяет значение на ноль"
          },
          {
            "id": "section-4-q40-g",
            "label": "г",
            "text": "Создает внешний ключ"
          }
        ],
        "correctOptionId": "section-4-q40-a",
        "explanation": "NULL нельзя корректно проверять через = NULL; нужен IS NULL.",
        "sourceRefs": [
          "PostgreSQL: Comparison Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q41",
        "sectionId": "section-4",
        "order": 41,
        "text": "Что вернет условие NULL = NULL в SQL?",
        "options": [
          {
            "id": "section-4-q41-a",
            "label": "а",
            "text": "`TRUE`"
          },
          {
            "id": "section-4-q41-b",
            "label": "б",
            "text": "`FALSE`"
          },
          {
            "id": "section-4-q41-v",
            "label": "в",
            "text": "`UNKNOWN` / `NULL`"
          },
          {
            "id": "section-4-q41-g",
            "label": "г",
            "text": "Всегда ошибку синтаксиса"
          }
        ],
        "correctOptionId": "section-4-q41-v",
        "explanation": "NULL означает неизвестное значение, поэтому сравнение с NULL дает неизвестный результат.",
        "sourceRefs": [
          "PostgreSQL: NULL handling"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q42",
        "sectionId": "section-4",
        "order": 42,
        "text": "Какой JOIN возвращает все строки левой таблицы и совпадения из правой?",
        "options": [
          {
            "id": "section-4-q42-a",
            "label": "а",
            "text": "`INNER JOIN`"
          },
          {
            "id": "section-4-q42-b",
            "label": "б",
            "text": "`LEFT JOIN`"
          },
          {
            "id": "section-4-q42-v",
            "label": "в",
            "text": "`RIGHT JOIN`"
          },
          {
            "id": "section-4-q42-g",
            "label": "г",
            "text": "`CROSS JOIN`"
          }
        ],
        "correctOptionId": "section-4-q42-b",
        "explanation": "при отсутствии совпадения справа будут NULL в столбцах правой таблицы.",
        "sourceRefs": [
          "SQLBolt: OUTER JOINs"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q43",
        "sectionId": "section-4",
        "order": 43,
        "text": "Какой JOIN возвращает все строки правой таблицы и совпадения из левой?",
        "options": [
          {
            "id": "section-4-q43-a",
            "label": "а",
            "text": "`LEFT JOIN`"
          },
          {
            "id": "section-4-q43-b",
            "label": "б",
            "text": "`RIGHT JOIN`"
          },
          {
            "id": "section-4-q43-v",
            "label": "в",
            "text": "`INNER JOIN`"
          },
          {
            "id": "section-4-q43-g",
            "label": "г",
            "text": "`UNION`"
          }
        ],
        "correctOptionId": "section-4-q43-b",
        "explanation": "RIGHT JOIN симметричен LEFT JOIN, но сохраняет все строки правой таблицы.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q44",
        "sectionId": "section-4",
        "order": 44,
        "text": "Какой JOIN возвращает все строки обеих таблиц, включая несовпавшие?",
        "options": [
          {
            "id": "section-4-q44-a",
            "label": "а",
            "text": "`INNER JOIN`"
          },
          {
            "id": "section-4-q44-b",
            "label": "б",
            "text": "`LEFT JOIN`"
          },
          {
            "id": "section-4-q44-v",
            "label": "в",
            "text": "`FULL JOIN`"
          },
          {
            "id": "section-4-q44-g",
            "label": "г",
            "text": "`CROSS JOIN`"
          }
        ],
        "correctOptionId": "section-4-q44-v",
        "explanation": "FULL OUTER JOIN сохраняет строки с обеих сторон, подставляя NULL там, где совпадения нет.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q45",
        "sectionId": "section-4",
        "order": 45,
        "text": "Что делает CROSS JOIN?",
        "options": [
          {
            "id": "section-4-q45-a",
            "label": "а",
            "text": "Возвращает декартово произведение таблиц"
          },
          {
            "id": "section-4-q45-b",
            "label": "б",
            "text": "Возвращает только совпавшие строки"
          },
          {
            "id": "section-4-q45-v",
            "label": "в",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-4-q45-g",
            "label": "г",
            "text": "Создает внешний ключ"
          }
        ],
        "correctOptionId": "section-4-q45-a",
        "explanation": "каждая строка первой таблицы соединяется с каждой строкой второй.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q46",
        "sectionId": "section-4",
        "order": 46,
        "text": "Что такое декартово произведение двух таблиц с 3 и 4 строками?",
        "options": [
          {
            "id": "section-4-q46-a",
            "label": "а",
            "text": "7 строк"
          },
          {
            "id": "section-4-q46-b",
            "label": "б",
            "text": "12 строк"
          },
          {
            "id": "section-4-q46-v",
            "label": "в",
            "text": "1 строка"
          },
          {
            "id": "section-4-q46-g",
            "label": "г",
            "text": "0 строк всегда"
          }
        ],
        "correctOptionId": "section-4-q46-b",
        "explanation": "количество строк равно произведению размеров: 3 * 4 = 12.",
        "sourceRefs": [
          "SQLBolt: JOIN"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q47",
        "sectionId": "section-4",
        "order": 47,
        "text": "Чем UNION ALL отличается от UNION?",
        "options": [
          {
            "id": "section-4-q47-a",
            "label": "а",
            "text": "`UNION ALL` сохраняет дубликаты, `UNION` удаляет их"
          },
          {
            "id": "section-4-q47-b",
            "label": "б",
            "text": "`UNION ALL` работает только с одной таблицей"
          },
          {
            "id": "section-4-q47-v",
            "label": "в",
            "text": "`UNION` сохраняет все дубликаты"
          },
          {
            "id": "section-4-q47-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-4-q47-a",
        "explanation": "ALL отключает удаление повторяющихся строк.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q48",
        "sectionId": "section-4",
        "order": 48,
        "text": "Что делает INTERSECT?",
        "options": [
          {
            "id": "section-4-q48-a",
            "label": "а",
            "text": "Возвращает строки, присутствующие в обоих результатах"
          },
          {
            "id": "section-4-q48-b",
            "label": "б",
            "text": "Возвращает все строки из обоих результатов"
          },
          {
            "id": "section-4-q48-v",
            "label": "в",
            "text": "Возвращает только строки левого результата"
          },
          {
            "id": "section-4-q48-g",
            "label": "г",
            "text": "Соединяет таблицы по ключу"
          }
        ],
        "correctOptionId": "section-4-q48-a",
        "explanation": "INTERSECT - пересечение множеств строк.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q49",
        "sectionId": "section-4",
        "order": 49,
        "text": "Что делает EXCEPT?",
        "options": [
          {
            "id": "section-4-q49-a",
            "label": "а",
            "text": "Возвращает строки из левого результата, которых нет в правом"
          },
          {
            "id": "section-4-q49-b",
            "label": "б",
            "text": "Возвращает общие строки"
          },
          {
            "id": "section-4-q49-v",
            "label": "в",
            "text": "Возвращает все строки с дубликатами"
          },
          {
            "id": "section-4-q49-g",
            "label": "г",
            "text": "Сортирует результат"
          }
        ],
        "correctOptionId": "section-4-q49-a",
        "explanation": "EXCEPT реализует разность множеств строк.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q50",
        "sectionId": "section-4",
        "order": 50,
        "text": "Что такое алиас таблицы?",
        "options": [
          {
            "id": "section-4-q50-a",
            "label": "а",
            "text": "Временное короткое имя таблицы в запросе"
          },
          {
            "id": "section-4-q50-b",
            "label": "б",
            "text": "Новый физический столбец"
          },
          {
            "id": "section-4-q50-v",
            "label": "в",
            "text": "Индекс таблицы"
          },
          {
            "id": "section-4-q50-g",
            "label": "г",
            "text": "Ограничение внешнего ключа"
          }
        ],
        "correctOptionId": "section-4-q50-a",
        "explanation": "алиасы делают запросы короче, например FROM users u.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q51",
        "sectionId": "section-4",
        "order": 51,
        "text": "Что делает AS в SELECT name AS user_name?",
        "options": [
          {
            "id": "section-4-q51-a",
            "label": "а",
            "text": "Задает псевдоним выходного столбца"
          },
          {
            "id": "section-4-q51-b",
            "label": "б",
            "text": "Фильтрует строки"
          },
          {
            "id": "section-4-q51-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q51-g",
            "label": "г",
            "text": "Удаляет дубликаты"
          }
        ],
        "correctOptionId": "section-4-q51-a",
        "explanation": "результат будет иметь имя столбца user_name.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q52",
        "sectionId": "section-4",
        "order": 52,
        "text": "Что делает LIMIT 10?",
        "options": [
          {
            "id": "section-4-q52-a",
            "label": "а",
            "text": "Ограничивает результат десятью строками"
          },
          {
            "id": "section-4-q52-b",
            "label": "б",
            "text": "Сортирует десять строк"
          },
          {
            "id": "section-4-q52-v",
            "label": "в",
            "text": "Удаляет десять строк"
          },
          {
            "id": "section-4-q52-g",
            "label": "г",
            "text": "Создает десять таблиц"
          }
        ],
        "correctOptionId": "section-4-q52-a",
        "explanation": "LIMIT ограничивает количество возвращаемых строк.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q53",
        "sectionId": "section-4",
        "order": 53,
        "text": "Что делает OFFSET 20?",
        "options": [
          {
            "id": "section-4-q53-a",
            "label": "а",
            "text": "Пропускает первые 20 строк результата"
          },
          {
            "id": "section-4-q53-b",
            "label": "б",
            "text": "Возвращает только 20 строк"
          },
          {
            "id": "section-4-q53-v",
            "label": "в",
            "text": "Удаляет 20 строк из таблицы"
          },
          {
            "id": "section-4-q53-g",
            "label": "г",
            "text": "Создает внешний ключ"
          }
        ],
        "correctOptionId": "section-4-q53-a",
        "explanation": "OFFSET задает смещение перед выдачей строк.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q54",
        "sectionId": "section-4",
        "order": 54,
        "text": "Почему для постраничной выдачи важно использовать ORDER BY вместе с LIMIT/OFFSET?",
        "options": [
          {
            "id": "section-4-q54-a",
            "label": "а",
            "text": "Чтобы порядок страниц был предсказуемым"
          },
          {
            "id": "section-4-q54-b",
            "label": "б",
            "text": "Чтобы удалить дубликаты"
          },
          {
            "id": "section-4-q54-v",
            "label": "в",
            "text": "Чтобы создать индекс автоматически"
          },
          {
            "id": "section-4-q54-g",
            "label": "г",
            "text": "Чтобы запретить `NULL`"
          }
        ],
        "correctOptionId": "section-4-q54-a",
        "explanation": "без сортировки СУБД не обязана возвращать строки в одном и том же порядке.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q55",
        "sectionId": "section-4",
        "order": 55,
        "text": "Что делает INSERT INTO users(name) VALUES ('Ann');?",
        "options": [
          {
            "id": "section-4-q55-a",
            "label": "а",
            "text": "Добавляет новую строку"
          },
          {
            "id": "section-4-q55-b",
            "label": "б",
            "text": "Удаляет строку"
          },
          {
            "id": "section-4-q55-v",
            "label": "в",
            "text": "Сортирует таблицу"
          },
          {
            "id": "section-4-q55-g",
            "label": "г",
            "text": "Создает индекс"
          }
        ],
        "correctOptionId": "section-4-q55-a",
        "explanation": "INSERT вставляет новые записи в таблицу.",
        "sourceRefs": [
          "PostgreSQL: INSERT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q56",
        "sectionId": "section-4",
        "order": 56,
        "text": "Что делает UPDATE users SET active = false WHERE id = 5;?",
        "options": [
          {
            "id": "section-4-q56-a",
            "label": "а",
            "text": "Изменяет строки, подходящие под условие"
          },
          {
            "id": "section-4-q56-b",
            "label": "б",
            "text": "Удаляет таблицу"
          },
          {
            "id": "section-4-q56-v",
            "label": "в",
            "text": "Создает новую базу"
          },
          {
            "id": "section-4-q56-g",
            "label": "г",
            "text": "Возвращает план запроса"
          }
        ],
        "correctOptionId": "section-4-q56-a",
        "explanation": "UPDATE меняет значения в существующих строках.",
        "sourceRefs": [
          "PostgreSQL: UPDATE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q57",
        "sectionId": "section-4",
        "order": 57,
        "text": "Чем опасен UPDATE users SET active = false; без WHERE?",
        "options": [
          {
            "id": "section-4-q57-a",
            "label": "а",
            "text": "Изменит все строки таблицы"
          },
          {
            "id": "section-4-q57-b",
            "label": "б",
            "text": "Не изменит ничего"
          },
          {
            "id": "section-4-q57-v",
            "label": "в",
            "text": "Всегда вызовет синтаксическую ошибку"
          },
          {
            "id": "section-4-q57-g",
            "label": "г",
            "text": "Создаст дубликаты"
          }
        ],
        "correctOptionId": "section-4-q57-a",
        "explanation": "без условия UPDATE применяется ко всем строкам таблицы.",
        "sourceRefs": [
          "PostgreSQL: UPDATE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q58",
        "sectionId": "section-4",
        "order": 58,
        "text": "Что делает DELETE FROM users WHERE id = 5;?",
        "options": [
          {
            "id": "section-4-q58-a",
            "label": "а",
            "text": "Удаляет строки, подходящие под условие"
          },
          {
            "id": "section-4-q58-b",
            "label": "б",
            "text": "Удаляет столбец"
          },
          {
            "id": "section-4-q58-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q58-g",
            "label": "г",
            "text": "Сортирует таблицу"
          }
        ],
        "correctOptionId": "section-4-q58-a",
        "explanation": "DELETE удаляет записи из таблицы.",
        "sourceRefs": [
          "PostgreSQL: DELETE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q59",
        "sectionId": "section-4",
        "order": 59,
        "text": "Чем опасен DELETE FROM users; без WHERE?",
        "options": [
          {
            "id": "section-4-q59-a",
            "label": "а",
            "text": "Удалит все строки таблицы"
          },
          {
            "id": "section-4-q59-b",
            "label": "б",
            "text": "Удалит только первую строку"
          },
          {
            "id": "section-4-q59-v",
            "label": "в",
            "text": "Ничего не сделает"
          },
          {
            "id": "section-4-q59-g",
            "label": "г",
            "text": "Создаст резервную копию"
          }
        ],
        "correctOptionId": "section-4-q59-a",
        "explanation": "без фильтра удаляются все строки.",
        "sourceRefs": [
          "PostgreSQL: DELETE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q60",
        "sectionId": "section-4",
        "order": 60,
        "text": "Что делает CREATE TABLE?",
        "options": [
          {
            "id": "section-4-q60-a",
            "label": "а",
            "text": "Создает новую таблицу"
          },
          {
            "id": "section-4-q60-b",
            "label": "б",
            "text": "Удаляет строки"
          },
          {
            "id": "section-4-q60-v",
            "label": "в",
            "text": "Сортирует результат"
          },
          {
            "id": "section-4-q60-g",
            "label": "г",
            "text": "Выполняет JOIN"
          }
        ],
        "correctOptionId": "section-4-q60-a",
        "explanation": "CREATE TABLE определяет структуру новой таблицы.",
        "sourceRefs": [
          "PostgreSQL: CREATE TABLE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q61",
        "sectionId": "section-4",
        "order": 61,
        "text": "Что делает ALTER TABLE?",
        "options": [
          {
            "id": "section-4-q61-a",
            "label": "а",
            "text": "Изменяет структуру существующей таблицы"
          },
          {
            "id": "section-4-q61-b",
            "label": "б",
            "text": "Только сортирует данные"
          },
          {
            "id": "section-4-q61-v",
            "label": "в",
            "text": "Только выбирает строки"
          },
          {
            "id": "section-4-q61-g",
            "label": "г",
            "text": "Только удаляет дубликаты"
          }
        ],
        "correctOptionId": "section-4-q61-a",
        "explanation": "через ALTER TABLE добавляют столбцы, меняют ограничения и другие свойства таблицы.",
        "sourceRefs": [
          "PostgreSQL: ALTER TABLE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q62",
        "sectionId": "section-4",
        "order": 62,
        "text": "Что делает DROP TABLE?",
        "options": [
          {
            "id": "section-4-q62-a",
            "label": "а",
            "text": "Удаляет таблицу"
          },
          {
            "id": "section-4-q62-b",
            "label": "б",
            "text": "Удаляет только дубликаты"
          },
          {
            "id": "section-4-q62-v",
            "label": "в",
            "text": "Очищает только один столбец"
          },
          {
            "id": "section-4-q62-g",
            "label": "г",
            "text": "Строит индекс"
          }
        ],
        "correctOptionId": "section-4-q62-a",
        "explanation": "DROP TABLE удаляет объект таблицы из базы данных.",
        "sourceRefs": [
          "PostgreSQL: DROP TABLE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q63",
        "sectionId": "section-4",
        "order": 63,
        "text": "Что делает TRUNCATE TABLE?",
        "options": [
          {
            "id": "section-4-q63-a",
            "label": "а",
            "text": "Быстро удаляет все строки таблицы"
          },
          {
            "id": "section-4-q63-b",
            "label": "б",
            "text": "Удаляет структуру таблицы"
          },
          {
            "id": "section-4-q63-v",
            "label": "в",
            "text": "Создает CTE"
          },
          {
            "id": "section-4-q63-g",
            "label": "г",
            "text": "Выполняет сортировку"
          }
        ],
        "correctOptionId": "section-4-q63-a",
        "explanation": "TRUNCATE очищает таблицу, обычно быстрее массового DELETE.",
        "sourceRefs": [
          "PostgreSQL: TRUNCATE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q64",
        "sectionId": "section-4",
        "order": 64,
        "text": "Что такое ограничение NOT NULL?",
        "options": [
          {
            "id": "section-4-q64-a",
            "label": "а",
            "text": "Запрет хранить `NULL` в столбце"
          },
          {
            "id": "section-4-q64-b",
            "label": "б",
            "text": "Требование уникальности"
          },
          {
            "id": "section-4-q64-v",
            "label": "в",
            "text": "Ссылка на другую таблицу"
          },
          {
            "id": "section-4-q64-g",
            "label": "г",
            "text": "Индекс сортировки"
          }
        ],
        "correctOptionId": "section-4-q64-a",
        "explanation": "NOT NULL требует, чтобы значение столбца было задано.",
        "sourceRefs": [
          "PostgreSQL: Constraints"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q65",
        "sectionId": "section-4",
        "order": 65,
        "text": "Что такое ограничение UNIQUE?",
        "options": [
          {
            "id": "section-4-q65-a",
            "label": "а",
            "text": "Запрет повторяющихся значений в столбце или группе столбцов"
          },
          {
            "id": "section-4-q65-b",
            "label": "б",
            "text": "Запрет `NULL` во всех СУБД без исключений"
          },
          {
            "id": "section-4-q65-v",
            "label": "в",
            "text": "Указание внешнего ключа"
          },
          {
            "id": "section-4-q65-g",
            "label": "г",
            "text": "Команда удаления строк"
          }
        ],
        "correctOptionId": "section-4-q65-a",
        "explanation": "UNIQUE обеспечивает уникальность значений.",
        "sourceRefs": [
          "PostgreSQL: Constraints"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q66",
        "sectionId": "section-4",
        "order": 66,
        "text": "Что делает CHECK (price >= 0)?",
        "options": [
          {
            "id": "section-4-q66-a",
            "label": "а",
            "text": "Запрещает отрицательные цены"
          },
          {
            "id": "section-4-q66-b",
            "label": "б",
            "text": "Создает индекс по цене"
          },
          {
            "id": "section-4-q66-v",
            "label": "в",
            "text": "Сортирует цены"
          },
          {
            "id": "section-4-q66-g",
            "label": "г",
            "text": "Проверяет наличие таблицы"
          }
        ],
        "correctOptionId": "section-4-q66-a",
        "explanation": "CHECK задает логическое условие допустимости значения.",
        "sourceRefs": [
          "PostgreSQL: Constraints"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q67",
        "sectionId": "section-4",
        "order": 67,
        "text": "Что такое транзакция?",
        "options": [
          {
            "id": "section-4-q67-a",
            "label": "а",
            "text": "Группа операций, выполняемая как единое логическое целое"
          },
          {
            "id": "section-4-q67-b",
            "label": "б",
            "text": "Только один `SELECT`"
          },
          {
            "id": "section-4-q67-v",
            "label": "в",
            "text": "Только создание индекса"
          },
          {
            "id": "section-4-q67-g",
            "label": "г",
            "text": "Любой комментарий в SQL"
          }
        ],
        "correctOptionId": "section-4-q67-a",
        "explanation": "транзакция позволяет применить все изменения вместе или откатить их.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q68",
        "sectionId": "section-4",
        "order": 68,
        "text": "Что делает COMMIT?",
        "options": [
          {
            "id": "section-4-q68-a",
            "label": "а",
            "text": "Фиксирует изменения транзакции"
          },
          {
            "id": "section-4-q68-b",
            "label": "б",
            "text": "Отменяет изменения транзакции"
          },
          {
            "id": "section-4-q68-v",
            "label": "в",
            "text": "Создает таблицу"
          },
          {
            "id": "section-4-q68-g",
            "label": "г",
            "text": "Выполняет сортировку"
          }
        ],
        "correctOptionId": "section-4-q68-a",
        "explanation": "после COMMIT изменения становятся постоянными.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q69",
        "sectionId": "section-4",
        "order": 69,
        "text": "Что делает ROLLBACK?",
        "options": [
          {
            "id": "section-4-q69-a",
            "label": "а",
            "text": "Откатывает изменения текущей транзакции"
          },
          {
            "id": "section-4-q69-b",
            "label": "б",
            "text": "Фиксирует изменения"
          },
          {
            "id": "section-4-q69-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q69-g",
            "label": "г",
            "text": "Удаляет базу данных всегда"
          }
        ],
        "correctOptionId": "section-4-q69-a",
        "explanation": "ROLLBACK возвращает состояние к началу транзакции.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q70",
        "sectionId": "section-4",
        "order": 70,
        "text": "Что означает атомарность в ACID?",
        "options": [
          {
            "id": "section-4-q70-a",
            "label": "а",
            "text": "Транзакция выполняется целиком или не выполняется вовсе"
          },
          {
            "id": "section-4-q70-b",
            "label": "б",
            "text": "Данные всегда сортируются"
          },
          {
            "id": "section-4-q70-v",
            "label": "в",
            "text": "Все запросы выполняются параллельно"
          },
          {
            "id": "section-4-q70-g",
            "label": "г",
            "text": "Индексы создаются автоматически"
          }
        ],
        "correctOptionId": "section-4-q70-a",
        "explanation": "атомарность исключает частичное применение набора операций.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q71",
        "sectionId": "section-4",
        "order": 71,
        "text": "Что означает согласованность в ACID?",
        "options": [
          {
            "id": "section-4-q71-a",
            "label": "а",
            "text": "Транзакция переводит БД из одного корректного состояния в другое"
          },
          {
            "id": "section-4-q71-b",
            "label": "б",
            "text": "Все таблицы имеют одинаковые столбцы"
          },
          {
            "id": "section-4-q71-v",
            "label": "в",
            "text": "Все запросы одинаково быстрые"
          },
          {
            "id": "section-4-q71-g",
            "label": "г",
            "text": "Все строки уникальны"
          }
        ],
        "correctOptionId": "section-4-q71-a",
        "explanation": "ограничения и правила данных должны сохраняться после транзакции.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q72",
        "sectionId": "section-4",
        "order": 72,
        "text": "Что означает изолированность в ACID?",
        "options": [
          {
            "id": "section-4-q72-a",
            "label": "а",
            "text": "Параллельные транзакции не должны некорректно влиять друг на друга"
          },
          {
            "id": "section-4-q72-b",
            "label": "б",
            "text": "База данных не подключена к сети"
          },
          {
            "id": "section-4-q72-v",
            "label": "в",
            "text": "Таблица не имеет внешних ключей"
          },
          {
            "id": "section-4-q72-g",
            "label": "г",
            "text": "Запрос не имеет `WHERE`"
          }
        ],
        "correctOptionId": "section-4-q72-a",
        "explanation": "уровни изоляции управляют видимостью промежуточных изменений.",
        "sourceRefs": [
          "PostgreSQL: Transaction Isolation"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q73",
        "sectionId": "section-4",
        "order": 73,
        "text": "Что означает долговечность в ACID?",
        "options": [
          {
            "id": "section-4-q73-a",
            "label": "а",
            "text": "Зафиксированные изменения сохраняются даже при сбое"
          },
          {
            "id": "section-4-q73-b",
            "label": "б",
            "text": "Все запросы работают долго"
          },
          {
            "id": "section-4-q73-v",
            "label": "в",
            "text": "Таблица никогда не удаляется"
          },
          {
            "id": "section-4-q73-g",
            "label": "г",
            "text": "Индекс всегда уникален"
          }
        ],
        "correctOptionId": "section-4-q73-a",
        "explanation": "после COMMIT СУБД должна обеспечить сохранность данных.",
        "sourceRefs": [
          "PostgreSQL: Transactions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q74",
        "sectionId": "section-4",
        "order": 74,
        "text": "Что такое нормализация базы данных?",
        "options": [
          {
            "id": "section-4-q74-a",
            "label": "а",
            "text": "Организация данных для уменьшения избыточности и аномалий изменения"
          },
          {
            "id": "section-4-q74-b",
            "label": "б",
            "text": "Масштабирование числовых признаков"
          },
          {
            "id": "section-4-q74-v",
            "label": "в",
            "text": "Сортировка всех строк"
          },
          {
            "id": "section-4-q74-g",
            "label": "г",
            "text": "Удаление всех внешних ключей"
          }
        ],
        "correctOptionId": "section-4-q74-a",
        "explanation": "нормализация разбивает данные на связанные таблицы с меньшим дублированием.",
        "sourceRefs": [
          "общая информация.md",
          "SQL учебные материалы"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-4-q75",
        "sectionId": "section-4",
        "order": 75,
        "text": "Что такое денормализация?",
        "options": [
          {
            "id": "section-4-q75-a",
            "label": "а",
            "text": "Осознанное добавление избыточности ради ускорения чтения или упрощения запросов"
          },
          {
            "id": "section-4-q75-b",
            "label": "б",
            "text": "Удаление всех индексов"
          },
          {
            "id": "section-4-q75-v",
            "label": "в",
            "text": "Запрет JOIN"
          },
          {
            "id": "section-4-q75-g",
            "label": "г",
            "text": "Проверка `NULL`"
          }
        ],
        "correctOptionId": "section-4-q75-a",
        "explanation": "денормализация может ускорять чтение, но усложняет поддержку согласованности.",
        "sourceRefs": [
          "SQL учебные материалы"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q76",
        "sectionId": "section-4",
        "order": 76,
        "text": "Что означает первая нормальная форма?",
        "options": [
          {
            "id": "section-4-q76-a",
            "label": "а",
            "text": "Значения в ячейках атомарны, нет повторяющихся групп"
          },
          {
            "id": "section-4-q76-b",
            "label": "б",
            "text": "Все таблицы имеют один столбец"
          },
          {
            "id": "section-4-q76-v",
            "label": "в",
            "text": "Все данные хранятся в JSON"
          },
          {
            "id": "section-4-q76-g",
            "label": "г",
            "text": "Нет первичных ключей"
          }
        ],
        "correctOptionId": "section-4-q76-a",
        "explanation": "1NF требует простых, неделимых значений в столбцах.",
        "sourceRefs": [
          "SQL учебные материалы"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q77",
        "sectionId": "section-4",
        "order": 77,
        "text": "Что такое подзапрос?",
        "options": [
          {
            "id": "section-4-q77-a",
            "label": "а",
            "text": "Запрос, вложенный внутрь другого SQL-запроса"
          },
          {
            "id": "section-4-q77-b",
            "label": "б",
            "text": "Комментарий после запроса"
          },
          {
            "id": "section-4-q77-v",
            "label": "в",
            "text": "Индекс таблицы"
          },
          {
            "id": "section-4-q77-g",
            "label": "г",
            "text": "Функция сортировки"
          }
        ],
        "correctOptionId": "section-4-q77-a",
        "explanation": "результат подзапроса используется внешним запросом.",
        "sourceRefs": [
          "SQLBolt: Subqueries"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q78",
        "sectionId": "section-4",
        "order": 78,
        "text": "Где может использоваться подзапрос?",
        "options": [
          {
            "id": "section-4-q78-a",
            "label": "а",
            "text": "В `SELECT`, `FROM`, `WHERE` и других частях запроса"
          },
          {
            "id": "section-4-q78-b",
            "label": "б",
            "text": "Только после `ORDER BY`"
          },
          {
            "id": "section-4-q78-v",
            "label": "в",
            "text": "Только в имени таблицы"
          },
          {
            "id": "section-4-q78-g",
            "label": "г",
            "text": "Только в `CREATE INDEX`"
          }
        ],
        "correctOptionId": "section-4-q78-a",
        "explanation": "SQL допускает подзапросы в разных контекстах, если тип результата подходит.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q79",
        "sectionId": "section-4",
        "order": 79,
        "text": "Что делает EXISTS?",
        "options": [
          {
            "id": "section-4-q79-a",
            "label": "а",
            "text": "Проверяет, возвращает ли подзапрос хотя бы одну строку"
          },
          {
            "id": "section-4-q79-b",
            "label": "б",
            "text": "Считает все строки"
          },
          {
            "id": "section-4-q79-v",
            "label": "в",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-4-q79-g",
            "label": "г",
            "text": "Создает таблицу"
          }
        ],
        "correctOptionId": "section-4-q79-a",
        "explanation": "EXISTS возвращает логический результат по факту наличия строк.",
        "sourceRefs": [
          "PostgreSQL: Subquery Expressions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q80",
        "sectionId": "section-4",
        "order": 80,
        "text": "Что такое коррелированный подзапрос?",
        "options": [
          {
            "id": "section-4-q80-a",
            "label": "а",
            "text": "Подзапрос, который ссылается на строки внешнего запроса"
          },
          {
            "id": "section-4-q80-b",
            "label": "б",
            "text": "Подзапрос без таблиц"
          },
          {
            "id": "section-4-q80-v",
            "label": "в",
            "text": "Любой CTE"
          },
          {
            "id": "section-4-q80-g",
            "label": "г",
            "text": "Подзапрос только в `ORDER BY`"
          }
        ],
        "correctOptionId": "section-4-q80-a",
        "explanation": "он вычисляется с учетом текущей строки внешнего запроса.",
        "sourceRefs": [
          "PostgreSQL: Subquery Expressions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q81",
        "sectionId": "section-4",
        "order": 81,
        "text": "Что делает CASE WHEN ... THEN ... ELSE ... END?",
        "options": [
          {
            "id": "section-4-q81-a",
            "label": "а",
            "text": "Возвращает значение по условной логике"
          },
          {
            "id": "section-4-q81-b",
            "label": "б",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q81-v",
            "label": "в",
            "text": "Выполняет JOIN"
          },
          {
            "id": "section-4-q81-g",
            "label": "г",
            "text": "Удаляет таблицу"
          }
        ],
        "correctOptionId": "section-4-q81-a",
        "explanation": "CASE - условное выражение SQL.",
        "sourceRefs": [
          "PostgreSQL: Conditional Expressions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q82",
        "sectionId": "section-4",
        "order": 82,
        "text": "Что делает CAST(value AS integer)?",
        "options": [
          {
            "id": "section-4-q82-a",
            "label": "а",
            "text": "Преобразует значение к типу `integer`"
          },
          {
            "id": "section-4-q82-b",
            "label": "б",
            "text": "Считает строки"
          },
          {
            "id": "section-4-q82-v",
            "label": "в",
            "text": "Создает внешний ключ"
          },
          {
            "id": "section-4-q82-g",
            "label": "г",
            "text": "Сортирует таблицу"
          }
        ],
        "correctOptionId": "section-4-q82-a",
        "explanation": "CAST явно меняет тип выражения, если преобразование допустимо.",
        "sourceRefs": [
          "PostgreSQL: Type Conversion"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q83",
        "sectionId": "section-4",
        "order": 83,
        "text": "Что такое представление (VIEW)?",
        "options": [
          {
            "id": "section-4-q83-a",
            "label": "а",
            "text": "Сохраненный SQL-запрос, к которому можно обращаться как к таблице"
          },
          {
            "id": "section-4-q83-b",
            "label": "б",
            "text": "Физическая копия всех данных всегда"
          },
          {
            "id": "section-4-q83-v",
            "label": "в",
            "text": "Индекс по всем столбцам"
          },
          {
            "id": "section-4-q83-g",
            "label": "г",
            "text": "Транзакция"
          }
        ],
        "correctOptionId": "section-4-q83-a",
        "explanation": "обычное view хранит определение запроса, а не обязательно данные.",
        "sourceRefs": [
          "PostgreSQL: Views"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q84",
        "sectionId": "section-4",
        "order": 84,
        "text": "Что такое материализованное представление?",
        "options": [
          {
            "id": "section-4-q84-a",
            "label": "а",
            "text": "Представление, результат которого хранится физически и обновляется отдельно"
          },
          {
            "id": "section-4-q84-b",
            "label": "б",
            "text": "Любой `SELECT`"
          },
          {
            "id": "section-4-q84-v",
            "label": "в",
            "text": "Только временная таблица"
          },
          {
            "id": "section-4-q84-g",
            "label": "г",
            "text": "Внешний ключ"
          }
        ],
        "correctOptionId": "section-4-q84-a",
        "explanation": "materialized view ускоряет чтение ценой необходимости обновления данных.",
        "sourceRefs": [
          "PostgreSQL: Materialized Views"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q85",
        "sectionId": "section-4",
        "order": 85,
        "text": "Что такое временная таблица?",
        "options": [
          {
            "id": "section-4-q85-a",
            "label": "а",
            "text": "Таблица, существующая временно в рамках сессии или транзакции"
          },
          {
            "id": "section-4-q85-b",
            "label": "б",
            "text": "Таблица без столбцов"
          },
          {
            "id": "section-4-q85-v",
            "label": "в",
            "text": "Индекс без данных"
          },
          {
            "id": "section-4-q85-g",
            "label": "г",
            "text": "Любой CTE"
          }
        ],
        "correctOptionId": "section-4-q85-a",
        "explanation": "temporary table удобна для промежуточных результатов.",
        "sourceRefs": [
          "PostgreSQL: CREATE TABLE"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q86",
        "sectionId": "section-4",
        "order": 86,
        "text": "Чем CTE отличается от постоянной таблицы?",
        "options": [
          {
            "id": "section-4-q86-a",
            "label": "а",
            "text": "CTE существует только в рамках одного запроса"
          },
          {
            "id": "section-4-q86-b",
            "label": "б",
            "text": "CTE всегда хранится на диске навсегда"
          },
          {
            "id": "section-4-q86-v",
            "label": "в",
            "text": "CTE нельзя использовать с `SELECT`"
          },
          {
            "id": "section-4-q86-g",
            "label": "г",
            "text": "CTE обязательно создает индекс"
          }
        ],
        "correctOptionId": "section-4-q86-a",
        "explanation": "CTE задает временное именованное выражение внутри одного запроса.",
        "sourceRefs": [
          "PostgreSQL: SELECT"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q87",
        "sectionId": "section-4",
        "order": 87,
        "text": "Что делает WITH RECURSIVE?",
        "options": [
          {
            "id": "section-4-q87-a",
            "label": "а",
            "text": "Позволяет описывать рекурсивные CTE"
          },
          {
            "id": "section-4-q87-b",
            "label": "б",
            "text": "Удаляет рекурсивные строки"
          },
          {
            "id": "section-4-q87-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q87-g",
            "label": "г",
            "text": "Запрещает `JOIN`"
          }
        ],
        "correctOptionId": "section-4-q87-a",
        "explanation": "рекурсивные CTE применяют для иерархий, графов и последовательностей.",
        "sourceRefs": [
          "PostgreSQL: WITH Queries"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q88",
        "sectionId": "section-4",
        "order": 88,
        "text": "Что такое оконная рамка (ROWS BETWEEN ...)?",
        "options": [
          {
            "id": "section-4-q88-a",
            "label": "а",
            "text": "Подмножество строк внутри окна, участвующее в вычислении оконной функции"
          },
          {
            "id": "section-4-q88-b",
            "label": "б",
            "text": "Список таблиц в базе"
          },
          {
            "id": "section-4-q88-v",
            "label": "в",
            "text": "Индекс для сортировки"
          },
          {
            "id": "section-4-q88-g",
            "label": "г",
            "text": "Проверка внешнего ключа"
          }
        ],
        "correctOptionId": "section-4-q88-a",
        "explanation": "frame определяет, какие строки относительно текущей участвуют в расчете.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q89",
        "sectionId": "section-4",
        "order": 89,
        "text": "Что делает PARTITION BY в оконной функции?",
        "options": [
          {
            "id": "section-4-q89-a",
            "label": "а",
            "text": "Делит строки на независимые группы для вычисления окна"
          },
          {
            "id": "section-4-q89-b",
            "label": "б",
            "text": "Удаляет дубликаты"
          },
          {
            "id": "section-4-q89-v",
            "label": "в",
            "text": "Создает физические партиции таблицы всегда"
          },
          {
            "id": "section-4-q89-g",
            "label": "г",
            "text": "Сортирует всю базу данных"
          }
        ],
        "correctOptionId": "section-4-q89-a",
        "explanation": "оконная функция считается отдельно внутри каждой partition.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q90",
        "sectionId": "section-4",
        "order": 90,
        "text": "Что делает ORDER BY внутри OVER (...)?",
        "options": [
          {
            "id": "section-4-q90-a",
            "label": "а",
            "text": "Задает порядок строк внутри окна"
          },
          {
            "id": "section-4-q90-b",
            "label": "б",
            "text": "Сортирует финальный результат всегда"
          },
          {
            "id": "section-4-q90-v",
            "label": "в",
            "text": "Создает индекс"
          },
          {
            "id": "section-4-q90-g",
            "label": "г",
            "text": "Фильтрует строки"
          }
        ],
        "correctOptionId": "section-4-q90-a",
        "explanation": "порядок важен для ROW_NUMBER, RANK, LAG, накопительных сумм.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q91",
        "sectionId": "section-4",
        "order": 91,
        "text": "Что делает LEAD()?",
        "options": [
          {
            "id": "section-4-q91-a",
            "label": "а",
            "text": "Возвращает значение из следующей строки окна"
          },
          {
            "id": "section-4-q91-b",
            "label": "б",
            "text": "Возвращает предыдущую строку"
          },
          {
            "id": "section-4-q91-v",
            "label": "в",
            "text": "Считает все строки"
          },
          {
            "id": "section-4-q91-g",
            "label": "г",
            "text": "Удаляет `NULL`"
          }
        ],
        "correctOptionId": "section-4-q91-a",
        "explanation": "LEAD симметричен LAG, но смотрит вперед.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q92",
        "sectionId": "section-4",
        "order": 92,
        "text": "Что делает DENSE_RANK()?",
        "options": [
          {
            "id": "section-4-q92-a",
            "label": "а",
            "text": "Присваивает ранги без пропусков после равных значений"
          },
          {
            "id": "section-4-q92-b",
            "label": "б",
            "text": "Всегда уникально нумерует строки"
          },
          {
            "id": "section-4-q92-v",
            "label": "в",
            "text": "Возвращает предыдущую строку"
          },
          {
            "id": "section-4-q92-g",
            "label": "г",
            "text": "Удаляет дубликаты"
          }
        ],
        "correctOptionId": "section-4-q92-a",
        "explanation": "при равных значениях ранг одинаковый, но следующий ранг не пропускается.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q93",
        "sectionId": "section-4",
        "order": 93,
        "text": "Чем RANK() отличается от DENSE_RANK()?",
        "options": [
          {
            "id": "section-4-q93-a",
            "label": "а",
            "text": "`RANK()` оставляет пропуски после равных рангов, `DENSE_RANK()` - нет"
          },
          {
            "id": "section-4-q93-b",
            "label": "б",
            "text": "`DENSE_RANK()` всегда уникален"
          },
          {
            "id": "section-4-q93-v",
            "label": "в",
            "text": "`RANK()` работает только без `ORDER BY`"
          },
          {
            "id": "section-4-q93-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-4-q93-a",
        "explanation": "например, после двух первых мест RANK() даст следующий ранг 3, а DENSE_RANK() - 2.",
        "sourceRefs": [
          "PostgreSQL: Window Functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q94",
        "sectionId": "section-4",
        "order": 94,
        "text": "Что такое план выполнения запроса?",
        "options": [
          {
            "id": "section-4-q94-a",
            "label": "а",
            "text": "Описание шагов, которыми СУБД собирается получить результат"
          },
          {
            "id": "section-4-q94-b",
            "label": "б",
            "text": "Список пользователей БД"
          },
          {
            "id": "section-4-q94-v",
            "label": "в",
            "text": "Только текст SQL-запроса"
          },
          {
            "id": "section-4-q94-g",
            "label": "г",
            "text": "Резервная копия таблицы"
          }
        ],
        "correctOptionId": "section-4-q94-a",
        "explanation": "план показывает сканирования, соединения, сортировки и предполагаемые стоимости.",
        "sourceRefs": [
          "PostgreSQL: EXPLAIN"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q95",
        "sectionId": "section-4",
        "order": 95,
        "text": "Что означает последовательное сканирование (Seq Scan)?",
        "options": [
          {
            "id": "section-4-q95-a",
            "label": "а",
            "text": "Чтение строк таблицы последовательно без использования индекса"
          },
          {
            "id": "section-4-q95-b",
            "label": "б",
            "text": "Использование только внешнего ключа"
          },
          {
            "id": "section-4-q95-v",
            "label": "в",
            "text": "Удаление всех строк"
          },
          {
            "id": "section-4-q95-g",
            "label": "г",
            "text": "Сортировка по индексу"
          }
        ],
        "correctOptionId": "section-4-q95-a",
        "explanation": "Seq Scan может быть нормальным для маленьких таблиц или низкой селективности фильтра.",
        "sourceRefs": [
          "PostgreSQL: EXPLAIN"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q96",
        "sectionId": "section-4",
        "order": 96,
        "text": "Что означает индексное сканирование?",
        "options": [
          {
            "id": "section-4-q96-a",
            "label": "а",
            "text": "Использование индекса для поиска строк"
          },
          {
            "id": "section-4-q96-b",
            "label": "б",
            "text": "Полное удаление индекса"
          },
          {
            "id": "section-4-q96-v",
            "label": "в",
            "text": "Создание новой таблицы"
          },
          {
            "id": "section-4-q96-g",
            "label": "г",
            "text": "Соединение без условия"
          }
        ],
        "correctOptionId": "section-4-q96-a",
        "explanation": "Index Scan может ускорять выборку, если условие достаточно селективно.",
        "sourceRefs": [
          "PostgreSQL: Indexes",
          "EXPLAIN"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q97",
        "sectionId": "section-4",
        "order": 97,
        "text": "Когда индекс может не помочь?",
        "options": [
          {
            "id": "section-4-q97-a",
            "label": "а",
            "text": "Если условие выбирает слишком большую часть таблицы"
          },
          {
            "id": "section-4-q97-b",
            "label": "б",
            "text": "Если таблица содержит строки"
          },
          {
            "id": "section-4-q97-v",
            "label": "в",
            "text": "Если запрос содержит `SELECT`"
          },
          {
            "id": "section-4-q97-g",
            "label": "г",
            "text": "Если есть первичный ключ"
          }
        ],
        "correctOptionId": "section-4-q97-a",
        "explanation": "при низкой селективности полное сканирование может быть дешевле использования индекса.",
        "sourceRefs": [
          "PostgreSQL: Indexes"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q98",
        "sectionId": "section-4",
        "order": 98,
        "text": "Что такое селективность условия?",
        "options": [
          {
            "id": "section-4-q98-a",
            "label": "а",
            "text": "Доля строк, которую условие отбирает из таблицы"
          },
          {
            "id": "section-4-q98-b",
            "label": "б",
            "text": "Количество столбцов в таблице"
          },
          {
            "id": "section-4-q98-v",
            "label": "в",
            "text": "Имя индекса"
          },
          {
            "id": "section-4-q98-g",
            "label": "г",
            "text": "Тип JOIN"
          }
        ],
        "correctOptionId": "section-4-q98-a",
        "explanation": "чем меньше доля отбираемых строк, тем выше селективность и потенциальная польза индекса.",
        "sourceRefs": [
          "PostgreSQL: Indexes"
        ],
        "materialIds": []
      },
      {
        "id": "section-4-q99",
        "sectionId": "section-4",
        "order": 99,
        "text": "Какой запрос найдет имена, начинающиеся на букву A?",
        "options": [
          {
            "id": "section-4-q99-a",
            "label": "а",
            "text": "`SELECT * FROM users WHERE name LIKE 'A%';`"
          },
          {
            "id": "section-4-q99-b",
            "label": "б",
            "text": "`SELECT * FROM users WHERE name LIKE '%A';`"
          },
          {
            "id": "section-4-q99-v",
            "label": "в",
            "text": "`SELECT * FROM users WHERE name = 'A%';`"
          },
          {
            "id": "section-4-q99-g",
            "label": "г",
            "text": "`SELECT * FROM users ORDER BY 'A%';`"
          }
        ],
        "correctOptionId": "section-4-q99-a",
        "explanation": "A% означает символ A в начале и любую последовательность символов после него.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: Pattern Matching"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-4-q100",
        "sectionId": "section-4",
        "order": 100,
        "text": "Как получить последнюю запись по времени для каждого пользователя?",
        "options": [
          {
            "id": "section-4-q100-a",
            "label": "а",
            "text": "Использовать оконную функцию `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` и выбрать `rn = 1`"
          },
          {
            "id": "section-4-q100-b",
            "label": "б",
            "text": "Просто выполнить `SELECT * FROM messages LIMIT 1`"
          },
          {
            "id": "section-4-q100-v",
            "label": "в",
            "text": "Отсортировать всю таблицу по `user_id` без группировки"
          },
          {
            "id": "section-4-q100-g",
            "label": "г",
            "text": "Использовать только `COUNT(*)`"
          }
        ],
        "correctOptionId": "section-4-q100-a",
        "explanation": "PARTITION BY user_id нумерует записи отдельно для каждого пользователя, а сортировка по убыванию времени ставит последнюю запись первой.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "PostgreSQL: Window Functions"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      }
    ]
  },
  {
    "id": "section-5",
    "title": "Тема 5. Анализ больших текстовых данных, NLP и текстовый поиск: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_5_анализ_больших_текстовых_данных_nlp_и_текстовый_поиск_100_тестовых_вопросов.md.",
    "order": 5,
    "questions": [
      {
        "id": "section-5-q1",
        "sectionId": "section-5",
        "order": 1,
        "text": "Какое определение лучше всего соответствует модели Sequential?",
        "options": [
          {
            "id": "section-5-q1-a",
            "label": "а",
            "text": "Модель разбиения текста на отдельные токены/блоки"
          },
          {
            "id": "section-5-q1-b",
            "label": "б",
            "text": "Линейная последовательность слоев нейронной сети"
          },
          {
            "id": "section-5-q1-v",
            "label": "в",
            "text": "Рекуррентная нейронная сеть как отдельный тип слоя"
          },
          {
            "id": "section-5-q1-g",
            "label": "г",
            "text": "Алгоритм полнотекстового поиска"
          }
        ],
        "correctOptionId": "section-5-q1-b",
        "explanation": "в Keras Sequential означает модель, где слои идут один за другим; она может содержать разные типы слоев, не только полносвязные.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "TensorFlow/Keras documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q2",
        "sectionId": "section-5",
        "order": 2,
        "text": "Что на вход обычно получает encoder модели Text2Text?",
        "options": [
          {
            "id": "section-5-q2-a",
            "label": "а",
            "text": "Входную последовательность или ее векторное представление, например вопрос"
          },
          {
            "id": "section-5-q2-b",
            "label": "б",
            "text": "Только готовый ответ"
          },
          {
            "id": "section-5-q2-v",
            "label": "в",
            "text": "Только случайный шум"
          },
          {
            "id": "section-5-q2-g",
            "label": "г",
            "text": "Только метку класса"
          }
        ],
        "correctOptionId": "section-5-q2-a",
        "explanation": "encoder кодирует входной текст в скрытое представление, которое затем используется decoder.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q3",
        "sectionId": "section-5",
        "order": 3,
        "text": "Какие функции активации обычно используются внутри LSTM?",
        "options": [
          {
            "id": "section-5-q3-a",
            "label": "а",
            "text": "`sigmoid` и `tanh`"
          },
          {
            "id": "section-5-q3-b",
            "label": "б",
            "text": "Только `ReLU`"
          },
          {
            "id": "section-5-q3-v",
            "label": "в",
            "text": "Только `softmax`"
          },
          {
            "id": "section-5-q3-g",
            "label": "г",
            "text": "`units`"
          }
        ],
        "correctOptionId": "section-5-q3-a",
        "explanation": "LSTM использует сигмоиду в вентилях и tanh для состояния; units - это параметр размера слоя, а не функция активации.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "TensorFlow/Keras LSTM documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q4",
        "sectionId": "section-5",
        "order": 4,
        "text": "Какому результату соответствует преобразование текста методом texts_to_matrix()?",
        "options": [
          {
            "id": "section-5-q4-a",
            "label": "а",
            "text": "Матрица признаков, например бинарная или частотная: `[0, 0, 0, 1, 0, 0, 1]`"
          },
          {
            "id": "section-5-q4-b",
            "label": "б",
            "text": "Только последовательность индексов токенов: `[416, 10, 3]`"
          },
          {
            "id": "section-5-q4-v",
            "label": "в",
            "text": "Только исходный словарь частот без матрицы"
          },
          {
            "id": "section-5-q4-g",
            "label": "г",
            "text": "JSON-ответ языковой модели"
          }
        ],
        "correctOptionId": "section-5-q4-a",
        "explanation": "texts_to_matrix() преобразует набор текстов в матрицу признаков в режиме binary, count, tfidf или freq.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Keras Tokenizer documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q5",
        "sectionId": "section-5",
        "order": 5,
        "text": "Какая задача относится к задачам машинного обучения без учителя?",
        "options": [
          {
            "id": "section-5-q5-a",
            "label": "а",
            "text": "NER"
          },
          {
            "id": "section-5-q5-b",
            "label": "б",
            "text": "Topic Modeling"
          },
          {
            "id": "section-5-q5-v",
            "label": "в",
            "text": "Text2Text с парами вопрос-ответ"
          },
          {
            "id": "section-5-q5-g",
            "label": "г",
            "text": "Классификация тональности по размеченным отзывам"
          }
        ],
        "correctOptionId": "section-5-q5-b",
        "explanation": "тематическое моделирование обычно ищет скрытые темы в корпусе без заранее заданных меток классов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "scikit-learn topic extraction examples"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q6",
        "sectionId": "section-5",
        "order": 6,
        "text": "Что такое функция активации ReLU?",
        "options": [
          {
            "id": "section-5-q6-a",
            "label": "а",
            "text": "Линейный выпрямитель, возвращающий `max(0, x)`"
          },
          {
            "id": "section-5-q6-b",
            "label": "б",
            "text": "Моделирование векторного пространства"
          },
          {
            "id": "section-5-q6-v",
            "label": "в",
            "text": "Функция, отключающая нейроны по схеме Бернулли"
          },
          {
            "id": "section-5-q6-g",
            "label": "г",
            "text": "Метод токенизации русского текста"
          }
        ],
        "correctOptionId": "section-5-q6-a",
        "explanation": "ReLU пропускает положительные значения и заменяет отрицательные на ноль; вариант про отключение нейронов относится к Dropout.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "TensorFlow/Keras activation functions"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q7",
        "sectionId": "section-5",
        "order": 7,
        "text": "Что такое большая языковая модель (LLM)?",
        "options": [
          {
            "id": "section-5-q7-a",
            "label": "а",
            "text": "Модель, обученная на больших текстовых корпусах для понимания и генерации языка"
          },
          {
            "id": "section-5-q7-b",
            "label": "б",
            "text": "Таблица с большим количеством строк"
          },
          {
            "id": "section-5-q7-v",
            "label": "в",
            "text": "Алгоритм сортировки токенов"
          },
          {
            "id": "section-5-q7-g",
            "label": "г",
            "text": "Только словарь стоп-слов"
          }
        ],
        "correctOptionId": "section-5-q7-a",
        "explanation": "LLM обучается на больших объемах текста и решает задачи генерации, классификации, суммаризации, диалога и другие языковые задачи.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q8",
        "sectionId": "section-5",
        "order": 8,
        "text": "Какие компоненты характерны для современной архитектуры LLM на трансформерах?",
        "options": [
          {
            "id": "section-5-q8-a",
            "label": "а",
            "text": "Токенизатор, эмбеддинги, блоки self-attention и feed-forward слои"
          },
          {
            "id": "section-5-q8-b",
            "label": "б",
            "text": "Только SQL-таблицы и индексы"
          },
          {
            "id": "section-5-q8-v",
            "label": "в",
            "text": "Только стек и очередь"
          },
          {
            "id": "section-5-q8-g",
            "label": "г",
            "text": "Только HTML-теги"
          }
        ],
        "correctOptionId": "section-5-q8-a",
        "explanation": "трансформерные LLM представляют токены векторами и обрабатывают их слоями внимания и полносвязными блоками.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face Transformers documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q9",
        "sectionId": "section-5",
        "order": 9,
        "text": "Какой пример относится к типам LLM по архитектуре?",
        "options": [
          {
            "id": "section-5-q9-a",
            "label": "а",
            "text": "Encoder-only, decoder-only и encoder-decoder"
          },
          {
            "id": "section-5-q9-b",
            "label": "б",
            "text": "Только CSV, JSON и XML"
          },
          {
            "id": "section-5-q9-v",
            "label": "в",
            "text": "Только BFS, DFS и Dijkstra"
          },
          {
            "id": "section-5-q9-g",
            "label": "г",
            "text": "Только `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`"
          }
        ],
        "correctOptionId": "section-5-q9-a",
        "explanation": "BERT является примером encoder-only, GPT - decoder-only, а T5 - encoder-decoder модели.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q10",
        "sectionId": "section-5",
        "order": 10,
        "text": "Что обычно происходит первым при запуске RAG-сервиса с внутренней Wiki-базой?",
        "options": [
          {
            "id": "section-5-q10-a",
            "label": "а",
            "text": "Векторизация документов и сохранение представлений в базе или индексе"
          },
          {
            "id": "section-5-q10-b",
            "label": "б",
            "text": "Случайное удаление XML-файлов"
          },
          {
            "id": "section-5-q10-v",
            "label": "в",
            "text": "Генерация ответа без чтения базы знаний"
          },
          {
            "id": "section-5-q10-g",
            "label": "г",
            "text": "Сортировка CSS-стилей"
          }
        ],
        "correctOptionId": "section-5-q10-a",
        "explanation": "RAG должен подготовить корпус: прочитать документы, разбить их на фрагменты, построить embedding и сохранить для поиска.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face RAG materials"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q11",
        "sectionId": "section-5",
        "order": 11,
        "text": "Для чего в RAG используется векторная база данных?",
        "options": [
          {
            "id": "section-5-q11-a",
            "label": "а",
            "text": "Для поиска фрагментов, семантически близких к вопросу пользователя"
          },
          {
            "id": "section-5-q11-b",
            "label": "б",
            "text": "Для хранения только паролей пользователей"
          },
          {
            "id": "section-5-q11-v",
            "label": "в",
            "text": "Для компиляции Python-кода"
          },
          {
            "id": "section-5-q11-g",
            "label": "г",
            "text": "Для отрисовки HTML-страниц"
          }
        ],
        "correctOptionId": "section-5-q11-a",
        "explanation": "embedding вопроса сравнивается с embedding документов, чтобы найти релевантный контекст для генерации ответа.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q12",
        "sectionId": "section-5",
        "order": 12,
        "text": "Какой параметр указан в задании DOCX для передачи вопроса пользователя в RAG-сервис?",
        "options": [
          {
            "id": "section-5-q12-a",
            "label": "а",
            "text": "`query`"
          },
          {
            "id": "section-5-q12-b",
            "label": "б",
            "text": "`answer`"
          },
          {
            "id": "section-5-q12-v",
            "label": "в",
            "text": "`password`"
          },
          {
            "id": "section-5-q12-g",
            "label": "г",
            "text": "`style`"
          }
        ],
        "correctOptionId": "section-5-q12-a",
        "explanation": "в задании вопрос передается GET-запросом вида http://сервер/llm?query=вопрос.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q13",
        "sectionId": "section-5",
        "order": 13,
        "text": "Какой формат ответа указан для LLM-сервиса в задании DOCX?",
        "options": [
          {
            "id": "section-5-q13-a",
            "label": "а",
            "text": "`{ \"answer\": \"ответ LLM\" }`"
          },
          {
            "id": "section-5-q13-b",
            "label": "б",
            "text": "Только HTML-таблица без JSON"
          },
          {
            "id": "section-5-q13-v",
            "label": "в",
            "text": "Только бинарный файл"
          },
          {
            "id": "section-5-q13-g",
            "label": "г",
            "text": "Только SQL-запрос"
          }
        ],
        "correctOptionId": "section-5-q13-a",
        "explanation": "в задании явно указан JSON-формат с ключом answer.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q14",
        "sectionId": "section-5",
        "order": 14,
        "text": "Какой прием может повысить точность RAG-ответов?",
        "options": [
          {
            "id": "section-5-q14-a",
            "label": "а",
            "text": "Гибридный поиск и переранжирование найденных фрагментов"
          },
          {
            "id": "section-5-q14-b",
            "label": "б",
            "text": "Удаление всех найденных документов"
          },
          {
            "id": "section-5-q14-v",
            "label": "в",
            "text": "Использование только случайного контекста"
          },
          {
            "id": "section-5-q14-g",
            "label": "г",
            "text": "Отключение токенизации"
          }
        ],
        "correctOptionId": "section-5-q14-a",
        "explanation": "гибридный поиск объединяет лексическую и семантическую релевантность, а reranking уточняет порядок кандидатов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Elasticsearch documentation",
          "Hugging Face"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q15",
        "sectionId": "section-5",
        "order": 15,
        "text": "Что важно учитывать при обработке XML-файлов на русском языке?",
        "options": [
          {
            "id": "section-5-q15-a",
            "label": "а",
            "text": "Кодировку, токенизацию и поддержку русского языка выбранными моделями"
          },
          {
            "id": "section-5-q15-b",
            "label": "б",
            "text": "Только цвет интерфейса"
          },
          {
            "id": "section-5-q15-v",
            "label": "в",
            "text": "Только расширение `.py`"
          },
          {
            "id": "section-5-q15-g",
            "label": "г",
            "text": "Только количество CSS-файлов"
          }
        ],
        "correctOptionId": "section-5-q15-a",
        "explanation": "качество поиска и генерации зависит от корректного чтения текста и языковой поддержки embedding/LLM-моделей.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "spaCy",
          "Hugging Face"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q16",
        "sectionId": "section-5",
        "order": 16,
        "text": "Что должно происходить при ошибке доступа к LLM или отсутствии XML-файлов по заданию DOCX?",
        "options": [
          {
            "id": "section-5-q16-a",
            "label": "а",
            "text": "Ошибка должна корректно обрабатываться и сохраняться в лог-файл"
          },
          {
            "id": "section-5-q16-b",
            "label": "б",
            "text": "Приложение должно молча завершаться без сообщения"
          },
          {
            "id": "section-5-q16-v",
            "label": "в",
            "text": "Нужно удалить папку `source_data`"
          },
          {
            "id": "section-5-q16-g",
            "label": "г",
            "text": "Нужно вернуть случайный ответ"
          }
        ],
        "correctOptionId": "section-5-q16-a",
        "explanation": "в задании указано сохранять ошибку в текстовый лог log-дата.txt в папке ./logs/.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q17",
        "sectionId": "section-5",
        "order": 17,
        "text": "Какая операция обычно выполняется перед построением эмбеддингов слов в NLP-пайплайне?",
        "options": [
          {
            "id": "section-5-q17-a",
            "label": "а",
            "text": "Нормализация батчей"
          },
          {
            "id": "section-5-q17-b",
            "label": "б",
            "text": "Токенизация и, при необходимости, приведение к нижнему регистру"
          },
          {
            "id": "section-5-q17-v",
            "label": "в",
            "text": "Применение сверточных фильтров"
          },
          {
            "id": "section-5-q17-g",
            "label": "г",
            "text": "Кластеризация методом k-средних"
          }
        ],
        "correctOptionId": "section-5-q17-b",
        "explanation": "текст сначала разбивают на токены и часто нормализуют, а уже затем строят числовые представления.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "spaCy 101"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-spacy-101"
        ]
      },
      {
        "id": "section-5-q18",
        "sectionId": "section-5",
        "order": 18,
        "text": "Какая проблема характерна для статичных эмбеддингов Word2Vec и GloVe, но не для контекстуальных BERT-представлений?",
        "options": [
          {
            "id": "section-5-q18-a",
            "label": "а",
            "text": "Большой размер словаря"
          },
          {
            "id": "section-5-q18-b",
            "label": "б",
            "text": "Низкая скорость инференса"
          },
          {
            "id": "section-5-q18-v",
            "label": "в",
            "text": "Одно векторное представление для разных значений многозначного слова"
          },
          {
            "id": "section-5-q18-g",
            "label": "г",
            "text": "Отсутствие поддержки GPU"
          }
        ],
        "correctOptionId": "section-5-q18-v",
        "explanation": "статичная модель дает слову один вектор, а BERT строит представление с учетом контекста употребления.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q19",
        "sectionId": "section-5",
        "order": 19,
        "text": "Какая функция в Keras преобразует текст в последовательность целых чисел, то есть индексов токенов?",
        "options": [
          {
            "id": "section-5-q19-a",
            "label": "а",
            "text": "`fit_on_texts()`"
          },
          {
            "id": "section-5-q19-b",
            "label": "б",
            "text": "`texts_to_sequences()`"
          },
          {
            "id": "section-5-q19-v",
            "label": "в",
            "text": "`tokenize_to_sequences()`"
          },
          {
            "id": "section-5-q19-g",
            "label": "г",
            "text": "`text_to_matrix()`"
          }
        ],
        "correctOptionId": "section-5-q19-b",
        "explanation": "texts_to_sequences() заменяет слова индексами из словаря токенизатора.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Keras Tokenizer documentation"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q20",
        "sectionId": "section-5",
        "order": 20,
        "text": "Что такое N-грамма в обработке текста?",
        "options": [
          {
            "id": "section-5-q20-a",
            "label": "а",
            "text": "Последовательность из N слов или символов, идущих подряд в тексте"
          },
          {
            "id": "section-5-q20-b",
            "label": "б",
            "text": "Словарь из N самых частотных слов"
          },
          {
            "id": "section-5-q20-v",
            "label": "в",
            "text": "Метод кластеризации текстов"
          },
          {
            "id": "section-5-q20-g",
            "label": "г",
            "text": "Способ векторизации изображений"
          }
        ],
        "correctOptionId": "section-5-q20-a",
        "explanation": "биграмма состоит из двух соседних элементов, триграмма - из трех и так далее.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "scikit-learn text feature extraction"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q21",
        "sectionId": "section-5",
        "order": 21,
        "text": "Что произойдет с TF-IDF значением для слова, которое встречается во всех документах корпуса?",
        "options": [
          {
            "id": "section-5-q21-a",
            "label": "а",
            "text": "В классической формуле без сглаживания будет равно нулю"
          },
          {
            "id": "section-5-q21-b",
            "label": "б",
            "text": "Будет максимально возможным"
          },
          {
            "id": "section-5-q21-v",
            "label": "в",
            "text": "Будет зависеть только от частоты в документе"
          },
          {
            "id": "section-5-q21-g",
            "label": "г",
            "text": "Станет отрицательным"
          }
        ],
        "correctOptionId": "section-5-q21-a",
        "explanation": "если слово встречается в каждом документе, его обратная документная частота минимальна; в классической формуле log(N / df) она равна нулю.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "scikit-learn TF-IDF documentation"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q22",
        "sectionId": "section-5",
        "order": 22,
        "text": "Что скорее всего произойдет, если применить .collect() к RDD с текстовым корпусом 1 ТБ?",
        "options": [
          {
            "id": "section-5-q22-a",
            "label": "а",
            "text": "Данные равномерно распределятся по узлам"
          },
          {
            "id": "section-5-q22-b",
            "label": "б",
            "text": "Все данные будут собраны на драйвере, что может вызвать переполнение памяти"
          },
          {
            "id": "section-5-q22-v",
            "label": "в",
            "text": "Spark автоматически сожмет данные"
          },
          {
            "id": "section-5-q22-g",
            "label": "г",
            "text": "Будет запущен MapReduce без shuffle"
          }
        ],
        "correctOptionId": "section-5-q22-b",
        "explanation": ".collect() переносит результат на driver process, поэтому для больших данных это опасная операция.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q23",
        "sectionId": "section-5",
        "order": 23,
        "text": "Какая архитектура НЕ относится к контекстуальным эмбеддингам слов?",
        "options": [
          {
            "id": "section-5-q23-a",
            "label": "а",
            "text": "BERT"
          },
          {
            "id": "section-5-q23-b",
            "label": "б",
            "text": "ELMo"
          },
          {
            "id": "section-5-q23-v",
            "label": "в",
            "text": "Word2Vec skip-gram / CBOW"
          },
          {
            "id": "section-5-q23-g",
            "label": "г",
            "text": "GPT"
          }
        ],
        "correctOptionId": "section-5-q23-v",
        "explanation": "Word2Vec строит статичные векторы слов, а BERT, ELMo и GPT учитывают контекст.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q24",
        "sectionId": "section-5",
        "order": 24,
        "text": "Что делает стемминг в предобработке текста?",
        "options": [
          {
            "id": "section-5-q24-a",
            "label": "а",
            "text": "Удаляет стоп-слова"
          },
          {
            "id": "section-5-q24-b",
            "label": "б",
            "text": "Приводит слова к начальной форме по словарю"
          },
          {
            "id": "section-5-q24-v",
            "label": "в",
            "text": "Отбрасывает суффиксы и окончания без гарантии получения реального слова"
          },
          {
            "id": "section-5-q24-g",
            "label": "г",
            "text": "Преобразует текст в нижний регистр"
          }
        ],
        "correctOptionId": "section-5-q24-v",
        "explanation": "стемминг эвристически обрезает слово до основы, поэтому результат может не быть словарной формой.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "NLTK documentation"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q25",
        "sectionId": "section-5",
        "order": 25,
        "text": "Какой недостаток Bag of Words частично устраняется использованием N-грамм с N > 1?",
        "options": [
          {
            "id": "section-5-q25-a",
            "label": "а",
            "text": "Полная потеря порядка слов"
          },
          {
            "id": "section-5-q25-b",
            "label": "б",
            "text": "Высокая размерность вектора"
          },
          {
            "id": "section-5-q25-v",
            "label": "в",
            "text": "Чувствительность к регистру"
          },
          {
            "id": "section-5-q25-g",
            "label": "г",
            "text": "Игнорирование редких слов"
          }
        ],
        "correctOptionId": "section-5-q25-a",
        "explanation": "N-граммы сохраняют локальный порядок соседних слов, например не нравится как биграмму.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "scikit-learn text feature extraction"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q26",
        "sectionId": "section-5",
        "order": 26,
        "text": "Что такое word embedding?",
        "options": [
          {
            "id": "section-5-q26-a",
            "label": "а",
            "text": "Числовое представление слова в виде вектора"
          },
          {
            "id": "section-5-q26-b",
            "label": "б",
            "text": "Графическое изображение слова"
          },
          {
            "id": "section-5-q26-v",
            "label": "в",
            "text": "Синоним слова"
          },
          {
            "id": "section-5-q26-g",
            "label": "г",
            "text": "Грамматическая форма слова"
          }
        ],
        "correctOptionId": "section-5-q26-a",
        "explanation": "embedding отображает слово, фразу или документ в векторное пространство.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q27",
        "sectionId": "section-5",
        "order": 27,
        "text": "Какая архитектура НЕ относится к контекстуальным эмбеддингам слов?",
        "options": [
          {
            "id": "section-5-q27-a",
            "label": "а",
            "text": "BERT"
          },
          {
            "id": "section-5-q27-b",
            "label": "б",
            "text": "ELMo"
          },
          {
            "id": "section-5-q27-v",
            "label": "в",
            "text": "Word2Vec"
          },
          {
            "id": "section-5-q27-g",
            "label": "г",
            "text": "GPT"
          }
        ],
        "correctOptionId": "section-5-q27-v",
        "explanation": "Word2Vec дает одному слову один вектор, а контекстуальные модели меняют вектор в зависимости от окружения.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q28",
        "sectionId": "section-5",
        "order": 28,
        "text": "Какая метрика используется для оценки качества модели классификации?",
        "options": [
          {
            "id": "section-5-q28-a",
            "label": "а",
            "text": "BLEU"
          },
          {
            "id": "section-5-q28-b",
            "label": "б",
            "text": "ROUGE"
          },
          {
            "id": "section-5-q28-v",
            "label": "в",
            "text": "Accuracy"
          },
          {
            "id": "section-5-q28-g",
            "label": "г",
            "text": "WER"
          }
        ],
        "correctOptionId": "section-5-q28-v",
        "explanation": "Accuracy измеряет долю правильных предсказаний класса; BLEU и ROUGE чаще применяются к генерации текста, WER - к распознаванию речи.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "scikit-learn metrics"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q29",
        "sectionId": "section-5",
        "order": 29,
        "text": "Какая операция в Spark собирает все данные на драйвер?",
        "options": [
          {
            "id": "section-5-q29-a",
            "label": "а",
            "text": "`.collect()`"
          },
          {
            "id": "section-5-q29-b",
            "label": "б",
            "text": "`.map()`"
          },
          {
            "id": "section-5-q29-v",
            "label": "в",
            "text": "`.filter()`"
          },
          {
            "id": "section-5-q29-g",
            "label": "г",
            "text": "`.reduce()`"
          }
        ],
        "correctOptionId": "section-5-q29-a",
        "explanation": ".collect() возвращает все элементы распределенного набора данных в память драйвера.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q30",
        "sectionId": "section-5",
        "order": 30,
        "text": "Что произойдет с TF-IDF значением для слова, которое встречается во всех документах корпуса?",
        "options": [
          {
            "id": "section-5-q30-a",
            "label": "а",
            "text": "В классической формуле без сглаживания будет равно нулю"
          },
          {
            "id": "section-5-q30-b",
            "label": "б",
            "text": "Будет максимально возможным"
          },
          {
            "id": "section-5-q30-v",
            "label": "в",
            "text": "Будет зависеть только от частоты в документе"
          },
          {
            "id": "section-5-q30-g",
            "label": "г",
            "text": "Станет отрицательным"
          }
        ],
        "correctOptionId": "section-5-q30-a",
        "explanation": "слово, встречающееся во всех документах, плохо различает документы, поэтому его IDF минимален.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "scikit-learn TF-IDF documentation"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-5-q31",
        "sectionId": "section-5",
        "order": 31,
        "text": "Что является основной целью NLP?",
        "options": [
          {
            "id": "section-5-q31-a",
            "label": "а",
            "text": "Автоматическая обработка, анализ и генерация естественного языка"
          },
          {
            "id": "section-5-q31-b",
            "label": "б",
            "text": "Только сортировка чисел"
          },
          {
            "id": "section-5-q31-v",
            "label": "в",
            "text": "Только проектирование реляционных таблиц"
          },
          {
            "id": "section-5-q31-g",
            "label": "г",
            "text": "Только верстка HTML-страниц"
          }
        ],
        "correctOptionId": "section-5-q31-a",
        "explanation": "NLP работает с человеческим языком: текстом, речью, смыслом, сущностями и генерацией.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q32",
        "sectionId": "section-5",
        "order": 32,
        "text": "Что такое токенизация?",
        "options": [
          {
            "id": "section-5-q32-a",
            "label": "а",
            "text": "Разбиение текста на элементы, например слова, подслова или символы"
          },
          {
            "id": "section-5-q32-b",
            "label": "б",
            "text": "Удаление всех документов из корпуса"
          },
          {
            "id": "section-5-q32-v",
            "label": "в",
            "text": "Построение SQL-индекса"
          },
          {
            "id": "section-5-q32-g",
            "label": "г",
            "text": "Сжатие изображения"
          }
        ],
        "correctOptionId": "section-5-q32-a",
        "explanation": "большинство NLP-моделей работают не с исходной строкой целиком, а с последовательностью токенов.",
        "sourceRefs": [
          "общая информация.md",
          "spaCy 101"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-5-spacy-101"
        ]
      },
      {
        "id": "section-5-q33",
        "sectionId": "section-5",
        "order": 33,
        "text": "Зачем часто приводят текст к нижнему регистру?",
        "options": [
          {
            "id": "section-5-q33-a",
            "label": "а",
            "text": "Чтобы уменьшить число разных форм одного и того же слова"
          },
          {
            "id": "section-5-q33-b",
            "label": "б",
            "text": "Чтобы увеличить размер словаря"
          },
          {
            "id": "section-5-q33-v",
            "label": "в",
            "text": "Чтобы заменить все слова числами `0`"
          },
          {
            "id": "section-5-q33-g",
            "label": "г",
            "text": "Чтобы удалить пунктуацию вместе с буквами"
          }
        ],
        "correctOptionId": "section-5-q33-a",
        "explanation": "Москва и москва могут считаться одним признаком, если регистр не важен для задачи.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn text feature extraction"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q34",
        "sectionId": "section-5",
        "order": 34,
        "text": "Что такое стоп-слова?",
        "options": [
          {
            "id": "section-5-q34-a",
            "label": "а",
            "text": "Частые служебные слова, которые иногда удаляют как малоинформативные"
          },
          {
            "id": "section-5-q34-b",
            "label": "б",
            "text": "Только неизвестные слова"
          },
          {
            "id": "section-5-q34-v",
            "label": "в",
            "text": "Только имена собственные"
          },
          {
            "id": "section-5-q34-g",
            "label": "г",
            "text": "Только слова с ошибками"
          }
        ],
        "correctOptionId": "section-5-q34-a",
        "explanation": "слова вроде \"и\", \"в\", \"на\" часто встречаются во многих документах и могут давать мало пользы для поиска или классификации.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn text feature extraction"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q35",
        "sectionId": "section-5",
        "order": 35,
        "text": "Чем лемматизация отличается от стемминга?",
        "options": [
          {
            "id": "section-5-q35-a",
            "label": "а",
            "text": "Лемматизация приводит слово к словарной форме, а стемминг обычно обрезает основу эвристически"
          },
          {
            "id": "section-5-q35-b",
            "label": "б",
            "text": "Лемматизация всегда удаляет документ"
          },
          {
            "id": "section-5-q35-v",
            "label": "в",
            "text": "Стемминг всегда использует нейронную сеть"
          },
          {
            "id": "section-5-q35-g",
            "label": "г",
            "text": "Эти термины полностью означают одно и то же"
          }
        ],
        "correctOptionId": "section-5-q35-a",
        "explanation": "лемматизация обычно учитывает морфологию, а стемминг может вернуть несуществующую в словаре основу.",
        "sourceRefs": [
          "общая информация.md",
          "spaCy 101"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-5-spacy-101"
        ]
      },
      {
        "id": "section-5-q36",
        "sectionId": "section-5",
        "order": 36,
        "text": "Для чего в обработке текста часто используют регулярные выражения?",
        "options": [
          {
            "id": "section-5-q36-a",
            "label": "а",
            "text": "Для поиска и замены шаблонов, например email, дат или лишних пробелов"
          },
          {
            "id": "section-5-q36-b",
            "label": "б",
            "text": "Для обучения BERT с нуля"
          },
          {
            "id": "section-5-q36-v",
            "label": "в",
            "text": "Для построения видеокарты"
          },
          {
            "id": "section-5-q36-g",
            "label": "г",
            "text": "Для создания внешнего ключа в SQL"
          }
        ],
        "correctOptionId": "section-5-q36-a",
        "explanation": "регулярные выражения удобны для правиловой очистки и извлечения фрагментов текста.",
        "sourceRefs": [
          "общая информация.md",
          "Python re documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q37",
        "sectionId": "section-5",
        "order": 37,
        "text": "Что такое Bag of Words?",
        "options": [
          {
            "id": "section-5-q37-a",
            "label": "а",
            "text": "Представление текста через частоты или наличие слов без учета полного порядка слов"
          },
          {
            "id": "section-5-q37-b",
            "label": "б",
            "text": "Нейросеть с механизмом внимания"
          },
          {
            "id": "section-5-q37-v",
            "label": "в",
            "text": "Алгоритм сжатия XML"
          },
          {
            "id": "section-5-q37-g",
            "label": "г",
            "text": "Метод генерации изображений"
          }
        ],
        "correctOptionId": "section-5-q37-a",
        "explanation": "Bag of Words строит вектор признаков по словарю корпуса.",
        "sourceRefs": [
          "общая информация.md",
          "scikit-learn text feature extraction"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q38",
        "sectionId": "section-5",
        "order": 38,
        "text": "Почему матрица Bag of Words обычно разреженная?",
        "options": [
          {
            "id": "section-5-q38-a",
            "label": "а",
            "text": "Каждый документ содержит только небольшую часть словаря"
          },
          {
            "id": "section-5-q38-b",
            "label": "б",
            "text": "Все слова встречаются во всех документах"
          },
          {
            "id": "section-5-q38-v",
            "label": "в",
            "text": "В ней запрещены нули"
          },
          {
            "id": "section-5-q38-g",
            "label": "г",
            "text": "Она хранит только изображения"
          }
        ],
        "correctOptionId": "section-5-q38-a",
        "explanation": "при большом словаре большинство признаков для одного документа равны нулю.",
        "sourceRefs": [
          "scikit-learn text feature extraction"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q39",
        "sectionId": "section-5",
        "order": 39,
        "text": "Что означает параметр ngram_range=(1, 2) в CountVectorizer?",
        "options": [
          {
            "id": "section-5-q39-a",
            "label": "а",
            "text": "Использовать униграммы и биграммы"
          },
          {
            "id": "section-5-q39-b",
            "label": "б",
            "text": "Использовать только два документа"
          },
          {
            "id": "section-5-q39-v",
            "label": "в",
            "text": "Удалить все слова длиной 1 и 2"
          },
          {
            "id": "section-5-q39-g",
            "label": "г",
            "text": "Ограничить текст двумя символами"
          }
        ],
        "correctOptionId": "section-5-q39-a",
        "explanation": "первая граница задает минимальный размер n-граммы, вторая - максимальный.",
        "sourceRefs": [
          "scikit-learn CountVectorizer documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q40",
        "sectionId": "section-5",
        "order": 40,
        "text": "Для чего нужен параметр max_features в векторизаторе?",
        "options": [
          {
            "id": "section-5-q40-a",
            "label": "а",
            "text": "Ограничить размер словаря наиболее важными или частотными признаками"
          },
          {
            "id": "section-5-q40-b",
            "label": "б",
            "text": "Указать число классов в модели"
          },
          {
            "id": "section-5-q40-v",
            "label": "в",
            "text": "Удалить все короткие слова"
          },
          {
            "id": "section-5-q40-g",
            "label": "г",
            "text": "Задать число эпох обучения LSTM"
          }
        ],
        "correctOptionId": "section-5-q40-a",
        "explanation": "ограничение словаря помогает контролировать память и размерность признаков.",
        "sourceRefs": [
          "scikit-learn text feature extraction"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q41",
        "sectionId": "section-5",
        "order": 41,
        "text": "Что делает параметр min_df в CountVectorizer или TfidfVectorizer?",
        "options": [
          {
            "id": "section-5-q41-a",
            "label": "а",
            "text": "Отбрасывает термины, встречающиеся слишком редко"
          },
          {
            "id": "section-5-q41-b",
            "label": "б",
            "text": "Отбрасывает самые длинные документы"
          },
          {
            "id": "section-5-q41-v",
            "label": "в",
            "text": "Задает минимальный learning rate"
          },
          {
            "id": "section-5-q41-g",
            "label": "г",
            "text": "Включает GPU"
          }
        ],
        "correctOptionId": "section-5-q41-a",
        "explanation": "min_df задает минимальную документную частоту термина.",
        "sourceRefs": [
          "scikit-learn CountVectorizer documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q42",
        "sectionId": "section-5",
        "order": 42,
        "text": "Что делает параметр max_df?",
        "options": [
          {
            "id": "section-5-q42-a",
            "label": "а",
            "text": "Отбрасывает термины, встречающиеся слишком часто во многих документах"
          },
          {
            "id": "section-5-q42-b",
            "label": "б",
            "text": "Увеличивает число слоев модели"
          },
          {
            "id": "section-5-q42-v",
            "label": "в",
            "text": "Сохраняет все термины без фильтрации"
          },
          {
            "id": "section-5-q42-g",
            "label": "г",
            "text": "Меняет кодировку файла"
          }
        ],
        "correctOptionId": "section-5-q42-a",
        "explanation": "слишком частые слова часто являются общими и плохо различают документы.",
        "sourceRefs": [
          "scikit-learn CountVectorizer documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q43",
        "sectionId": "section-5",
        "order": 43,
        "text": "Какая мера часто используется для сравнения текстовых векторов по направлению?",
        "options": [
          {
            "id": "section-5-q43-a",
            "label": "а",
            "text": "Cosine similarity"
          },
          {
            "id": "section-5-q43-b",
            "label": "б",
            "text": "Среднее арифметическое индексов строк"
          },
          {
            "id": "section-5-q43-v",
            "label": "в",
            "text": "Количество HTML-тегов"
          },
          {
            "id": "section-5-q43-g",
            "label": "г",
            "text": "Размер файла в байтах"
          }
        ],
        "correctOptionId": "section-5-q43-a",
        "explanation": "косинусная близость сравнивает угол между векторами и часто применяется для TF-IDF и embeddings.",
        "sourceRefs": [
          "scikit-learn pairwise metrics",
          "Hugging Face"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q44",
        "sectionId": "section-5",
        "order": 44,
        "text": "Что такое инвертированный индекс?",
        "options": [
          {
            "id": "section-5-q44-a",
            "label": "а",
            "text": "Структура, которая хранит для термина список документов, где он встречается"
          },
          {
            "id": "section-5-q44-b",
            "label": "б",
            "text": "Таблица умножения токенов"
          },
          {
            "id": "section-5-q44-v",
            "label": "в",
            "text": "Модель генерации текста"
          },
          {
            "id": "section-5-q44-g",
            "label": "г",
            "text": "Файл с изображениями"
          }
        ],
        "correctOptionId": "section-5-q44-a",
        "explanation": "инвертированный индекс позволяет быстро находить документы по словам запроса.",
        "sourceRefs": [
          "Elasticsearch documentation",
          "PostgreSQL Full Text Search"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q45",
        "sectionId": "section-5",
        "order": 45,
        "text": "Для чего нужен полнотекстовый индекс?",
        "options": [
          {
            "id": "section-5-q45-a",
            "label": "а",
            "text": "Для ускорения поиска по словам и фразам в текстовых полях"
          },
          {
            "id": "section-5-q45-b",
            "label": "б",
            "text": "Для ускорения только арифметики с числами"
          },
          {
            "id": "section-5-q45-v",
            "label": "в",
            "text": "Для удаления стоп-слов из Python-кода"
          },
          {
            "id": "section-5-q45-g",
            "label": "г",
            "text": "Для генерации CSS"
          }
        ],
        "correctOptionId": "section-5-q45-a",
        "explanation": "полнотекстовый индекс хранит подготовленное представление текста для эффективного поиска.",
        "sourceRefs": [
          "PostgreSQL Full Text Search",
          "Elasticsearch documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q46",
        "sectionId": "section-5",
        "order": 46,
        "text": "Что оценивает BM25?",
        "options": [
          {
            "id": "section-5-q46-a",
            "label": "а",
            "text": "Релевантность документа запросу с учетом частоты термина, длины документа и распространенности термина"
          },
          {
            "id": "section-5-q46-b",
            "label": "б",
            "text": "Только скорость GPU"
          },
          {
            "id": "section-5-q46-v",
            "label": "в",
            "text": "Только количество классов в датасете"
          },
          {
            "id": "section-5-q46-g",
            "label": "г",
            "text": "Только число параметров LSTM"
          }
        ],
        "correctOptionId": "section-5-q46-a",
        "explanation": "BM25 является классической функцией ранжирования в полнотекстовом поиске.",
        "sourceRefs": [
          "Elasticsearch similarity documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q47",
        "sectionId": "section-5",
        "order": 47,
        "text": "Что такое булев поиск?",
        "options": [
          {
            "id": "section-5-q47-a",
            "label": "а",
            "text": "Поиск с логическими операторами вроде `AND`, `OR`, `NOT`"
          },
          {
            "id": "section-5-q47-b",
            "label": "б",
            "text": "Поиск только по векторам BERT"
          },
          {
            "id": "section-5-q47-v",
            "label": "в",
            "text": "Поиск без условий"
          },
          {
            "id": "section-5-q47-g",
            "label": "г",
            "text": "Поиск только в изображениях"
          }
        ],
        "correctOptionId": "section-5-q47-a",
        "explanation": "булевы операторы задают строгие условия наличия или отсутствия терминов.",
        "sourceRefs": [
          "Elasticsearch query documentation",
          "PostgreSQL Full Text Search"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q48",
        "sectionId": "section-5",
        "order": 48,
        "text": "Что такое фразовый поиск?",
        "options": [
          {
            "id": "section-5-q48-a",
            "label": "а",
            "text": "Поиск слов в заданном порядке и близости друг к другу"
          },
          {
            "id": "section-5-q48-b",
            "label": "б",
            "text": "Поиск любого одного символа"
          },
          {
            "id": "section-5-q48-v",
            "label": "в",
            "text": "Поиск только по метаданным файла"
          },
          {
            "id": "section-5-q48-g",
            "label": "г",
            "text": "Поиск случайного документа"
          }
        ],
        "correctOptionId": "section-5-q48-a",
        "explanation": "фразовый поиск учитывает порядок слов, например запрос \"машинное обучение\".",
        "sourceRefs": [
          "Elasticsearch full-text queries"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q49",
        "sectionId": "section-5",
        "order": 49,
        "text": "Что такое fuzzy search?",
        "options": [
          {
            "id": "section-5-q49-a",
            "label": "а",
            "text": "Поиск с учетом небольших опечаток или отличий в написании"
          },
          {
            "id": "section-5-q49-b",
            "label": "б",
            "text": "Поиск только точного полного совпадения"
          },
          {
            "id": "section-5-q49-v",
            "label": "в",
            "text": "Поиск только по числам"
          },
          {
            "id": "section-5-q49-g",
            "label": "г",
            "text": "Поиск без индекса и без запроса"
          }
        ],
        "correctOptionId": "section-5-q49-a",
        "explanation": "fuzzy-поиск использует расстояние редактирования и может находить близкие варианты слова.",
        "sourceRefs": [
          "Elasticsearch fuzzy query documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q50",
        "sectionId": "section-5",
        "order": 50,
        "text": "Что такое analyzer в поисковой системе вроде Elasticsearch?",
        "options": [
          {
            "id": "section-5-q50-a",
            "label": "а",
            "text": "Компонент, который превращает текст в токены и применяет фильтры нормализации"
          },
          {
            "id": "section-5-q50-b",
            "label": "б",
            "text": "Компонент для обучения LSTM"
          },
          {
            "id": "section-5-q50-v",
            "label": "в",
            "text": "Таблица с первичным ключом"
          },
          {
            "id": "section-5-q50-g",
            "label": "г",
            "text": "Алгоритм сортировки массива"
          }
        ],
        "correctOptionId": "section-5-q50-a",
        "explanation": "analyzer обычно включает tokenizer и token filters, например lowercase или stemming.",
        "sourceRefs": [
          "Elasticsearch analysis documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q51",
        "sectionId": "section-5",
        "order": 51,
        "text": "Зачем стемминг или лемматизация применяются в текстовом поиске?",
        "options": [
          {
            "id": "section-5-q51-a",
            "label": "а",
            "text": "Чтобы находить разные формы одного слова по общей основе или лемме"
          },
          {
            "id": "section-5-q51-b",
            "label": "б",
            "text": "Чтобы удалить все существительные"
          },
          {
            "id": "section-5-q51-v",
            "label": "в",
            "text": "Чтобы заменить поиск генерацией изображения"
          },
          {
            "id": "section-5-q51-g",
            "label": "г",
            "text": "Чтобы отключить индекс"
          }
        ],
        "correctOptionId": "section-5-q51-a",
        "explanation": "запрос \"купить\" может быть связан с формами \"купил\", \"купила\", \"покупка\" в зависимости от выбранного анализа.",
        "sourceRefs": [
          "PostgreSQL Full Text Search",
          "spaCy 101"
        ],
        "materialIds": [
          "mat-section-5-spacy-101"
        ]
      },
      {
        "id": "section-5-q52",
        "sectionId": "section-5",
        "order": 52,
        "text": "Что такое векторный поиск?",
        "options": [
          {
            "id": "section-5-q52-a",
            "label": "а",
            "text": "Поиск ближайших объектов в пространстве embeddings"
          },
          {
            "id": "section-5-q52-b",
            "label": "б",
            "text": "Поиск только по алфавитной сортировке"
          },
          {
            "id": "section-5-q52-v",
            "label": "в",
            "text": "Поиск только через регулярные выражения"
          },
          {
            "id": "section-5-q52-g",
            "label": "г",
            "text": "Поиск без числовых представлений"
          }
        ],
        "correctOptionId": "section-5-q52-a",
        "explanation": "документы и запросы кодируются векторами, а затем сравниваются по близости.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "Elasticsearch vector search documentation"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q53",
        "sectionId": "section-5",
        "order": 53,
        "text": "Что такое гибридный поиск?",
        "options": [
          {
            "id": "section-5-q53-a",
            "label": "а",
            "text": "Комбинация лексического поиска и семантического векторного поиска"
          },
          {
            "id": "section-5-q53-b",
            "label": "б",
            "text": "Только поиск по точному `id`"
          },
          {
            "id": "section-5-q53-v",
            "label": "в",
            "text": "Только сортировка документов по дате"
          },
          {
            "id": "section-5-q53-g",
            "label": "г",
            "text": "Только удаление стоп-слов"
          }
        ],
        "correctOptionId": "section-5-q53-a",
        "explanation": "гибридный подход объединяет сильные стороны BM25 и embeddings.",
        "sourceRefs": [
          "Elasticsearch documentation",
          "Hugging Face"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q54",
        "sectionId": "section-5",
        "order": 54,
        "text": "Для чего нужен reranking в поисковом пайплайне?",
        "options": [
          {
            "id": "section-5-q54-a",
            "label": "а",
            "text": "Чтобы переупорядочить найденные кандидаты более точной моделью релевантности"
          },
          {
            "id": "section-5-q54-b",
            "label": "б",
            "text": "Чтобы удалить все результаты поиска"
          },
          {
            "id": "section-5-q54-v",
            "label": "в",
            "text": "Чтобы заменить документы случайными токенами"
          },
          {
            "id": "section-5-q54-g",
            "label": "г",
            "text": "Чтобы изменить кодировку файла"
          }
        ],
        "correctOptionId": "section-5-q54-a",
        "explanation": "первый этап быстро находит кандидатов, а reranker точнее оценивает их соответствие запросу.",
        "sourceRefs": [
          "Hugging Face sentence-transformers/reranking materials"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q55",
        "sectionId": "section-5",
        "order": 55,
        "text": "Что такое chunking в RAG?",
        "options": [
          {
            "id": "section-5-q55-a",
            "label": "а",
            "text": "Разбиение документов на фрагменты перед индексированием"
          },
          {
            "id": "section-5-q55-b",
            "label": "б",
            "text": "Удаление всех документов из базы"
          },
          {
            "id": "section-5-q55-v",
            "label": "в",
            "text": "Компиляция модели в бинарный файл"
          },
          {
            "id": "section-5-q55-g",
            "label": "г",
            "text": "Перевод SQL в HTML"
          }
        ],
        "correctOptionId": "section-5-q55-a",
        "explanation": "LLM и embedding-модели имеют ограничения по длине, поэтому длинные документы делят на фрагменты.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face RAG materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q56",
        "sectionId": "section-5",
        "order": 56,
        "text": "Зачем при chunking иногда используют overlap?",
        "options": [
          {
            "id": "section-5-q56-a",
            "label": "а",
            "text": "Чтобы не потерять смысл на границе соседних фрагментов"
          },
          {
            "id": "section-5-q56-b",
            "label": "б",
            "text": "Чтобы каждый документ стал пустым"
          },
          {
            "id": "section-5-q56-v",
            "label": "в",
            "text": "Чтобы уменьшить корпус до одного слова"
          },
          {
            "id": "section-5-q56-g",
            "label": "г",
            "text": "Чтобы отключить поиск"
          }
        ],
        "correctOptionId": "section-5-q56-a",
        "explanation": "перекрытие сохраняет часть контекста, если важная фраза попала на границу чанков.",
        "sourceRefs": [
          "Hugging Face RAG materials"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q57",
        "sectionId": "section-5",
        "order": 57,
        "text": "Что такое sentence embedding?",
        "options": [
          {
            "id": "section-5-q57-a",
            "label": "а",
            "text": "Векторное представление предложения или фрагмента текста"
          },
          {
            "id": "section-5-q57-b",
            "label": "б",
            "text": "Список всех символов Unicode"
          },
          {
            "id": "section-5-q57-v",
            "label": "в",
            "text": "Только частота одной буквы"
          },
          {
            "id": "section-5-q57-g",
            "label": "г",
            "text": "Графическая схема предложения"
          }
        ],
        "correctOptionId": "section-5-q57-a",
        "explanation": "sentence embedding позволяет сравнивать смысловую близость предложений или документов.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "sentence-transformers documentation"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q58",
        "sectionId": "section-5",
        "order": 58,
        "text": "Чем контекстуальные эмбеддинги отличаются от статичных?",
        "options": [
          {
            "id": "section-5-q58-a",
            "label": "а",
            "text": "Они зависят от окружения слова в конкретном предложении"
          },
          {
            "id": "section-5-q58-b",
            "label": "б",
            "text": "Они всегда имеют размер один"
          },
          {
            "id": "section-5-q58-v",
            "label": "в",
            "text": "Они не используют токены"
          },
          {
            "id": "section-5-q58-g",
            "label": "г",
            "text": "Они применяются только к числам"
          }
        ],
        "correctOptionId": "section-5-q58-a",
        "explanation": "слово \"лук\" в разных контекстах может получить разные представления в BERT-подобной модели.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q59",
        "sectionId": "section-5",
        "order": 59,
        "text": "Что делает модель Word2Vec Skip-Gram?",
        "options": [
          {
            "id": "section-5-q59-a",
            "label": "а",
            "text": "По целевому слову предсказывает контекстные слова"
          },
          {
            "id": "section-5-q59-b",
            "label": "б",
            "text": "По контексту предсказывает целевое слово"
          },
          {
            "id": "section-5-q59-v",
            "label": "в",
            "text": "Сортирует документы по дате"
          },
          {
            "id": "section-5-q59-g",
            "label": "г",
            "text": "Выполняет SQL JOIN"
          }
        ],
        "correctOptionId": "section-5-q59-a",
        "explanation": "Skip-Gram учится предсказывать соседние слова по текущему слову.",
        "sourceRefs": [
          "общая информация.md",
          "Word2Vec materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q60",
        "sectionId": "section-5",
        "order": 60,
        "text": "Что делает модель Word2Vec CBOW?",
        "options": [
          {
            "id": "section-5-q60-a",
            "label": "а",
            "text": "По контексту предсказывает целевое слово"
          },
          {
            "id": "section-5-q60-b",
            "label": "б",
            "text": "По целевому слову предсказывает только id документа"
          },
          {
            "id": "section-5-q60-v",
            "label": "в",
            "text": "Генерирует HTML"
          },
          {
            "id": "section-5-q60-g",
            "label": "г",
            "text": "Выполняет стемминг регулярным выражением"
          }
        ],
        "correctOptionId": "section-5-q60-a",
        "explanation": "CBOW использует окружающие слова для предсказания центрального слова.",
        "sourceRefs": [
          "общая информация.md",
          "Word2Vec materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q61",
        "sectionId": "section-5",
        "order": 61,
        "text": "Что характерно для GloVe?",
        "options": [
          {
            "id": "section-5-q61-a",
            "label": "а",
            "text": "Использование глобальной статистики совместной встречаемости слов"
          },
          {
            "id": "section-5-q61-b",
            "label": "б",
            "text": "Использование только сверточных фильтров для изображений"
          },
          {
            "id": "section-5-q61-v",
            "label": "в",
            "text": "Обязательная генерация JSON-ответов"
          },
          {
            "id": "section-5-q61-g",
            "label": "г",
            "text": "Полный отказ от векторных представлений"
          }
        ],
        "correctOptionId": "section-5-q61-a",
        "explanation": "GloVe обучает векторы на матрице co-occurrence, отражающей совместные появления слов.",
        "sourceRefs": [
          "общая информация.md",
          "GloVe project materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q62",
        "sectionId": "section-5",
        "order": 62,
        "text": "Какая обучающая задача характерна для BERT?",
        "options": [
          {
            "id": "section-5-q62-a",
            "label": "а",
            "text": "Masked Language Modeling"
          },
          {
            "id": "section-5-q62-b",
            "label": "б",
            "text": "Только предсказание следующего пикселя"
          },
          {
            "id": "section-5-q62-v",
            "label": "в",
            "text": "Только сортировка строк"
          },
          {
            "id": "section-5-q62-g",
            "label": "г",
            "text": "Только подсчет SQL-строк"
          }
        ],
        "correctOptionId": "section-5-q62-a",
        "explanation": "BERT обучается восстанавливать замаскированные токены с учетом двустороннего контекста.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "BERT paper"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q63",
        "sectionId": "section-5",
        "order": 63,
        "text": "Какая обучающая идея характерна для GPT-подобных моделей?",
        "options": [
          {
            "id": "section-5-q63-a",
            "label": "а",
            "text": "Авторегрессионное предсказание следующего токена"
          },
          {
            "id": "section-5-q63-b",
            "label": "б",
            "text": "Только кластеризация документов без порядка"
          },
          {
            "id": "section-5-q63-v",
            "label": "в",
            "text": "Только восстановление удаленных SQL-индексов"
          },
          {
            "id": "section-5-q63-g",
            "label": "г",
            "text": "Только распознавание лиц"
          }
        ],
        "correctOptionId": "section-5-q63-a",
        "explanation": "decoder-only модели генерируют текст слева направо, предсказывая следующий токен.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q64",
        "sectionId": "section-5",
        "order": 64,
        "text": "Что делает self-attention в трансформере?",
        "options": [
          {
            "id": "section-5-q64-a",
            "label": "а",
            "text": "Позволяет токенам учитывать другие токены той же последовательности"
          },
          {
            "id": "section-5-q64-b",
            "label": "б",
            "text": "Удаляет все короткие слова"
          },
          {
            "id": "section-5-q64-v",
            "label": "в",
            "text": "Запускает `.collect()` в Spark"
          },
          {
            "id": "section-5-q64-g",
            "label": "г",
            "text": "Создает первичный ключ"
          }
        ],
        "correctOptionId": "section-5-q64-a",
        "explanation": "механизм внимания вычисляет зависимости между токенами и помогает учитывать контекст.",
        "sourceRefs": [
          "Hugging Face Transformers documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q65",
        "sectionId": "section-5",
        "order": 65,
        "text": "Что такое positional encoding?",
        "options": [
          {
            "id": "section-5-q65-a",
            "label": "а",
            "text": "Способ добавить модели информацию о порядке токенов"
          },
          {
            "id": "section-5-q65-b",
            "label": "б",
            "text": "Способ удалить пунктуацию"
          },
          {
            "id": "section-5-q65-v",
            "label": "в",
            "text": "Способ посчитать accuracy"
          },
          {
            "id": "section-5-q65-g",
            "label": "г",
            "text": "Способ выполнить SQL-группировку"
          }
        ],
        "correctOptionId": "section-5-q65-a",
        "explanation": "self-attention сам по себе не задает порядок, поэтому трансформеру нужна информация о позициях.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "Transformer materials"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q66",
        "sectionId": "section-5",
        "order": 66,
        "text": "Для каких задач часто используют encoder-only модели вроде BERT?",
        "options": [
          {
            "id": "section-5-q66-a",
            "label": "а",
            "text": "Классификация, NER, извлечение признаков и поиск представлений"
          },
          {
            "id": "section-5-q66-b",
            "label": "б",
            "text": "Только генерация длинного текста слева направо"
          },
          {
            "id": "section-5-q66-v",
            "label": "в",
            "text": "Только рендеринг HTML"
          },
          {
            "id": "section-5-q66-g",
            "label": "г",
            "text": "Только архивация файлов"
          }
        ],
        "correctOptionId": "section-5-q66-a",
        "explanation": "encoder хорошо строит контекстное представление входного текста для задач понимания.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q67",
        "sectionId": "section-5",
        "order": 67,
        "text": "Для каких задач часто используют decoder-only модели вроде GPT?",
        "options": [
          {
            "id": "section-5-q67-a",
            "label": "а",
            "text": "Генерация и продолжение текста"
          },
          {
            "id": "section-5-q67-b",
            "label": "б",
            "text": "Только точный поиск по первичному ключу"
          },
          {
            "id": "section-5-q67-v",
            "label": "в",
            "text": "Только токенизация без модели"
          },
          {
            "id": "section-5-q67-g",
            "label": "г",
            "text": "Только построение инвертированного индекса"
          }
        ],
        "correctOptionId": "section-5-q67-a",
        "explanation": "decoder-only архитектура естественно предсказывает следующий токен и генерирует продолжение.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q68",
        "sectionId": "section-5",
        "order": 68,
        "text": "Для чего подходят encoder-decoder модели вроде T5?",
        "options": [
          {
            "id": "section-5-q68-a",
            "label": "а",
            "text": "Задачи преобразования текста в текст: перевод, суммаризация, вопрос-ответ"
          },
          {
            "id": "section-5-q68-b",
            "label": "б",
            "text": "Только сортировка массивов"
          },
          {
            "id": "section-5-q68-v",
            "label": "в",
            "text": "Только хранение логов"
          },
          {
            "id": "section-5-q68-g",
            "label": "г",
            "text": "Только удаление повторов в таблице"
          }
        ],
        "correctOptionId": "section-5-q68-a",
        "explanation": "encoder кодирует вход, а decoder генерирует выходную последовательность.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q69",
        "sectionId": "section-5",
        "order": 69,
        "text": "Что обычно делает параметр temperature при генерации текста?",
        "options": [
          {
            "id": "section-5-q69-a",
            "label": "а",
            "text": "Управляет случайностью распределения следующего токена"
          },
          {
            "id": "section-5-q69-b",
            "label": "б",
            "text": "Меняет физическую температуру сервера"
          },
          {
            "id": "section-5-q69-v",
            "label": "в",
            "text": "Удаляет стоп-слова"
          },
          {
            "id": "section-5-q69-g",
            "label": "г",
            "text": "Задает число документов в корпусе"
          }
        ],
        "correctOptionId": "section-5-q69-a",
        "explanation": "более высокая temperature обычно делает генерацию разнообразнее, но менее предсказуемой.",
        "sourceRefs": [
          "Hugging Face generation documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q70",
        "sectionId": "section-5",
        "order": 70,
        "text": "Что такое hallucination в контексте LLM?",
        "options": [
          {
            "id": "section-5-q70-a",
            "label": "а",
            "text": "Уверенная генерация фактически неверной или неподтвержденной информации"
          },
          {
            "id": "section-5-q70-b",
            "label": "б",
            "text": "Ускорение поиска по индексу"
          },
          {
            "id": "section-5-q70-v",
            "label": "в",
            "text": "Приведение слов к леммам"
          },
          {
            "id": "section-5-q70-g",
            "label": "г",
            "text": "Нормальная форма базы данных"
          }
        ],
        "correctOptionId": "section-5-q70-a",
        "explanation": "модель может сгенерировать правдоподобный, но ошибочный ответ, особенно без надежного контекста.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "RAG materials"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q71",
        "sectionId": "section-5",
        "order": 71,
        "text": "Что означает grounding ответа LLM?",
        "options": [
          {
            "id": "section-5-q71-a",
            "label": "а",
            "text": "Привязка ответа к предоставленным источникам или найденному контексту"
          },
          {
            "id": "section-5-q71-b",
            "label": "б",
            "text": "Случайная генерация без документов"
          },
          {
            "id": "section-5-q71-v",
            "label": "в",
            "text": "Удаление всех ссылок"
          },
          {
            "id": "section-5-q71-g",
            "label": "г",
            "text": "Замена русского текста латиницей"
          }
        ],
        "correctOptionId": "section-5-q71-a",
        "explanation": "grounded-ответ должен опираться на конкретные данные, а не только на параметры модели.",
        "sourceRefs": [
          "общая информация.md",
          "RAG materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q72",
        "sectionId": "section-5",
        "order": 72,
        "text": "Что такое prompt injection?",
        "options": [
          {
            "id": "section-5-q72-a",
            "label": "а",
            "text": "Попытка через пользовательский текст заставить модель нарушить инструкции или раскрыть данные"
          },
          {
            "id": "section-5-q72-b",
            "label": "б",
            "text": "Улучшение качества токенизации"
          },
          {
            "id": "section-5-q72-v",
            "label": "в",
            "text": "Вид стемминга"
          },
          {
            "id": "section-5-q72-g",
            "label": "г",
            "text": "Способ создать SQL-индекс"
          }
        ],
        "correctOptionId": "section-5-q72-a",
        "explanation": "вредоносный или специально составленный ввод может конфликтовать с системными правилами и данными приложения.",
        "sourceRefs": [
          "OWASP LLM guidance",
          "Hugging Face"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q73",
        "sectionId": "section-5",
        "order": 73,
        "text": "Что такое context window у LLM?",
        "options": [
          {
            "id": "section-5-q73-a",
            "label": "а",
            "text": "Максимальный объем токенов, который модель может учитывать во входе и выходе"
          },
          {
            "id": "section-5-q73-b",
            "label": "б",
            "text": "Размер окна браузера"
          },
          {
            "id": "section-5-q73-v",
            "label": "в",
            "text": "Количество документов в SQL-таблице"
          },
          {
            "id": "section-5-q73-g",
            "label": "г",
            "text": "Число классов классификатора"
          }
        ],
        "correctOptionId": "section-5-q73-a",
        "explanation": "если текст превышает контекстное окно, его нужно сокращать, разбивать или искать релевантные фрагменты.",
        "sourceRefs": [
          "Hugging Face NLP Course",
          "model documentation"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q74",
        "sectionId": "section-5",
        "order": 74,
        "text": "Что делает top-p sampling?",
        "options": [
          {
            "id": "section-5-q74-a",
            "label": "а",
            "text": "Ограничивает выбор следующего токена минимальным набором токенов с суммарной вероятностью `p`"
          },
          {
            "id": "section-5-q74-b",
            "label": "б",
            "text": "Выбирает всегда самый длинный токен"
          },
          {
            "id": "section-5-q74-v",
            "label": "в",
            "text": "Удаляет все вероятности"
          },
          {
            "id": "section-5-q74-g",
            "label": "г",
            "text": "Сортирует документы по алфавиту"
          }
        ],
        "correctOptionId": "section-5-q74-a",
        "explanation": "nucleus sampling выбирает из динамического множества наиболее вероятных токенов.",
        "sourceRefs": [
          "Hugging Face generation documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q75",
        "sectionId": "section-5",
        "order": 75,
        "text": "Чем fine-tuning отличается от prompting?",
        "options": [
          {
            "id": "section-5-q75-a",
            "label": "а",
            "text": "Fine-tuning меняет веса модели на обучающих данных, prompting меняет только входные инструкции"
          },
          {
            "id": "section-5-q75-b",
            "label": "б",
            "text": "Fine-tuning всегда удаляет модель"
          },
          {
            "id": "section-5-q75-v",
            "label": "в",
            "text": "Prompting требует обучения с нуля"
          },
          {
            "id": "section-5-q75-g",
            "label": "г",
            "text": "Эти подходы полностью одинаковы"
          }
        ],
        "correctOptionId": "section-5-q75-a",
        "explanation": "prompt управляет поведением через текст запроса, а fine-tuning дообучает параметры модели.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q76",
        "sectionId": "section-5",
        "order": 76,
        "text": "Что такое zero-shot классификация?",
        "options": [
          {
            "id": "section-5-q76-a",
            "label": "а",
            "text": "Классификация без обучающих примеров целевых классов в текущей задаче"
          },
          {
            "id": "section-5-q76-b",
            "label": "б",
            "text": "Классификация только нулей"
          },
          {
            "id": "section-5-q76-v",
            "label": "в",
            "text": "Обучение на миллионах размеченных примеров"
          },
          {
            "id": "section-5-q76-g",
            "label": "г",
            "text": "Удаление всех меток"
          }
        ],
        "correctOptionId": "section-5-q76-a",
        "explanation": "модель использует уже изученные знания и описание классов, а не локальную разметку.",
        "sourceRefs": [
          "Hugging Face zero-shot classification documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q77",
        "sectionId": "section-5",
        "order": 77,
        "text": "Что такое few-shot prompting?",
        "options": [
          {
            "id": "section-5-q77-a",
            "label": "а",
            "text": "Добавление нескольких примеров в prompt перед новым заданием"
          },
          {
            "id": "section-5-q77-b",
            "label": "б",
            "text": "Обучение модели без текста"
          },
          {
            "id": "section-5-q77-v",
            "label": "в",
            "text": "Полное удаление контекста"
          },
          {
            "id": "section-5-q77-g",
            "label": "г",
            "text": "Использование только SQL-запросов"
          }
        ],
        "correctOptionId": "section-5-q77-a",
        "explanation": "несколько демонстраций помогают модели понять формат и критерии ответа.",
        "sourceRefs": [
          "Hugging Face NLP Course"
        ],
        "materialIds": [
          "mat-section-5-hugging-face-nlp-course"
        ]
      },
      {
        "id": "section-5-q78",
        "sectionId": "section-5",
        "order": 78,
        "text": "Что такое NER?",
        "options": [
          {
            "id": "section-5-q78-a",
            "label": "а",
            "text": "Извлечение именованных сущностей, например людей, организаций, мест и дат"
          },
          {
            "id": "section-5-q78-b",
            "label": "б",
            "text": "Удаление всех чисел из текста"
          },
          {
            "id": "section-5-q78-v",
            "label": "в",
            "text": "Сортировка токенов по длине"
          },
          {
            "id": "section-5-q78-g",
            "label": "г",
            "text": "Подсчет количества документов в Spark"
          }
        ],
        "correctOptionId": "section-5-q78-a",
        "explanation": "NER помечает в тексте сущности заранее заданных типов.",
        "sourceRefs": [
          "общая информация.md",
          "spaCy 101",
          "Hugging Face token classification"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-5-spacy-101"
        ]
      },
      {
        "id": "section-5-q79",
        "sectionId": "section-5",
        "order": 79,
        "text": "Что такое анализ тональности?",
        "options": [
          {
            "id": "section-5-q79-a",
            "label": "а",
            "text": "Определение эмоциональной окраски текста, например позитивной, негативной или нейтральной"
          },
          {
            "id": "section-5-q79-b",
            "label": "б",
            "text": "Вычисление длины SQL-запроса"
          },
          {
            "id": "section-5-q79-v",
            "label": "в",
            "text": "Удаление всех эмодзи без классификации"
          },
          {
            "id": "section-5-q79-g",
            "label": "г",
            "text": "Построение дерева поиска"
          }
        ],
        "correctOptionId": "section-5-q79-a",
        "explanation": "sentiment analysis обычно формулируется как задача классификации текста.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face text classification"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q80",
        "sectionId": "section-5",
        "order": 80,
        "text": "Что такое LDA в тематическом моделировании?",
        "options": [
          {
            "id": "section-5-q80-a",
            "label": "а",
            "text": "Вероятностная модель, представляющая документы как смеси тем"
          },
          {
            "id": "section-5-q80-b",
            "label": "б",
            "text": "Алгоритм генерации HTML"
          },
          {
            "id": "section-5-q80-v",
            "label": "в",
            "text": "Вид полнотекстового индекса"
          },
          {
            "id": "section-5-q80-g",
            "label": "г",
            "text": "Только функция активации"
          }
        ],
        "correctOptionId": "section-5-q80-a",
        "explanation": "Latent Dirichlet Allocation ищет скрытые темы и распределения слов по темам.",
        "sourceRefs": [
          "scikit-learn topic extraction examples"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q81",
        "sectionId": "section-5",
        "order": 81,
        "text": "Чем extractive summarization отличается от abstractive summarization?",
        "options": [
          {
            "id": "section-5-q81-a",
            "label": "а",
            "text": "Extractive выбирает фрагменты исходного текста, abstractive генерирует новое изложение"
          },
          {
            "id": "section-5-q81-b",
            "label": "б",
            "text": "Extractive всегда переводит текст на другой язык"
          },
          {
            "id": "section-5-q81-v",
            "label": "в",
            "text": "Abstractive только считает слова"
          },
          {
            "id": "section-5-q81-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-5-q81-a",
        "explanation": "извлекающее суммирование копирует части текста, а абстрактивное может переформулировать содержание.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face summarization"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q82",
        "sectionId": "section-5",
        "order": 82,
        "text": "Для чего обычно используют BLEU?",
        "options": [
          {
            "id": "section-5-q82-a",
            "label": "а",
            "text": "Для оценки машинного перевода через совпадение n-грамм с эталоном"
          },
          {
            "id": "section-5-q82-b",
            "label": "б",
            "text": "Для оценки распознавания речи по словам"
          },
          {
            "id": "section-5-q82-v",
            "label": "в",
            "text": "Для измерения размера словаря"
          },
          {
            "id": "section-5-q82-g",
            "label": "г",
            "text": "Для подсчета SQL JOIN"
          }
        ],
        "correctOptionId": "section-5-q82-a",
        "explanation": "BLEU сравнивает n-граммы с эталонными переводами и часто применяется в машинном переводе.",
        "sourceRefs": [
          "общая информация.md",
          "NLP evaluation materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q83",
        "sectionId": "section-5",
        "order": 83,
        "text": "Для чего часто используют ROUGE?",
        "options": [
          {
            "id": "section-5-q83-a",
            "label": "а",
            "text": "Для оценки суммаризации через пересечение с эталонным резюме"
          },
          {
            "id": "section-5-q83-b",
            "label": "б",
            "text": "Для оценки только бинарной классификации"
          },
          {
            "id": "section-5-q83-v",
            "label": "в",
            "text": "Для поиска ближайших соседей"
          },
          {
            "id": "section-5-q83-g",
            "label": "г",
            "text": "Для измерения скорости Spark"
          }
        ],
        "correctOptionId": "section-5-q83-a",
        "explanation": "ROUGE оценивает, насколько хорошо summary покрывает элементы эталонного summary.",
        "sourceRefs": [
          "общая информация.md",
          "Hugging Face evaluation materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q84",
        "sectionId": "section-5",
        "order": 84,
        "text": "Что измеряет WER?",
        "options": [
          {
            "id": "section-5-q84-a",
            "label": "а",
            "text": "Word Error Rate, долю ошибок на уровне слов"
          },
          {
            "id": "section-5-q84-b",
            "label": "б",
            "text": "Количество тем в LDA"
          },
          {
            "id": "section-5-q84-v",
            "label": "в",
            "text": "Размер embedding-вектора"
          },
          {
            "id": "section-5-q84-g",
            "label": "г",
            "text": "Число документов в индексе"
          }
        ],
        "correctOptionId": "section-5-q84-a",
        "explanation": "WER часто используют для оценки распознавания речи и сравнения предсказанной фразы с эталоном.",
        "sourceRefs": [
          "общая информация.md",
          "NLP evaluation materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q85",
        "sectionId": "section-5",
        "order": 85,
        "text": "Почему accuracy может быть плохой метрикой при сильном дисбалансе классов?",
        "options": [
          {
            "id": "section-5-q85-a",
            "label": "а",
            "text": "Модель может часто угадывать доминирующий класс и получать высокую accuracy"
          },
          {
            "id": "section-5-q85-b",
            "label": "б",
            "text": "Accuracy нельзя считать для текста"
          },
          {
            "id": "section-5-q85-v",
            "label": "в",
            "text": "Accuracy всегда равна нулю"
          },
          {
            "id": "section-5-q85-g",
            "label": "г",
            "text": "Accuracy применима только к SQL"
          }
        ],
        "correctOptionId": "section-5-q85-a",
        "explanation": "при 95% негативных примеров модель, всегда выбирающая негативный класс, даст 95% accuracy, но будет бесполезна для редкого класса.",
        "sourceRefs": [
          "scikit-learn metrics"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q86",
        "sectionId": "section-5",
        "order": 86,
        "text": "Что отражает F1-score?",
        "options": [
          {
            "id": "section-5-q86-a",
            "label": "а",
            "text": "Гармоническое среднее precision и recall"
          },
          {
            "id": "section-5-q86-b",
            "label": "б",
            "text": "Только скорость обучения модели"
          },
          {
            "id": "section-5-q86-v",
            "label": "в",
            "text": "Только размер корпуса"
          },
          {
            "id": "section-5-q86-g",
            "label": "г",
            "text": "Только количество токенов в словаре"
          }
        ],
        "correctOptionId": "section-5-q86-a",
        "explanation": "F1 балансирует точность положительных предсказаний и полноту нахождения положительных объектов.",
        "sourceRefs": [
          "scikit-learn metrics"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q87",
        "sectionId": "section-5",
        "order": 87,
        "text": "Что показывает confusion matrix?",
        "options": [
          {
            "id": "section-5-q87-a",
            "label": "а",
            "text": "Количество верных и ошибочных предсказаний по классам"
          },
          {
            "id": "section-5-q87-b",
            "label": "б",
            "text": "Только размер embedding"
          },
          {
            "id": "section-5-q87-v",
            "label": "в",
            "text": "Только список стоп-слов"
          },
          {
            "id": "section-5-q87-g",
            "label": "г",
            "text": "Только порядок слов в документе"
          }
        ],
        "correctOptionId": "section-5-q87-a",
        "explanation": "матрица ошибок показывает, какие классы модель путает между собой.",
        "sourceRefs": [
          "scikit-learn metrics"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q88",
        "sectionId": "section-5",
        "order": 88,
        "text": "Что такое утечка данных при обучении текстовой модели?",
        "options": [
          {
            "id": "section-5-q88-a",
            "label": "а",
            "text": "Попадание информации из тестовой выборки или будущего в обучение"
          },
          {
            "id": "section-5-q88-b",
            "label": "б",
            "text": "Удаление пунктуации"
          },
          {
            "id": "section-5-q88-v",
            "label": "в",
            "text": "Применение токенизации"
          },
          {
            "id": "section-5-q88-g",
            "label": "г",
            "text": "Использование Unicode"
          }
        ],
        "correctOptionId": "section-5-q88-a",
        "explanation": "утечка завышает оценку качества, потому что модель получает недоступную в реальности информацию.",
        "sourceRefs": [
          "scikit-learn model evaluation documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q89",
        "sectionId": "section-5",
        "order": 89,
        "text": "Зачем нужен stratified split в классификации текста?",
        "options": [
          {
            "id": "section-5-q89-a",
            "label": "а",
            "text": "Чтобы сохранить пропорции классов в train и test"
          },
          {
            "id": "section-5-q89-b",
            "label": "б",
            "text": "Чтобы удалить редкие слова"
          },
          {
            "id": "section-5-q89-v",
            "label": "в",
            "text": "Чтобы отсортировать документы по длине"
          },
          {
            "id": "section-5-q89-g",
            "label": "г",
            "text": "Чтобы выполнить `.collect()`"
          }
        ],
        "correctOptionId": "section-5-q89-a",
        "explanation": "стратификация особенно важна при несбалансированных классах.",
        "sourceRefs": [
          "scikit-learn train_test_split documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q90",
        "sectionId": "section-5",
        "order": 90,
        "text": "Как можно бороться с дисбалансом классов в текстовой классификации?",
        "options": [
          {
            "id": "section-5-q90-a",
            "label": "а",
            "text": "Использовать веса классов, ресемплинг или подходящие метрики"
          },
          {
            "id": "section-5-q90-b",
            "label": "б",
            "text": "Удалить все признаки"
          },
          {
            "id": "section-5-q90-v",
            "label": "в",
            "text": "Оставить только самый частый класс"
          },
          {
            "id": "section-5-q90-g",
            "label": "г",
            "text": "Всегда использовать accuracy без анализа"
          }
        ],
        "correctOptionId": "section-5-q90-a",
        "explanation": "эти методы уменьшают влияние доминирующего класса и помогают оценивать редкий класс.",
        "sourceRefs": [
          "scikit-learn class imbalance materials"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q91",
        "sectionId": "section-5",
        "order": 91,
        "text": "Что делает операция .map() в Spark?",
        "options": [
          {
            "id": "section-5-q91-a",
            "label": "а",
            "text": "Применяет функцию к каждому элементу распределенного набора данных"
          },
          {
            "id": "section-5-q91-b",
            "label": "б",
            "text": "Собирает все данные на драйвер"
          },
          {
            "id": "section-5-q91-v",
            "label": "в",
            "text": "Удаляет кластер"
          },
          {
            "id": "section-5-q91-g",
            "label": "г",
            "text": "Выполняет SQL JOIN автоматически"
          }
        ],
        "correctOptionId": "section-5-q91-a",
        "explanation": ".map() является распределенным преобразованием и не переносит все данные на драйвер.",
        "sourceRefs": [
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q92",
        "sectionId": "section-5",
        "order": 92,
        "text": "Что делает операция .filter() в Spark?",
        "options": [
          {
            "id": "section-5-q92-a",
            "label": "а",
            "text": "Оставляет элементы, удовлетворяющие условию"
          },
          {
            "id": "section-5-q92-b",
            "label": "б",
            "text": "Всегда сортирует все данные"
          },
          {
            "id": "section-5-q92-v",
            "label": "в",
            "text": "Всегда собирает данные в один список Python"
          },
          {
            "id": "section-5-q92-g",
            "label": "г",
            "text": "Удаляет кодировку UTF-8"
          }
        ],
        "correctOptionId": "section-5-q92-a",
        "explanation": ".filter() применяет предикат к элементам RDD/DataFrame и оставляет подходящие.",
        "sourceRefs": [
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q93",
        "sectionId": "section-5",
        "order": 93,
        "text": "Что означает lazy evaluation в Spark?",
        "options": [
          {
            "id": "section-5-q93-a",
            "label": "а",
            "text": "Преобразования не выполняются сразу, а строят план до action-операции"
          },
          {
            "id": "section-5-q93-b",
            "label": "б",
            "text": "Spark всегда ничего не делает"
          },
          {
            "id": "section-5-q93-v",
            "label": "в",
            "text": "Все данные сразу копируются на драйвер"
          },
          {
            "id": "section-5-q93-g",
            "label": "г",
            "text": "Любой код выполняется только на одном ядре"
          }
        ],
        "correctOptionId": "section-5-q93-a",
        "explanation": "map и filter описывают вычисления, а реальные вычисления запускаются action-операциями вроде count или collect.",
        "sourceRefs": [
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q94",
        "sectionId": "section-5",
        "order": 94,
        "text": "Для чего используют кэширование (cache, persist) в Spark?",
        "options": [
          {
            "id": "section-5-q94-a",
            "label": "а",
            "text": "Чтобы переиспользовать промежуточные данные при повторных вычислениях"
          },
          {
            "id": "section-5-q94-b",
            "label": "б",
            "text": "Чтобы удалить все разделы RDD"
          },
          {
            "id": "section-5-q94-v",
            "label": "в",
            "text": "Чтобы заменить токенизацию лемматизацией"
          },
          {
            "id": "section-5-q94-g",
            "label": "г",
            "text": "Чтобы сохранить только последний документ"
          }
        ],
        "correctOptionId": "section-5-q94-a",
        "explanation": "кэширование может ускорить повторные проходы по одному и тому же корпусу.",
        "sourceRefs": [
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q95",
        "sectionId": "section-5",
        "order": 95,
        "text": "Что лучше сделать вместо .collect() для большого корпуса, если нужно узнать количество строк?",
        "options": [
          {
            "id": "section-5-q95-a",
            "label": "а",
            "text": "Использовать распределенную операцию вроде `.count()`"
          },
          {
            "id": "section-5-q95-b",
            "label": "б",
            "text": "Собрать весь корпус на драйвер и посчитать вручную"
          },
          {
            "id": "section-5-q95-v",
            "label": "в",
            "text": "Преобразовать все строки в HTML"
          },
          {
            "id": "section-5-q95-g",
            "label": "г",
            "text": "Удалить корпус"
          }
        ],
        "correctOptionId": "section-5-q95-a",
        "explanation": ".count() возвращает агрегированный результат, а не весь корпус в память драйвера.",
        "sourceRefs": [
          "Apache Spark RDD Programming Guide"
        ],
        "materialIds": [
          "mat-section-5-apache-spark-rdd-programming-guide"
        ]
      },
      {
        "id": "section-5-q96",
        "sectionId": "section-5",
        "order": 96,
        "text": "Какой подход подходит для чтения очень большого текстового файла?",
        "options": [
          {
            "id": "section-5-q96-a",
            "label": "а",
            "text": "Обрабатывать файл потоково или распределенно, не загружая целиком в память"
          },
          {
            "id": "section-5-q96-b",
            "label": "б",
            "text": "Всегда читать через `read()` целиком в одну строку"
          },
          {
            "id": "section-5-q96-v",
            "label": "в",
            "text": "Сначала скопировать файл в список Python сто раз"
          },
          {
            "id": "section-5-q96-g",
            "label": "г",
            "text": "Удалить переносы строк до чтения"
          }
        ],
        "correctOptionId": "section-5-q96-a",
        "explanation": "большие файлы могут не помещаться в оперативную память, поэтому нужны итеративное чтение, чанки или распределенная обработка.",
        "sourceRefs": [
          "общая информация.md",
          "Python file I/O",
          "Apache Spark"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q97",
        "sectionId": "section-5",
        "order": 97,
        "text": "Почему при работе с русским текстом важно явно учитывать кодировку?",
        "options": [
          {
            "id": "section-5-q97-a",
            "label": "а",
            "text": "Иначе можно получить ошибки чтения или некорректные символы"
          },
          {
            "id": "section-5-q97-b",
            "label": "б",
            "text": "Потому что русский текст нельзя хранить в файлах"
          },
          {
            "id": "section-5-q97-v",
            "label": "в",
            "text": "Потому что UTF-8 удаляет пробелы"
          },
          {
            "id": "section-5-q97-g",
            "label": "г",
            "text": "Потому что кодировка заменяет NLP-модель"
          }
        ],
        "correctOptionId": "section-5-q97-a",
        "explanation": "явное использование UTF-8 делает обработку русскоязычных файлов более предсказуемой.",
        "sourceRefs": [
          "общая информация.md",
          "Python Unicode documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-5-q98",
        "sectionId": "section-5",
        "order": 98,
        "text": "Почему для XML в RAG лучше использовать XML-парсер, а не только регулярные выражения?",
        "options": [
          {
            "id": "section-5-q98-a",
            "label": "а",
            "text": "Парсер учитывает структуру документа, вложенность и экранирование"
          },
          {
            "id": "section-5-q98-b",
            "label": "б",
            "text": "Регулярные выражения всегда обучают LLM"
          },
          {
            "id": "section-5-q98-v",
            "label": "в",
            "text": "XML нельзя читать программно"
          },
          {
            "id": "section-5-q98-g",
            "label": "г",
            "text": "Парсер удаляет все теги без возможности анализа"
          }
        ],
        "correctOptionId": "section-5-q98-a",
        "explanation": "XML является структурированным форматом, и парсер надежнее извлекает элементы и текст.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Python XML documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-5-q99",
        "sectionId": "section-5",
        "order": 99,
        "text": "Зачем обезличивать персональные данные перед анализом текстов?",
        "options": [
          {
            "id": "section-5-q99-a",
            "label": "а",
            "text": "Чтобы снизить риски утечки и нарушения приватности"
          },
          {
            "id": "section-5-q99-b",
            "label": "б",
            "text": "Чтобы увеличить количество ошибок модели"
          },
          {
            "id": "section-5-q99-v",
            "label": "в",
            "text": "Чтобы удалить все полезные признаки без причины"
          },
          {
            "id": "section-5-q99-g",
            "label": "г",
            "text": "Чтобы заменить поиск сортировкой"
          }
        ],
        "correctOptionId": "section-5-q99-a",
        "explanation": "тексты могут содержать имена, телефоны, адреса и другие чувствительные данные.",
        "sourceRefs": [
          "NLP privacy practices",
          "spaCy NER"
        ],
        "materialIds": []
      },
      {
        "id": "section-5-q100",
        "sectionId": "section-5",
        "order": 100,
        "text": "Какая метрика подходит для оценки качества поиска релевантных фрагментов в RAG?",
        "options": [
          {
            "id": "section-5-q100-a",
            "label": "а",
            "text": "Recall@k или Precision@k по найденным фрагментам"
          },
          {
            "id": "section-5-q100-b",
            "label": "б",
            "text": "Только температура генерации"
          },
          {
            "id": "section-5-q100-v",
            "label": "в",
            "text": "Только количество CSS-файлов"
          },
          {
            "id": "section-5-q100-g",
            "label": "г",
            "text": "Только размер HTML-страницы"
          }
        ],
        "correctOptionId": "section-5-q100-a",
        "explanation": "для retrieval-части важно измерять, попадают ли нужные документы в первые k результатов и насколько выдача точна.",
        "sourceRefs": [
          "общая информация.md",
          "information retrieval evaluation materials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      }
    ]
  },
  {
    "id": "section-6",
    "title": "Тема 6. Основы web-программирования: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_6_основы_web_программирования_100_тестовых_вопросов.md.",
    "order": 6,
    "questions": [
      {
        "id": "section-6-q1",
        "sectionId": "section-6",
        "order": 1,
        "text": "Как расшифровывается аббревиатура HTML?",
        "options": [
          {
            "id": "section-6-q1-a",
            "label": "а",
            "text": "HyperText Markup Language"
          },
          {
            "id": "section-6-q1-b",
            "label": "б",
            "text": "HeadText Modulation Language"
          },
          {
            "id": "section-6-q1-v",
            "label": "в",
            "text": "HeadingText Mode Language"
          },
          {
            "id": "section-6-q1-g",
            "label": "г",
            "text": "Hyperlink Transfer Machine Language"
          }
        ],
        "correctOptionId": "section-6-q1-a",
        "explanation": "HTML - язык гипертекстовой разметки, который описывает структуру web-страницы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN HTML"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-6-mdn-html"
        ]
      },
      {
        "id": "section-6-q2",
        "sectionId": "section-6",
        "order": 2,
        "text": "Где следует располагать тег title?",
        "options": [
          {
            "id": "section-6-q2-a",
            "label": "а",
            "text": "В теге `head`"
          },
          {
            "id": "section-6-q2-b",
            "label": "б",
            "text": "В теге `body`"
          },
          {
            "id": "section-6-q2-v",
            "label": "в",
            "text": "В теге `footer`"
          },
          {
            "id": "section-6-q2-g",
            "label": "г",
            "text": "Внутри любого тега `p`"
          }
        ],
        "correctOptionId": "section-6-q2-a",
        "explanation": "title относится к метаданным документа и должен находиться внутри head.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN HTML: title"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q3",
        "sectionId": "section-6",
        "order": 3,
        "text": "Существует ли у тега input закрывающий тег в синтаксисе HTML?",
        "options": [
          {
            "id": "section-6-q3-a",
            "label": "а",
            "text": "Да, обязательно `</input>`"
          },
          {
            "id": "section-6-q3-b",
            "label": "б",
            "text": "Нет, `input` является void-элементом"
          },
          {
            "id": "section-6-q3-v",
            "label": "в",
            "text": "Такого тега в стандартах HTML не существует"
          },
          {
            "id": "section-6-q3-g",
            "label": "г",
            "text": "Закрывающий тег нужен только для `type=\"text\"`"
          }
        ],
        "correctOptionId": "section-6-q3-b",
        "explanation": "input - пустой элемент HTML, у него нет содержимого и закрывающий тег не используется.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN HTML: input"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q4",
        "sectionId": "section-6",
        "order": 4,
        "text": "Какого вида CSS-селектора в стандартной терминологии не существует?",
        "options": [
          {
            "id": "section-6-q4-a",
            "label": "а",
            "text": "Селектор псевдокласса"
          },
          {
            "id": "section-6-q4-b",
            "label": "б",
            "text": "Сестринский селектор"
          },
          {
            "id": "section-6-q4-v",
            "label": "в",
            "text": "Селектор класса"
          },
          {
            "id": "section-6-q4-g",
            "label": "г",
            "text": "Братский селектор"
          }
        ],
        "correctOptionId": "section-6-q4-b",
        "explanation": "в CSS есть псевдоклассы, классы и sibling combinators, которые по-русски часто называют братскими/соседними; \"сестринский селектор\" не является стандартным типом.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN CSS Selectors"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q5",
        "sectionId": "section-6",
        "order": 5,
        "text": "Какие ключевые слова используются в JavaScript для объявления переменной?",
        "options": [
          {
            "id": "section-6-q5-a",
            "label": "а",
            "text": "`var`, `let`, `const`"
          },
          {
            "id": "section-6-q5-b",
            "label": "б",
            "text": "`byte`, `short`, `int`, `long`, `float`"
          },
          {
            "id": "section-6-q5-v",
            "label": "в",
            "text": "`public`, `private`, `protected`"
          },
          {
            "id": "section-6-q5-g",
            "label": "г",
            "text": "`select`, `from`, `where`"
          }
        ],
        "correctOptionId": "section-6-q5-a",
        "explanation": "в JavaScript переменные объявляют через var, let и const; остальные варианты относятся к другим языкам или SQL.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN JavaScript Guide"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-6-mdn-javascript-guide"
        ]
      },
      {
        "id": "section-6-q6",
        "sectionId": "section-6",
        "order": 6,
        "text": "Каково основное предназначение HTML?",
        "options": [
          {
            "id": "section-6-q6-a",
            "label": "а",
            "text": "Описывать структуру и смысловое содержание web-страницы"
          },
          {
            "id": "section-6-q6-b",
            "label": "б",
            "text": "Хранить данные в реляционных таблицах"
          },
          {
            "id": "section-6-q6-v",
            "label": "в",
            "text": "Компилировать Python-код"
          },
          {
            "id": "section-6-q6-g",
            "label": "г",
            "text": "Управлять версиями проекта"
          }
        ],
        "correctOptionId": "section-6-q6-a",
        "explanation": "HTML задает заголовки, абзацы, ссылки, изображения, формы и другие элементы документа.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN Learn HTML"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q7",
        "sectionId": "section-6",
        "order": 7,
        "text": "Что обычно содержит секция head HTML-документа?",
        "options": [
          {
            "id": "section-6-q7-a",
            "label": "а",
            "text": "Метаданные: `title`, `meta`, ссылки на стили и скрипты"
          },
          {
            "id": "section-6-q7-b",
            "label": "б",
            "text": "Только основной текст страницы"
          },
          {
            "id": "section-6-q7-v",
            "label": "в",
            "text": "Только изображения пользователей"
          },
          {
            "id": "section-6-q7-g",
            "label": "г",
            "text": "Только SQL-запросы"
          }
        ],
        "correctOptionId": "section-6-q7-a",
        "explanation": "head содержит служебную информацию о документе, которая не является основным видимым содержимым страницы.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN HTML document metadata"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q8",
        "sectionId": "section-6",
        "order": 8,
        "text": "Как HTML обычно связывают с CSS?",
        "options": [
          {
            "id": "section-6-q8-a",
            "label": "а",
            "text": "Через тег `link` во `head`, тег `style` или атрибут `style`"
          },
          {
            "id": "section-6-q8-b",
            "label": "б",
            "text": "Только через SQL-команду `JOIN`"
          },
          {
            "id": "section-6-q8-v",
            "label": "в",
            "text": "Только через тег `table`"
          },
          {
            "id": "section-6-q8-g",
            "label": "г",
            "text": "Только через команду `git push`"
          }
        ],
        "correctOptionId": "section-6-q8-a",
        "explanation": "стили подключают внешним CSS-файлом, внутренним блоком style или inline-стилями.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN CSS first steps"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q9",
        "sectionId": "section-6",
        "order": 9,
        "text": "Что описывает шаблон MVC?",
        "options": [
          {
            "id": "section-6-q9-a",
            "label": "а",
            "text": "Разделение приложения на Model, View и Controller"
          },
          {
            "id": "section-6-q9-b",
            "label": "б",
            "text": "Только способ объявления переменной в JavaScript"
          },
          {
            "id": "section-6-q9-v",
            "label": "в",
            "text": "Только вид CSS-селектора"
          },
          {
            "id": "section-6-q9-g",
            "label": "г",
            "text": "Только структуру Git-коммита"
          }
        ],
        "correctOptionId": "section-6-q9-a",
        "explanation": "Model отвечает за данные и бизнес-логику, View - за представление, Controller - за обработку запросов и координацию.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Django documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q10",
        "sectionId": "section-6",
        "order": 10,
        "text": "Какую роль в Django обычно выполняет модель?",
        "options": [
          {
            "id": "section-6-q10-a",
            "label": "а",
            "text": "Описывает структуру данных и связь с базой данных"
          },
          {
            "id": "section-6-q10-b",
            "label": "б",
            "text": "Только хранит CSS-цвета"
          },
          {
            "id": "section-6-q10-v",
            "label": "в",
            "text": "Только открывает браузер"
          },
          {
            "id": "section-6-q10-g",
            "label": "г",
            "text": "Только отправляет изменения в Git"
          }
        ],
        "correctOptionId": "section-6-q10-a",
        "explanation": "Django-модель задает поля и поведение данных, а ORM связывает модель с таблицами БД.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Django Models"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q11",
        "sectionId": "section-6",
        "order": 11,
        "text": "Как Django обычно создает динамические HTML-страницы?",
        "options": [
          {
            "id": "section-6-q11-a",
            "label": "а",
            "text": "View получает данные и передает их в template для генерации HTML"
          },
          {
            "id": "section-6-q11-b",
            "label": "б",
            "text": "HTML всегда пишется только вручную без данных"
          },
          {
            "id": "section-6-q11-v",
            "label": "в",
            "text": "CSS автоматически заменяет базу данных"
          },
          {
            "id": "section-6-q11-g",
            "label": "г",
            "text": "Git генерирует страницу по коммиту"
          }
        ],
        "correctOptionId": "section-6-q11-a",
        "explanation": "серверная часть обрабатывает запрос, получает данные и рендерит шаблон с контекстом.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Django Views and Templates"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q12",
        "sectionId": "section-6",
        "order": 12,
        "text": "Что важно предусмотреть при верстке страницы с контентом от 1 до 1000 строк?",
        "options": [
          {
            "id": "section-6-q12-a",
            "label": "а",
            "text": "Адаптивность, устойчивую прокрутку и корректное поведение фиксированных элементов"
          },
          {
            "id": "section-6-q12-b",
            "label": "б",
            "text": "Фиксированную высоту контента ровно на 1000 строк"
          },
          {
            "id": "section-6-q12-v",
            "label": "в",
            "text": "Запрет на CSS"
          },
          {
            "id": "section-6-q12-g",
            "label": "г",
            "text": "Хранение всего контента в теге `title`"
          }
        ],
        "correctOptionId": "section-6-q12-a",
        "explanation": "макет должен сохранять читаемость при разной длине контента, меню и размере экрана.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN Responsive Design"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q13",
        "sectionId": "section-6",
        "order": 13,
        "text": "Какой HTTP-метод обычно используется для добавления новой записи через backend?",
        "options": [
          {
            "id": "section-6-q13-a",
            "label": "а",
            "text": "POST"
          },
          {
            "id": "section-6-q13-b",
            "label": "б",
            "text": "GET"
          },
          {
            "id": "section-6-q13-v",
            "label": "в",
            "text": "HEAD"
          },
          {
            "id": "section-6-q13-g",
            "label": "г",
            "text": "TRACE"
          }
        ],
        "correctOptionId": "section-6-q13-a",
        "explanation": "POST обычно применяют для отправки данных на сервер и создания ресурса.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN HTTP request methods"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q14",
        "sectionId": "section-6",
        "order": 14,
        "text": "Что должен сделать frontend после успешного удаления записи на backend?",
        "options": [
          {
            "id": "section-6-q14-a",
            "label": "а",
            "text": "Обновить интерфейс, например убрать удаленную строку из таблицы"
          },
          {
            "id": "section-6-q14-b",
            "label": "б",
            "text": "Создать дубликат строки"
          },
          {
            "id": "section-6-q14-v",
            "label": "в",
            "text": "Отменить запрос к серверу"
          },
          {
            "id": "section-6-q14-g",
            "label": "г",
            "text": "Удалить весь HTML-документ"
          }
        ],
        "correctOptionId": "section-6-q14-a",
        "explanation": "UI должен отражать текущее состояние данных после успешного ответа сервера.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN Fetch API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-6-q15",
        "sectionId": "section-6",
        "order": 15,
        "text": "Что такое интегрированная среда разработки (IDE)?",
        "options": [
          {
            "id": "section-6-q15-a",
            "label": "а",
            "text": "Набор утилит для работы с графическими файлами"
          },
          {
            "id": "section-6-q15-b",
            "label": "б",
            "text": "Программное средство, объединяющее редактор кода, компилятор, отладчик и инструменты разработки"
          },
          {
            "id": "section-6-q15-v",
            "label": "в",
            "text": "Операционная система, предназначенная для разработки приложений"
          },
          {
            "id": "section-6-q15-g",
            "label": "г",
            "text": "Библиотека стандартных компонентов для web-программирования"
          }
        ],
        "correctOptionId": "section-6-q15-b",
        "explanation": "IDE объединяет инструменты разработки в одной среде.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "JetBrains/VS Code documentation"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q16",
        "sectionId": "section-6",
        "order": 16,
        "text": "Какой тег HTML используется для создания гиперссылки?",
        "options": [
          {
            "id": "section-6-q16-a",
            "label": "а",
            "text": "`<a>`"
          },
          {
            "id": "section-6-q16-b",
            "label": "б",
            "text": "`<link>`"
          },
          {
            "id": "section-6-q16-v",
            "label": "в",
            "text": "`<href>`"
          },
          {
            "id": "section-6-q16-g",
            "label": "г",
            "text": "`<url>`"
          }
        ],
        "correctOptionId": "section-6-q16-a",
        "explanation": "элемент a создает ссылку, а адрес задается атрибутом href.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "MDN HTML: a"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q17",
        "sectionId": "section-6",
        "order": 17,
        "text": "Верно ли утверждение: событийное программирование означает, что порядок выполнения кода определяется действиями пользователя или системными событиями?",
        "options": [
          {
            "id": "section-6-q17-a",
            "label": "а",
            "text": "Верно"
          },
          {
            "id": "section-6-q17-b",
            "label": "б",
            "text": "Неверно"
          },
          {
            "id": "section-6-q17-v",
            "label": "в",
            "text": "Верно только для SQL"
          },
          {
            "id": "section-6-q17-g",
            "label": "г",
            "text": "Верно только для статического HTML"
          }
        ],
        "correctOptionId": "section-6-q17-a",
        "explanation": "обработчики событий реагируют на клики, ввод, загрузку страницы, таймеры и другие события.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "MDN Events"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q18",
        "sectionId": "section-6",
        "order": 18,
        "text": "Какой Git-команде соответствует действие \"сохранить изменения в локальном репозитории\"?",
        "options": [
          {
            "id": "section-6-q18-a",
            "label": "а",
            "text": "`git push`"
          },
          {
            "id": "section-6-q18-b",
            "label": "б",
            "text": "`git add`"
          },
          {
            "id": "section-6-q18-v",
            "label": "в",
            "text": "`git commit`"
          },
          {
            "id": "section-6-q18-g",
            "label": "г",
            "text": "`git fetch`"
          }
        ],
        "correctOptionId": "section-6-q18-v",
        "explanation": "git commit фиксирует подготовленные изменения в локальной истории репозитория.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Pro Git Book"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-6-pro-git-book"
        ]
      },
      {
        "id": "section-6-q19",
        "sectionId": "section-6",
        "order": 19,
        "text": "Что такое исключительная ситуация в разработке приложений?",
        "options": [
          {
            "id": "section-6-q19-a",
            "label": "а",
            "text": "Специальный тип данных для хранения ошибок компиляции"
          },
          {
            "id": "section-6-q19-b",
            "label": "б",
            "text": "Нештатное событие во время выполнения программы, которое можно обработать"
          },
          {
            "id": "section-6-q19-v",
            "label": "в",
            "text": "Функция, вызываемая при запуске приложения"
          },
          {
            "id": "section-6-q19-g",
            "label": "г",
            "text": "Компонент логирования действий пользователя"
          }
        ],
        "correctOptionId": "section-6-q19-b",
        "explanation": "exception возникает во время выполнения и может быть перехвачен обработчиком.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "MDN JavaScript exceptions"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q20",
        "sectionId": "section-6",
        "order": 20,
        "text": "Верно ли утверждение: наследование в ООП позволяет создавать новый класс на основе существующего?",
        "options": [
          {
            "id": "section-6-q20-a",
            "label": "а",
            "text": "Верно"
          },
          {
            "id": "section-6-q20-b",
            "label": "б",
            "text": "Неверно"
          },
          {
            "id": "section-6-q20-v",
            "label": "в",
            "text": "Верно только для HTML"
          },
          {
            "id": "section-6-q20-g",
            "label": "г",
            "text": "Верно только для CSS"
          }
        ],
        "correctOptionId": "section-6-q20-a",
        "explanation": "наследование позволяет расширять или изменять поведение базового класса в производном.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "MDN JavaScript classes"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q21",
        "sectionId": "section-6",
        "order": 21,
        "text": "Какой метод HTTP используется для получения данных от сервера?",
        "options": [
          {
            "id": "section-6-q21-a",
            "label": "а",
            "text": "GET"
          },
          {
            "id": "section-6-q21-b",
            "label": "б",
            "text": "POST"
          },
          {
            "id": "section-6-q21-v",
            "label": "в",
            "text": "PUT"
          },
          {
            "id": "section-6-q21-g",
            "label": "г",
            "text": "DELETE"
          }
        ],
        "correctOptionId": "section-6-q21-a",
        "explanation": "GET предназначен для получения представления ресурса без отправки тела с новыми данными.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "MDN HTTP request methods"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q22",
        "sectionId": "section-6",
        "order": 22,
        "text": "Что такое IDE?",
        "options": [
          {
            "id": "section-6-q22-a",
            "label": "а",
            "text": "Редактор кода плюс инструменты сборки, запуска и отладки"
          },
          {
            "id": "section-6-q22-b",
            "label": "б",
            "text": "Операционная система"
          },
          {
            "id": "section-6-q22-v",
            "label": "в",
            "text": "База данных"
          },
          {
            "id": "section-6-q22-g",
            "label": "г",
            "text": "Антивирус"
          }
        ],
        "correctOptionId": "section-6-q22-a",
        "explanation": "IDE помогает писать, запускать и отлаживать код в единой среде.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "VS Code documentation"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q23",
        "sectionId": "section-6",
        "order": 23,
        "text": "Какой тег HTML используется для вставки изображения?",
        "options": [
          {
            "id": "section-6-q23-a",
            "label": "а",
            "text": "`<img>`"
          },
          {
            "id": "section-6-q23-b",
            "label": "б",
            "text": "`<image>`"
          },
          {
            "id": "section-6-q23-v",
            "label": "в",
            "text": "`<src>`"
          },
          {
            "id": "section-6-q23-g",
            "label": "г",
            "text": "`<pic>`"
          }
        ],
        "correctOptionId": "section-6-q23-a",
        "explanation": "img вставляет изображение, а путь к файлу задается атрибутом src.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "MDN HTML: img"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q24",
        "sectionId": "section-6",
        "order": 24,
        "text": "Верно ли утверждение: RAD позволяет сократить время разработки за счет визуальных средств проектирования и готовых компонентов?",
        "options": [
          {
            "id": "section-6-q24-a",
            "label": "а",
            "text": "Верно"
          },
          {
            "id": "section-6-q24-b",
            "label": "б",
            "text": "Неверно"
          },
          {
            "id": "section-6-q24-v",
            "label": "в",
            "text": "Верно только для SQL"
          },
          {
            "id": "section-6-q24-g",
            "label": "г",
            "text": "Верно только для Git"
          }
        ],
        "correctOptionId": "section-6-q24-a",
        "explanation": "Rapid Application Development ориентирован на быстрое прототипирование и использование готовых средств.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "software engineering materials"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q25",
        "sectionId": "section-6",
        "order": 25,
        "text": "Какая Git-команда отправляет изменения в удаленный репозиторий?",
        "options": [
          {
            "id": "section-6-q25-a",
            "label": "а",
            "text": "`git commit`"
          },
          {
            "id": "section-6-q25-b",
            "label": "б",
            "text": "`git add`"
          },
          {
            "id": "section-6-q25-v",
            "label": "в",
            "text": "`git push`"
          },
          {
            "id": "section-6-q25-g",
            "label": "г",
            "text": "`git fetch`"
          }
        ],
        "correctOptionId": "section-6-q25-v",
        "explanation": "git push передает локальные коммиты в удаленный репозиторий.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Pro Git Book"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf",
          "mat-section-6-pro-git-book"
        ]
      },
      {
        "id": "section-6-q26",
        "sectionId": "section-6",
        "order": 26,
        "text": "Что такое исключение в программировании?",
        "options": [
          {
            "id": "section-6-q26-a",
            "label": "а",
            "text": "Ошибка компиляции"
          },
          {
            "id": "section-6-q26-b",
            "label": "б",
            "text": "Нештатное событие во время выполнения программы"
          },
          {
            "id": "section-6-q26-v",
            "label": "в",
            "text": "Способ оптимизации кода"
          },
          {
            "id": "section-6-q26-g",
            "label": "г",
            "text": "Тип данных"
          }
        ],
        "correctOptionId": "section-6-q26-b",
        "explanation": "исключения используются для представления ошибок выполнения и управления их обработкой.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "MDN JavaScript exceptions"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q27",
        "sectionId": "section-6",
        "order": 27,
        "text": "Какое средство используется для отладки программного приложения?",
        "options": [
          {
            "id": "section-6-q27-a",
            "label": "а",
            "text": "Точки останова и просмотр значений переменных"
          },
          {
            "id": "section-6-q27-b",
            "label": "б",
            "text": "Инспектор объектов как единственный способ"
          },
          {
            "id": "section-6-q27-v",
            "label": "в",
            "text": "Компилятор как единственный способ"
          },
          {
            "id": "section-6-q27-g",
            "label": "г",
            "text": "Палитра компонентов"
          }
        ],
        "correctOptionId": "section-6-q27-a",
        "explanation": "breakpoints позволяют остановить выполнение и проверить состояние программы.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "browser DevTools documentation"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q28",
        "sectionId": "section-6",
        "order": 28,
        "text": "Какой метод HTTP используется для отправки данных на сервер, например при заполнении формы?",
        "options": [
          {
            "id": "section-6-q28-a",
            "label": "а",
            "text": "GET"
          },
          {
            "id": "section-6-q28-b",
            "label": "б",
            "text": "POST"
          },
          {
            "id": "section-6-q28-v",
            "label": "в",
            "text": "PUT"
          },
          {
            "id": "section-6-q28-g",
            "label": "г",
            "text": "DELETE"
          }
        ],
        "correctOptionId": "section-6-q28-b",
        "explanation": "POST обычно применяют для передачи данных формы и создания ресурсов.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "MDN HTTP request methods"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-6-q29",
        "sectionId": "section-6",
        "order": 29,
        "text": "Какой тег задает основной видимый контент HTML-документа?",
        "options": [
          {
            "id": "section-6-q29-a",
            "label": "а",
            "text": "`body`"
          },
          {
            "id": "section-6-q29-b",
            "label": "б",
            "text": "`head`"
          },
          {
            "id": "section-6-q29-v",
            "label": "в",
            "text": "`meta`"
          },
          {
            "id": "section-6-q29-g",
            "label": "г",
            "text": "`title`"
          }
        ],
        "correctOptionId": "section-6-q29-a",
        "explanation": "содержимое body отображается пользователю в окне браузера.",
        "sourceRefs": [
          "общая информация.md",
          "MDN HTML"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-6-mdn-html"
        ]
      },
      {
        "id": "section-6-q30",
        "sectionId": "section-6",
        "order": 30,
        "text": "Для чего используется тег meta charset=\"utf-8\"?",
        "options": [
          {
            "id": "section-6-q30-a",
            "label": "а",
            "text": "Для указания кодировки документа"
          },
          {
            "id": "section-6-q30-b",
            "label": "б",
            "text": "Для вставки изображения"
          },
          {
            "id": "section-6-q30-v",
            "label": "в",
            "text": "Для создания таблицы"
          },
          {
            "id": "section-6-q30-g",
            "label": "г",
            "text": "Для подключения Python-модуля"
          }
        ],
        "correctOptionId": "section-6-q30-a",
        "explanation": "указание UTF-8 помогает корректно отображать символы, включая русский текст.",
        "sourceRefs": [
          "общая информация.md",
          "MDN HTML metadata"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q31",
        "sectionId": "section-6",
        "order": 31,
        "text": "Какой атрибут тега a содержит адрес перехода?",
        "options": [
          {
            "id": "section-6-q31-a",
            "label": "а",
            "text": "`href`"
          },
          {
            "id": "section-6-q31-b",
            "label": "б",
            "text": "`src`"
          },
          {
            "id": "section-6-q31-v",
            "label": "в",
            "text": "`alt`"
          },
          {
            "id": "section-6-q31-g",
            "label": "г",
            "text": "`class`"
          }
        ],
        "correctOptionId": "section-6-q31-a",
        "explanation": "href задает URL, на который ведет ссылка.",
        "sourceRefs": [
          "MDN HTML: a"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q32",
        "sectionId": "section-6",
        "order": 32,
        "text": "Какой атрибут тега img задает путь к изображению?",
        "options": [
          {
            "id": "section-6-q32-a",
            "label": "а",
            "text": "`src`"
          },
          {
            "id": "section-6-q32-b",
            "label": "б",
            "text": "`href`"
          },
          {
            "id": "section-6-q32-v",
            "label": "в",
            "text": "`method`"
          },
          {
            "id": "section-6-q32-g",
            "label": "г",
            "text": "`action`"
          }
        ],
        "correctOptionId": "section-6-q32-a",
        "explanation": "src указывает источник изображения.",
        "sourceRefs": [
          "MDN HTML: img"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q33",
        "sectionId": "section-6",
        "order": 33,
        "text": "Зачем нужен атрибут alt у изображения?",
        "options": [
          {
            "id": "section-6-q33-a",
            "label": "а",
            "text": "Для альтернативного текста, полезного при ошибке загрузки и для доступности"
          },
          {
            "id": "section-6-q33-b",
            "label": "б",
            "text": "Для задания HTTP-метода"
          },
          {
            "id": "section-6-q33-v",
            "label": "в",
            "text": "Для подключения CSS"
          },
          {
            "id": "section-6-q33-g",
            "label": "г",
            "text": "Для создания формы"
          }
        ],
        "correctOptionId": "section-6-q33-a",
        "explanation": "alt описывает изображение для скринридеров и ситуаций, когда картинка не загрузилась.",
        "sourceRefs": [
          "MDN HTML: img",
          "WCAG"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q34",
        "sectionId": "section-6",
        "order": 34,
        "text": "Какой тег создает HTML-форму?",
        "options": [
          {
            "id": "section-6-q34-a",
            "label": "а",
            "text": "`form`"
          },
          {
            "id": "section-6-q34-b",
            "label": "б",
            "text": "`input`"
          },
          {
            "id": "section-6-q34-v",
            "label": "в",
            "text": "`label`"
          },
          {
            "id": "section-6-q34-g",
            "label": "г",
            "text": "`button`"
          }
        ],
        "correctOptionId": "section-6-q34-a",
        "explanation": "form группирует поля ввода и задает параметры отправки данных.",
        "sourceRefs": [
          "MDN HTML forms"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q35",
        "sectionId": "section-6",
        "order": 35,
        "text": "Какой атрибут формы задает URL, куда отправляются данные?",
        "options": [
          {
            "id": "section-6-q35-a",
            "label": "а",
            "text": "`action`"
          },
          {
            "id": "section-6-q35-b",
            "label": "б",
            "text": "`method`"
          },
          {
            "id": "section-6-q35-v",
            "label": "в",
            "text": "`name`"
          },
          {
            "id": "section-6-q35-g",
            "label": "г",
            "text": "`placeholder`"
          }
        ],
        "correctOptionId": "section-6-q35-a",
        "explanation": "action указывает адрес обработчика формы на сервере.",
        "sourceRefs": [
          "MDN HTML: form"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q36",
        "sectionId": "section-6",
        "order": 36,
        "text": "Какой атрибут формы задает HTTP-метод отправки?",
        "options": [
          {
            "id": "section-6-q36-a",
            "label": "а",
            "text": "`method`"
          },
          {
            "id": "section-6-q36-b",
            "label": "б",
            "text": "`action`"
          },
          {
            "id": "section-6-q36-v",
            "label": "в",
            "text": "`src`"
          },
          {
            "id": "section-6-q36-g",
            "label": "г",
            "text": "`alt`"
          }
        ],
        "correctOptionId": "section-6-q36-a",
        "explanation": "method обычно принимает значения get или post.",
        "sourceRefs": [
          "MDN HTML: form"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q37",
        "sectionId": "section-6",
        "order": 37,
        "text": "Для чего нужен тег label?",
        "options": [
          {
            "id": "section-6-q37-a",
            "label": "а",
            "text": "Для подписи элемента формы и улучшения доступности"
          },
          {
            "id": "section-6-q37-b",
            "label": "б",
            "text": "Для подключения базы данных"
          },
          {
            "id": "section-6-q37-v",
            "label": "в",
            "text": "Для вставки JavaScript-файла"
          },
          {
            "id": "section-6-q37-g",
            "label": "г",
            "text": "Для создания HTTP-запроса"
          }
        ],
        "correctOptionId": "section-6-q37-a",
        "explanation": "label связывает текстовую подпись с контролом формы через for и id.",
        "sourceRefs": [
          "MDN HTML forms"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q38",
        "sectionId": "section-6",
        "order": 38,
        "text": "Какой тег подключает внешний JavaScript-файл?",
        "options": [
          {
            "id": "section-6-q38-a",
            "label": "а",
            "text": "`script`"
          },
          {
            "id": "section-6-q38-b",
            "label": "б",
            "text": "`style`"
          },
          {
            "id": "section-6-q38-v",
            "label": "в",
            "text": "`link`"
          },
          {
            "id": "section-6-q38-g",
            "label": "г",
            "text": "`meta`"
          }
        ],
        "correctOptionId": "section-6-q38-a",
        "explanation": "внешний скрипт подключают через <script src=\"...\"></script>.",
        "sourceRefs": [
          "MDN HTML: script"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q39",
        "sectionId": "section-6",
        "order": 39,
        "text": "Какой тег обычно подключает внешний CSS-файл?",
        "options": [
          {
            "id": "section-6-q39-a",
            "label": "а",
            "text": "`link`"
          },
          {
            "id": "section-6-q39-b",
            "label": "б",
            "text": "`script`"
          },
          {
            "id": "section-6-q39-v",
            "label": "в",
            "text": "`img`"
          },
          {
            "id": "section-6-q39-g",
            "label": "г",
            "text": "`input`"
          }
        ],
        "correctOptionId": "section-6-q39-a",
        "explanation": "CSS-файл обычно подключают через <link rel=\"stylesheet\" href=\"...\">.",
        "sourceRefs": [
          "MDN HTML: link"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q40",
        "sectionId": "section-6",
        "order": 40,
        "text": "Что означает CSS-селектор .menu?",
        "options": [
          {
            "id": "section-6-q40-a",
            "label": "а",
            "text": "Выбор элементов с классом `menu`"
          },
          {
            "id": "section-6-q40-b",
            "label": "б",
            "text": "Выбор элемента с id `menu`"
          },
          {
            "id": "section-6-q40-v",
            "label": "в",
            "text": "Выбор всех тегов `menu`"
          },
          {
            "id": "section-6-q40-g",
            "label": "г",
            "text": "Выбор всех ссылок"
          }
        ],
        "correctOptionId": "section-6-q40-a",
        "explanation": "точка перед именем обозначает селектор класса.",
        "sourceRefs": [
          "MDN CSS Selectors"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q41",
        "sectionId": "section-6",
        "order": 41,
        "text": "Что означает CSS-селектор #menu?",
        "options": [
          {
            "id": "section-6-q41-a",
            "label": "а",
            "text": "Выбор элемента с id `menu`"
          },
          {
            "id": "section-6-q41-b",
            "label": "б",
            "text": "Выбор элементов с классом `menu`"
          },
          {
            "id": "section-6-q41-v",
            "label": "в",
            "text": "Выбор всех тегов `menu`"
          },
          {
            "id": "section-6-q41-g",
            "label": "г",
            "text": "Выбор всех изображений"
          }
        ],
        "correctOptionId": "section-6-q41-a",
        "explanation": "решетка перед именем обозначает селектор идентификатора.",
        "sourceRefs": [
          "MDN CSS Selectors"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q42",
        "sectionId": "section-6",
        "order": 42,
        "text": "Что выбирает CSS-селектор p a?",
        "options": [
          {
            "id": "section-6-q42-a",
            "label": "а",
            "text": "Все ссылки `a`, находящиеся внутри `p`"
          },
          {
            "id": "section-6-q42-b",
            "label": "б",
            "text": "Только соседний элемент `a` после `p`"
          },
          {
            "id": "section-6-q42-v",
            "label": "в",
            "text": "Все абзацы и все ссылки на странице"
          },
          {
            "id": "section-6-q42-g",
            "label": "г",
            "text": "Только элементы с классом `p`"
          }
        ],
        "correctOptionId": "section-6-q42-a",
        "explanation": "пробел задает селектор потомка.",
        "sourceRefs": [
          "MDN CSS Selectors"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q43",
        "sectionId": "section-6",
        "order": 43,
        "text": "Что выбирает CSS-селектор ul > li?",
        "options": [
          {
            "id": "section-6-q43-a",
            "label": "а",
            "text": "Только непосредственные элементы `li` внутри `ul`"
          },
          {
            "id": "section-6-q43-b",
            "label": "б",
            "text": "Все элементы `li` на странице независимо от родителя"
          },
          {
            "id": "section-6-q43-v",
            "label": "в",
            "text": "Только первый элемент списка"
          },
          {
            "id": "section-6-q43-g",
            "label": "г",
            "text": "Только элементы с id `li`"
          }
        ],
        "correctOptionId": "section-6-q43-a",
        "explanation": "символ > обозначает дочерний комбинатор.",
        "sourceRefs": [
          "MDN CSS Child combinator"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q44",
        "sectionId": "section-6",
        "order": 44,
        "text": "Что делает псевдокласс :hover?",
        "options": [
          {
            "id": "section-6-q44-a",
            "label": "а",
            "text": "Применяет стиль при наведении указателя"
          },
          {
            "id": "section-6-q44-b",
            "label": "б",
            "text": "Применяет стиль только при печати"
          },
          {
            "id": "section-6-q44-v",
            "label": "в",
            "text": "Удаляет элемент из DOM"
          },
          {
            "id": "section-6-q44-g",
            "label": "г",
            "text": "Отправляет форму"
          }
        ],
        "correctOptionId": "section-6-q44-a",
        "explanation": ":hover срабатывает, когда пользователь наводит курсор на элемент.",
        "sourceRefs": [
          "MDN CSS pseudo-classes"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q45",
        "sectionId": "section-6",
        "order": 45,
        "text": "Что означает свойство display: flex?",
        "options": [
          {
            "id": "section-6-q45-a",
            "label": "а",
            "text": "Включает flex-контейнер для раскладки дочерних элементов"
          },
          {
            "id": "section-6-q45-b",
            "label": "б",
            "text": "Делает элемент невидимым"
          },
          {
            "id": "section-6-q45-v",
            "label": "в",
            "text": "Отправляет HTTP-запрос"
          },
          {
            "id": "section-6-q45-g",
            "label": "г",
            "text": "Меняет HTML-тег на другой"
          }
        ],
        "correctOptionId": "section-6-q45-a",
        "explanation": "Flexbox используется для одномерной раскладки по строке или колонке.",
        "sourceRefs": [
          "MDN CSS Flexbox"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q46",
        "sectionId": "section-6",
        "order": 46,
        "text": "Какое свойство Flexbox выравнивает элементы по главной оси?",
        "options": [
          {
            "id": "section-6-q46-a",
            "label": "а",
            "text": "`justify-content`"
          },
          {
            "id": "section-6-q46-b",
            "label": "б",
            "text": "`align-items`"
          },
          {
            "id": "section-6-q46-v",
            "label": "в",
            "text": "`font-weight`"
          },
          {
            "id": "section-6-q46-g",
            "label": "г",
            "text": "`z-index`"
          }
        ],
        "correctOptionId": "section-6-q46-a",
        "explanation": "justify-content распределяет элементы вдоль main axis.",
        "sourceRefs": [
          "MDN CSS Flexbox"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q47",
        "sectionId": "section-6",
        "order": 47,
        "text": "Какое свойство Flexbox выравнивает элементы по поперечной оси?",
        "options": [
          {
            "id": "section-6-q47-a",
            "label": "а",
            "text": "`align-items`"
          },
          {
            "id": "section-6-q47-b",
            "label": "б",
            "text": "`justify-content`"
          },
          {
            "id": "section-6-q47-v",
            "label": "в",
            "text": "`text-decoration`"
          },
          {
            "id": "section-6-q47-g",
            "label": "г",
            "text": "`position`"
          }
        ],
        "correctOptionId": "section-6-q47-a",
        "explanation": "align-items управляет выравниванием вдоль cross axis.",
        "sourceRefs": [
          "MDN CSS Flexbox"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q48",
        "sectionId": "section-6",
        "order": 48,
        "text": "Для чего используется CSS Grid?",
        "options": [
          {
            "id": "section-6-q48-a",
            "label": "а",
            "text": "Для двумерной раскладки по строкам и колонкам"
          },
          {
            "id": "section-6-q48-b",
            "label": "б",
            "text": "Только для отправки форм"
          },
          {
            "id": "section-6-q48-v",
            "label": "в",
            "text": "Только для обработки событий"
          },
          {
            "id": "section-6-q48-g",
            "label": "г",
            "text": "Только для создания Git-коммитов"
          }
        ],
        "correctOptionId": "section-6-q48-a",
        "explanation": "Grid удобен для макетов, где важны и строки, и столбцы.",
        "sourceRefs": [
          "MDN CSS Grid"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q49",
        "sectionId": "section-6",
        "order": 49,
        "text": "Что делает position: fixed?",
        "options": [
          {
            "id": "section-6-q49-a",
            "label": "а",
            "text": "Фиксирует элемент относительно окна просмотра"
          },
          {
            "id": "section-6-q49-b",
            "label": "б",
            "text": "Фиксирует элемент только внутри таблицы SQL"
          },
          {
            "id": "section-6-q49-v",
            "label": "в",
            "text": "Скрывает элемент"
          },
          {
            "id": "section-6-q49-g",
            "label": "г",
            "text": "Удаляет элемент из HTML"
          }
        ],
        "correctOptionId": "section-6-q49-a",
        "explanation": "fixed-элемент остается на месте при прокрутке страницы.",
        "sourceRefs": [
          "MDN CSS position"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q50",
        "sectionId": "section-6",
        "order": 50,
        "text": "Что делает position: sticky?",
        "options": [
          {
            "id": "section-6-q50-a",
            "label": "а",
            "text": "Элемент ведет себя как обычный до порога прокрутки, затем фиксируется"
          },
          {
            "id": "section-6-q50-b",
            "label": "б",
            "text": "Элемент всегда скрыт"
          },
          {
            "id": "section-6-q50-v",
            "label": "в",
            "text": "Элемент становится изображением"
          },
          {
            "id": "section-6-q50-g",
            "label": "г",
            "text": "Элемент выполняет JavaScript"
          }
        ],
        "correctOptionId": "section-6-q50-a",
        "explanation": "sticky полезен для закрепленных заголовков или боковых блоков в пределах контейнера.",
        "sourceRefs": [
          "MDN CSS position"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q51",
        "sectionId": "section-6",
        "order": 51,
        "text": "Что такое адаптивная верстка?",
        "options": [
          {
            "id": "section-6-q51-a",
            "label": "а",
            "text": "Верстка, корректно работающая на разных размерах экрана и устройствах"
          },
          {
            "id": "section-6-q51-b",
            "label": "б",
            "text": "Верстка только для одного фиксированного разрешения"
          },
          {
            "id": "section-6-q51-v",
            "label": "в",
            "text": "Верстка без CSS"
          },
          {
            "id": "section-6-q51-g",
            "label": "г",
            "text": "Верстка только из таблиц"
          }
        ],
        "correctOptionId": "section-6-q51-a",
        "explanation": "responsive design использует гибкие размеры, медиазапросы и адаптивные изображения.",
        "sourceRefs": [
          "MDN Responsive Design"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q52",
        "sectionId": "section-6",
        "order": 52,
        "text": "Для чего используются media queries?",
        "options": [
          {
            "id": "section-6-q52-a",
            "label": "а",
            "text": "Для применения CSS-правил при определенных условиях, например ширине экрана"
          },
          {
            "id": "section-6-q52-b",
            "label": "б",
            "text": "Для отправки данных формы"
          },
          {
            "id": "section-6-q52-v",
            "label": "в",
            "text": "Для создания Git-ветки"
          },
          {
            "id": "section-6-q52-g",
            "label": "г",
            "text": "Для запуска Django-сервера"
          }
        ],
        "correctOptionId": "section-6-q52-a",
        "explanation": "медиазапросы позволяют менять макет под разные устройства.",
        "sourceRefs": [
          "MDN CSS media queries"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q53",
        "sectionId": "section-6",
        "order": 53,
        "text": "Что означает box-sizing: border-box?",
        "options": [
          {
            "id": "section-6-q53-a",
            "label": "а",
            "text": "Width и height включают content, padding и border"
          },
          {
            "id": "section-6-q53-b",
            "label": "б",
            "text": "Padding считается отдельно сверх width"
          },
          {
            "id": "section-6-q53-v",
            "label": "в",
            "text": "Элемент становится flex-контейнером"
          },
          {
            "id": "section-6-q53-g",
            "label": "г",
            "text": "Элемент удаляется из потока"
          }
        ],
        "correctOptionId": "section-6-q53-a",
        "explanation": "border-box делает размеры элементов более предсказуемыми при верстке.",
        "sourceRefs": [
          "MDN CSS box-sizing"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q54",
        "sectionId": "section-6",
        "order": 54,
        "text": "Что такое DOM?",
        "options": [
          {
            "id": "section-6-q54-a",
            "label": "а",
            "text": "Объектная модель документа, представляющая HTML как дерево узлов"
          },
          {
            "id": "section-6-q54-b",
            "label": "б",
            "text": "Метод HTTP для удаления данных"
          },
          {
            "id": "section-6-q54-v",
            "label": "в",
            "text": "Вид CSS-селектора"
          },
          {
            "id": "section-6-q54-g",
            "label": "г",
            "text": "Команда Git"
          }
        ],
        "correctOptionId": "section-6-q54-a",
        "explanation": "JavaScript взаимодействует со страницей через DOM API.",
        "sourceRefs": [
          "MDN DOM"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q55",
        "sectionId": "section-6",
        "order": 55,
        "text": "Как получить элемент по id в JavaScript?",
        "options": [
          {
            "id": "section-6-q55-a",
            "label": "а",
            "text": "`document.getElementById(\"id\")`"
          },
          {
            "id": "section-6-q55-b",
            "label": "б",
            "text": "`document.getByClass(\"id\")`"
          },
          {
            "id": "section-6-q55-v",
            "label": "в",
            "text": "`window.selectId(\"id\")`"
          },
          {
            "id": "section-6-q55-g",
            "label": "г",
            "text": "`html.find(\"id\")`"
          }
        ],
        "correctOptionId": "section-6-q55-a",
        "explanation": "getElementById возвращает элемент с указанным идентификатором.",
        "sourceRefs": [
          "MDN DOM"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q56",
        "sectionId": "section-6",
        "order": 56,
        "text": "Как назначить обработчик клика современным способом?",
        "options": [
          {
            "id": "section-6-q56-a",
            "label": "а",
            "text": "`element.addEventListener(\"click\", handler)`"
          },
          {
            "id": "section-6-q56-b",
            "label": "б",
            "text": "`element.onclicked(handler)`"
          },
          {
            "id": "section-6-q56-v",
            "label": "в",
            "text": "`document.click = handler()`"
          },
          {
            "id": "section-6-q56-g",
            "label": "г",
            "text": "`css.onClick(handler)`"
          }
        ],
        "correctOptionId": "section-6-q56-a",
        "explanation": "addEventListener регистрирует обработчик события без перезаписи других обработчиков.",
        "sourceRefs": [
          "MDN Events"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q57",
        "sectionId": "section-6",
        "order": 57,
        "text": "Чем let отличается от var?",
        "options": [
          {
            "id": "section-6-q57-a",
            "label": "а",
            "text": "`let` имеет блочную область видимости, а `var` - функциональную"
          },
          {
            "id": "section-6-q57-b",
            "label": "б",
            "text": "`let` работает только в CSS"
          },
          {
            "id": "section-6-q57-v",
            "label": "в",
            "text": "`var` запрещен в браузерах"
          },
          {
            "id": "section-6-q57-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-6-q57-a",
        "explanation": "let ограничен блоком {}, что снижает риск ошибок области видимости.",
        "sourceRefs": [
          "MDN JavaScript Guide"
        ],
        "materialIds": [
          "mat-section-6-mdn-javascript-guide"
        ]
      },
      {
        "id": "section-6-q58",
        "sectionId": "section-6",
        "order": 58,
        "text": "Что означает const в JavaScript?",
        "options": [
          {
            "id": "section-6-q58-a",
            "label": "а",
            "text": "Нельзя переназначить саму переменную после инициализации"
          },
          {
            "id": "section-6-q58-b",
            "label": "б",
            "text": "Объект всегда становится полностью неизменяемым"
          },
          {
            "id": "section-6-q58-v",
            "label": "в",
            "text": "Переменная становится глобальной"
          },
          {
            "id": "section-6-q58-g",
            "label": "г",
            "text": "Значение автоматически отправляется на сервер"
          }
        ],
        "correctOptionId": "section-6-q58-a",
        "explanation": "const запрещает повторное присваивание переменной, но не делает объект глубоко неизменяемым.",
        "sourceRefs": [
          "MDN JavaScript Guide"
        ],
        "materialIds": [
          "mat-section-6-mdn-javascript-guide"
        ]
      },
      {
        "id": "section-6-q59",
        "sectionId": "section-6",
        "order": 59,
        "text": "Как добавить элемент в конец массива JavaScript?",
        "options": [
          {
            "id": "section-6-q59-a",
            "label": "а",
            "text": "`arr.push(item)`"
          },
          {
            "id": "section-6-q59-b",
            "label": "б",
            "text": "`arr.addLast(item)`"
          },
          {
            "id": "section-6-q59-v",
            "label": "в",
            "text": "`arr.appendChild(item)`"
          },
          {
            "id": "section-6-q59-g",
            "label": "г",
            "text": "`arr.commit(item)`"
          }
        ],
        "correctOptionId": "section-6-q59-a",
        "explanation": "push добавляет один или несколько элементов в конец массива.",
        "sourceRefs": [
          "MDN JavaScript Array"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q60",
        "sectionId": "section-6",
        "order": 60,
        "text": "Какой метод массива создает новый массив из результатов преобразования элементов?",
        "options": [
          {
            "id": "section-6-q60-a",
            "label": "а",
            "text": "`map`"
          },
          {
            "id": "section-6-q60-b",
            "label": "б",
            "text": "`filter`"
          },
          {
            "id": "section-6-q60-v",
            "label": "в",
            "text": "`reduce`"
          },
          {
            "id": "section-6-q60-g",
            "label": "г",
            "text": "`forEach`"
          }
        ],
        "correctOptionId": "section-6-q60-a",
        "explanation": "map применяет функцию к каждому элементу и возвращает новый массив такой же длины.",
        "sourceRefs": [
          "MDN JavaScript Array"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q61",
        "sectionId": "section-6",
        "order": 61,
        "text": "Какой метод массива оставляет только элементы, удовлетворяющие условию?",
        "options": [
          {
            "id": "section-6-q61-a",
            "label": "а",
            "text": "`filter`"
          },
          {
            "id": "section-6-q61-b",
            "label": "б",
            "text": "`map`"
          },
          {
            "id": "section-6-q61-v",
            "label": "в",
            "text": "`join`"
          },
          {
            "id": "section-6-q61-g",
            "label": "г",
            "text": "`push`"
          }
        ],
        "correctOptionId": "section-6-q61-a",
        "explanation": "filter возвращает новый массив из элементов, для которых предикат вернул true.",
        "sourceRefs": [
          "MDN JavaScript Array"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q62",
        "sectionId": "section-6",
        "order": 62,
        "text": "Какой блок используется для обработки исключений в JavaScript?",
        "options": [
          {
            "id": "section-6-q62-a",
            "label": "а",
            "text": "`try...catch`"
          },
          {
            "id": "section-6-q62-b",
            "label": "б",
            "text": "`if...else` как единственный способ"
          },
          {
            "id": "section-6-q62-v",
            "label": "в",
            "text": "`select...from`"
          },
          {
            "id": "section-6-q62-g",
            "label": "г",
            "text": "`commit...push`"
          }
        ],
        "correctOptionId": "section-6-q62-a",
        "explanation": "try...catch перехватывает исключения, возникшие в блоке try.",
        "sourceRefs": [
          "MDN JavaScript exceptions"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q63",
        "sectionId": "section-6",
        "order": 63,
        "text": "Что делает ключевое слово throw?",
        "options": [
          {
            "id": "section-6-q63-a",
            "label": "а",
            "text": "Генерирует исключение"
          },
          {
            "id": "section-6-q63-b",
            "label": "б",
            "text": "Объявляет CSS-класс"
          },
          {
            "id": "section-6-q63-v",
            "label": "в",
            "text": "Создает HTML-ссылку"
          },
          {
            "id": "section-6-q63-g",
            "label": "г",
            "text": "Отправляет Git-коммит"
          }
        ],
        "correctOptionId": "section-6-q63-a",
        "explanation": "throw выбрасывает указанное значение как исключение.",
        "sourceRefs": [
          "MDN JavaScript exceptions"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q64",
        "sectionId": "section-6",
        "order": 64,
        "text": "Что такое прототип в JavaScript?",
        "options": [
          {
            "id": "section-6-q64-a",
            "label": "а",
            "text": "Объект, от которого другой объект может наследовать свойства и методы"
          },
          {
            "id": "section-6-q64-b",
            "label": "б",
            "text": "HTML-шаблон страницы"
          },
          {
            "id": "section-6-q64-v",
            "label": "в",
            "text": "HTTP-заголовок"
          },
          {
            "id": "section-6-q64-g",
            "label": "г",
            "text": "CSS-переменная"
          }
        ],
        "correctOptionId": "section-6-q64-a",
        "explanation": "наследование в JavaScript основано на цепочке прототипов.",
        "sourceRefs": [
          "MDN JavaScript prototypes"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q65",
        "sectionId": "section-6",
        "order": 65,
        "text": "Что делает fetch() в браузерном JavaScript?",
        "options": [
          {
            "id": "section-6-q65-a",
            "label": "а",
            "text": "Выполняет сетевой HTTP-запрос и возвращает Promise"
          },
          {
            "id": "section-6-q65-b",
            "label": "б",
            "text": "Создает CSS-сетку"
          },
          {
            "id": "section-6-q65-v",
            "label": "в",
            "text": "Делает Git pull"
          },
          {
            "id": "section-6-q65-g",
            "label": "г",
            "text": "Компилирует Django-модель"
          }
        ],
        "correctOptionId": "section-6-q65-a",
        "explanation": "Fetch API используется для получения или отправки данных по сети.",
        "sourceRefs": [
          "MDN Fetch API"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q66",
        "sectionId": "section-6",
        "order": 66,
        "text": "Что такое Promise?",
        "options": [
          {
            "id": "section-6-q66-a",
            "label": "а",
            "text": "Объект, представляющий будущий результат асинхронной операции"
          },
          {
            "id": "section-6-q66-b",
            "label": "б",
            "text": "HTML-тег для формы"
          },
          {
            "id": "section-6-q66-v",
            "label": "в",
            "text": "CSS-свойство для цвета"
          },
          {
            "id": "section-6-q66-g",
            "label": "г",
            "text": "Команда Git для отправки изменений"
          }
        ],
        "correctOptionId": "section-6-q66-a",
        "explanation": "Promise может быть в состояниях pending, fulfilled или rejected.",
        "sourceRefs": [
          "MDN JavaScript Promises"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q67",
        "sectionId": "section-6",
        "order": 67,
        "text": "Для чего используется async/await?",
        "options": [
          {
            "id": "section-6-q67-a",
            "label": "а",
            "text": "Для более удобной записи асинхронного кода на Promise"
          },
          {
            "id": "section-6-q67-b",
            "label": "б",
            "text": "Для объявления CSS-селектора"
          },
          {
            "id": "section-6-q67-v",
            "label": "в",
            "text": "Для создания HTML-таблицы"
          },
          {
            "id": "section-6-q67-g",
            "label": "г",
            "text": "Для настройки HTTP-порта"
          }
        ],
        "correctOptionId": "section-6-q67-a",
        "explanation": "await приостанавливает выполнение async-функции до завершения Promise.",
        "sourceRefs": [
          "MDN async functions"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q68",
        "sectionId": "section-6",
        "order": 68,
        "text": "Что означает статус HTTP 200?",
        "options": [
          {
            "id": "section-6-q68-a",
            "label": "а",
            "text": "Успешный запрос"
          },
          {
            "id": "section-6-q68-b",
            "label": "б",
            "text": "Ресурс не найден"
          },
          {
            "id": "section-6-q68-v",
            "label": "в",
            "text": "Ошибка сервера"
          },
          {
            "id": "section-6-q68-g",
            "label": "г",
            "text": "Требуется перенаправление"
          }
        ],
        "correctOptionId": "section-6-q68-a",
        "explanation": "код 200 OK означает, что запрос успешно обработан.",
        "sourceRefs": [
          "MDN HTTP status codes"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q69",
        "sectionId": "section-6",
        "order": 69,
        "text": "Что означает статус HTTP 404?",
        "options": [
          {
            "id": "section-6-q69-a",
            "label": "а",
            "text": "Ресурс не найден"
          },
          {
            "id": "section-6-q69-b",
            "label": "б",
            "text": "Запрос успешен"
          },
          {
            "id": "section-6-q69-v",
            "label": "в",
            "text": "Сервер создал ресурс"
          },
          {
            "id": "section-6-q69-g",
            "label": "г",
            "text": "Клиент должен использовать CSS"
          }
        ],
        "correctOptionId": "section-6-q69-a",
        "explanation": "404 Not Found возвращается, когда сервер не нашел запрошенный ресурс.",
        "sourceRefs": [
          "MDN HTTP status codes"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q70",
        "sectionId": "section-6",
        "order": 70,
        "text": "Что означает статус HTTP 500?",
        "options": [
          {
            "id": "section-6-q70-a",
            "label": "а",
            "text": "Внутренняя ошибка сервера"
          },
          {
            "id": "section-6-q70-b",
            "label": "б",
            "text": "Успешное создание ресурса"
          },
          {
            "id": "section-6-q70-v",
            "label": "в",
            "text": "Постоянное перенаправление"
          },
          {
            "id": "section-6-q70-g",
            "label": "г",
            "text": "Неверный CSS-селектор"
          }
        ],
        "correctOptionId": "section-6-q70-a",
        "explanation": "500 указывает на ошибку на стороне сервера.",
        "sourceRefs": [
          "MDN HTTP status codes"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q71",
        "sectionId": "section-6",
        "order": 71,
        "text": "Какой HTTP-метод обычно используют для полного обновления ресурса?",
        "options": [
          {
            "id": "section-6-q71-a",
            "label": "а",
            "text": "PUT"
          },
          {
            "id": "section-6-q71-b",
            "label": "б",
            "text": "GET"
          },
          {
            "id": "section-6-q71-v",
            "label": "в",
            "text": "OPTIONS"
          },
          {
            "id": "section-6-q71-g",
            "label": "г",
            "text": "HEAD"
          }
        ],
        "correctOptionId": "section-6-q71-a",
        "explanation": "PUT обычно заменяет представление ресурса по указанному URI.",
        "sourceRefs": [
          "MDN HTTP request methods"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q72",
        "sectionId": "section-6",
        "order": 72,
        "text": "Какой HTTP-метод обычно используют для удаления ресурса?",
        "options": [
          {
            "id": "section-6-q72-a",
            "label": "а",
            "text": "DELETE"
          },
          {
            "id": "section-6-q72-b",
            "label": "б",
            "text": "GET"
          },
          {
            "id": "section-6-q72-v",
            "label": "в",
            "text": "POST"
          },
          {
            "id": "section-6-q72-g",
            "label": "г",
            "text": "PATCH"
          }
        ],
        "correctOptionId": "section-6-q72-a",
        "explanation": "DELETE предназначен для удаления указанного ресурса.",
        "sourceRefs": [
          "MDN HTTP request methods"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q73",
        "sectionId": "section-6",
        "order": 73,
        "text": "Что такое идемпотентный HTTP-метод?",
        "options": [
          {
            "id": "section-6-q73-a",
            "label": "а",
            "text": "Метод, повторный вызов которого имеет тот же эффект, что и один вызов"
          },
          {
            "id": "section-6-q73-b",
            "label": "б",
            "text": "Метод, который всегда возвращает HTML"
          },
          {
            "id": "section-6-q73-v",
            "label": "в",
            "text": "Метод, который нельзя повторять"
          },
          {
            "id": "section-6-q73-g",
            "label": "г",
            "text": "Метод, который работает только с CSS"
          }
        ],
        "correctOptionId": "section-6-q73-a",
        "explanation": "GET, PUT и DELETE считаются идемпотентными по смыслу HTTP-спецификации.",
        "sourceRefs": [
          "общая информация.md",
          "MDN HTTP request methods"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q74",
        "sectionId": "section-6",
        "order": 74,
        "text": "Какой HTTP-метод является безопасным?",
        "options": [
          {
            "id": "section-6-q74-a",
            "label": "а",
            "text": "GET"
          },
          {
            "id": "section-6-q74-b",
            "label": "б",
            "text": "POST"
          },
          {
            "id": "section-6-q74-v",
            "label": "в",
            "text": "PATCH"
          },
          {
            "id": "section-6-q74-g",
            "label": "г",
            "text": "DELETE"
          }
        ],
        "correctOptionId": "section-6-q74-a",
        "explanation": "безопасный метод не должен изменять состояние ресурса на сервере; GET предназначен для чтения.",
        "sourceRefs": [
          "MDN HTTP safe methods"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q75",
        "sectionId": "section-6",
        "order": 75,
        "text": "Что такое URL?",
        "options": [
          {
            "id": "section-6-q75-a",
            "label": "а",
            "text": "Адрес ресурса в сети"
          },
          {
            "id": "section-6-q75-b",
            "label": "б",
            "text": "Язык разметки"
          },
          {
            "id": "section-6-q75-v",
            "label": "в",
            "text": "CSS-свойство"
          },
          {
            "id": "section-6-q75-g",
            "label": "г",
            "text": "Git-команда"
          }
        ],
        "correctOptionId": "section-6-q75-a",
        "explanation": "URL указывает, где находится ресурс и как к нему обратиться.",
        "sourceRefs": [
          "MDN What is a URL"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q76",
        "sectionId": "section-6",
        "order": 76,
        "text": "Что такое query string в URL?",
        "options": [
          {
            "id": "section-6-q76-a",
            "label": "а",
            "text": "Часть после `?`, содержащая параметры запроса"
          },
          {
            "id": "section-6-q76-b",
            "label": "б",
            "text": "Имя HTML-тега"
          },
          {
            "id": "section-6-q76-v",
            "label": "в",
            "text": "CSS-класс"
          },
          {
            "id": "section-6-q76-g",
            "label": "г",
            "text": "Тело POST-запроса"
          }
        ],
        "correctOptionId": "section-6-q76-a",
        "explanation": "например, в /books?author=Pushkin параметр author находится в query string.",
        "sourceRefs": [
          "MDN URL"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q77",
        "sectionId": "section-6",
        "order": 77,
        "text": "Что такое cookie?",
        "options": [
          {
            "id": "section-6-q77-a",
            "label": "а",
            "text": "Небольшой фрагмент данных, который сайт может сохранять в браузере"
          },
          {
            "id": "section-6-q77-b",
            "label": "б",
            "text": "HTML-тег для изображения"
          },
          {
            "id": "section-6-q77-v",
            "label": "в",
            "text": "CSS-файл"
          },
          {
            "id": "section-6-q77-g",
            "label": "г",
            "text": "Git-ветка"
          }
        ],
        "correctOptionId": "section-6-q77-a",
        "explanation": "cookie часто используют для сессий, настроек и служебных идентификаторов.",
        "sourceRefs": [
          "MDN HTTP cookies"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q78",
        "sectionId": "section-6",
        "order": 78,
        "text": "Что такое сессия в web-приложении?",
        "options": [
          {
            "id": "section-6-q78-a",
            "label": "а",
            "text": "Механизм сохранения состояния пользователя между HTTP-запросами"
          },
          {
            "id": "section-6-q78-b",
            "label": "б",
            "text": "Один CSS-селектор"
          },
          {
            "id": "section-6-q78-v",
            "label": "в",
            "text": "Один HTML-тег"
          },
          {
            "id": "section-6-q78-g",
            "label": "г",
            "text": "Только Git-коммит"
          }
        ],
        "correctOptionId": "section-6-q78-a",
        "explanation": "HTTP сам по себе stateless, поэтому сессии помогают связать запросы одного пользователя.",
        "sourceRefs": [
          "MDN HTTP cookies",
          "Django sessions"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q79",
        "sectionId": "section-6",
        "order": 79,
        "text": "Что означает HTTPS?",
        "options": [
          {
            "id": "section-6-q79-a",
            "label": "а",
            "text": "HTTP поверх защищенного соединения TLS"
          },
          {
            "id": "section-6-q79-b",
            "label": "б",
            "text": "HTML с CSS"
          },
          {
            "id": "section-6-q79-v",
            "label": "в",
            "text": "Только протокол передачи файлов без шифрования"
          },
          {
            "id": "section-6-q79-g",
            "label": "г",
            "text": "Команда запуска Django"
          }
        ],
        "correctOptionId": "section-6-q79-a",
        "explanation": "HTTPS защищает трафик от чтения и подмены с помощью TLS.",
        "sourceRefs": [
          "общая информация.md",
          "MDN HTTPS"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q80",
        "sectionId": "section-6",
        "order": 80,
        "text": "Какой порт по умолчанию используется для HTTPS?",
        "options": [
          {
            "id": "section-6-q80-a",
            "label": "а",
            "text": "443"
          },
          {
            "id": "section-6-q80-b",
            "label": "б",
            "text": "80"
          },
          {
            "id": "section-6-q80-v",
            "label": "в",
            "text": "22"
          },
          {
            "id": "section-6-q80-g",
            "label": "г",
            "text": "25"
          }
        ],
        "correctOptionId": "section-6-q80-a",
        "explanation": "стандартный порт HTTPS - 443; HTTP обычно использует 80.",
        "sourceRefs": [
          "общая информация.md",
          "IANA/MDN HTTPS"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q81",
        "sectionId": "section-6",
        "order": 81,
        "text": "Что такое REST API?",
        "options": [
          {
            "id": "section-6-q81-a",
            "label": "а",
            "text": "Стиль проектирования API вокруг ресурсов и стандартных HTTP-методов"
          },
          {
            "id": "section-6-q81-b",
            "label": "б",
            "text": "Только библиотека CSS"
          },
          {
            "id": "section-6-q81-v",
            "label": "в",
            "text": "Только HTML-шаблон"
          },
          {
            "id": "section-6-q81-g",
            "label": "г",
            "text": "Только Git-репозиторий"
          }
        ],
        "correctOptionId": "section-6-q81-a",
        "explanation": "REST обычно использует URI ресурсов и методы GET, POST, PUT/PATCH, DELETE.",
        "sourceRefs": [
          "общая информация.md",
          "MDN HTTP"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q82",
        "sectionId": "section-6",
        "order": 82,
        "text": "Какой формат часто используют для обмена данными между frontend и backend?",
        "options": [
          {
            "id": "section-6-q82-a",
            "label": "а",
            "text": "JSON"
          },
          {
            "id": "section-6-q82-b",
            "label": "б",
            "text": "PNG как единственный формат"
          },
          {
            "id": "section-6-q82-v",
            "label": "в",
            "text": "CSS"
          },
          {
            "id": "section-6-q82-g",
            "label": "г",
            "text": "Git"
          }
        ],
        "correctOptionId": "section-6-q82-a",
        "explanation": "JSON удобен для передачи структурированных данных через HTTP API.",
        "sourceRefs": [
          "MDN JSON"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q83",
        "sectionId": "section-6",
        "order": 83,
        "text": "Что такое CORS?",
        "options": [
          {
            "id": "section-6-q83-a",
            "label": "а",
            "text": "Механизм браузера, контролирующий доступ к ресурсам другого origin"
          },
          {
            "id": "section-6-q83-b",
            "label": "б",
            "text": "CSS-селектор"
          },
          {
            "id": "section-6-q83-v",
            "label": "в",
            "text": "HTML-элемент для формы"
          },
          {
            "id": "section-6-q83-g",
            "label": "г",
            "text": "Git-команда"
          }
        ],
        "correctOptionId": "section-6-q83-a",
        "explanation": "CORS определяет, разрешен ли браузеру cross-origin запрос к серверу.",
        "sourceRefs": [
          "MDN CORS"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q84",
        "sectionId": "section-6",
        "order": 84,
        "text": "Что такое same-origin policy?",
        "options": [
          {
            "id": "section-6-q84-a",
            "label": "а",
            "text": "Политика безопасности, ограничивающая взаимодействие документов из разных origin"
          },
          {
            "id": "section-6-q84-b",
            "label": "б",
            "text": "Правило CSS-каскада"
          },
          {
            "id": "section-6-q84-v",
            "label": "в",
            "text": "Способ объявления переменной"
          },
          {
            "id": "section-6-q84-g",
            "label": "г",
            "text": "Метод Django ORM"
          }
        ],
        "correctOptionId": "section-6-q84-a",
        "explanation": "эта политика защищает данные сайтов от произвольного доступа со страниц другого происхождения.",
        "sourceRefs": [
          "MDN Same-origin policy"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q85",
        "sectionId": "section-6",
        "order": 85,
        "text": "Что такое XSS?",
        "options": [
          {
            "id": "section-6-q85-a",
            "label": "а",
            "text": "Уязвимость, при которой вредоносный скрипт внедряется в страницу"
          },
          {
            "id": "section-6-q85-b",
            "label": "б",
            "text": "Метод HTTP для чтения данных"
          },
          {
            "id": "section-6-q85-v",
            "label": "в",
            "text": "CSS-фреймворк"
          },
          {
            "id": "section-6-q85-g",
            "label": "г",
            "text": "Вид Git-ветки"
          }
        ],
        "correctOptionId": "section-6-q85-a",
        "explanation": "XSS возникает, когда приложение небезопасно выводит пользовательский ввод в HTML/JS.",
        "sourceRefs": [
          "MDN Web security",
          "OWASP XSS"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q86",
        "sectionId": "section-6",
        "order": 86,
        "text": "Как снизить риск XSS при выводе пользовательского текста?",
        "options": [
          {
            "id": "section-6-q86-a",
            "label": "а",
            "text": "Экранировать вывод и не вставлять непроверенный HTML"
          },
          {
            "id": "section-6-q86-b",
            "label": "б",
            "text": "Всегда использовать `innerHTML` для любого ввода"
          },
          {
            "id": "section-6-q86-v",
            "label": "в",
            "text": "Отключить HTTPS"
          },
          {
            "id": "section-6-q86-g",
            "label": "г",
            "text": "Хранить пароль в URL"
          }
        ],
        "correctOptionId": "section-6-q86-a",
        "explanation": "экранирование превращает спецсимволы HTML в безопасный текст.",
        "sourceRefs": [
          "OWASP XSS Prevention",
          "Django templates autoescape"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q87",
        "sectionId": "section-6",
        "order": 87,
        "text": "Что такое CSRF?",
        "options": [
          {
            "id": "section-6-q87-a",
            "label": "а",
            "text": "Атака, заставляющая браузер пользователя выполнить нежелательный запрос к сайту"
          },
          {
            "id": "section-6-q87-b",
            "label": "б",
            "text": "CSS-анимация"
          },
          {
            "id": "section-6-q87-v",
            "label": "в",
            "text": "Способ подключения шрифта"
          },
          {
            "id": "section-6-q87-g",
            "label": "г",
            "text": "Метод сортировки массива"
          }
        ],
        "correctOptionId": "section-6-q87-a",
        "explanation": "CSRF использует доверенную сессию пользователя, поэтому формы и API защищают CSRF-токенами.",
        "sourceRefs": [
          "OWASP CSRF",
          "Django CSRF protection"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q88",
        "sectionId": "section-6",
        "order": 88,
        "text": "Что такое SQL-инъекция?",
        "options": [
          {
            "id": "section-6-q88-a",
            "label": "а",
            "text": "Внедрение вредоносного SQL через непроверенный пользовательский ввод"
          },
          {
            "id": "section-6-q88-b",
            "label": "б",
            "text": "Селектор CSS"
          },
          {
            "id": "section-6-q88-v",
            "label": "в",
            "text": "Событие JavaScript"
          },
          {
            "id": "section-6-q88-g",
            "label": "г",
            "text": "HTML-комментарий"
          }
        ],
        "correctOptionId": "section-6-q88-a",
        "explanation": "параметризованные запросы и ORM помогают не смешивать пользовательские данные с SQL-кодом.",
        "sourceRefs": [
          "OWASP SQL Injection",
          "Django ORM"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q89",
        "sectionId": "section-6",
        "order": 89,
        "text": "Что делает Django URLconf?",
        "options": [
          {
            "id": "section-6-q89-a",
            "label": "а",
            "text": "Сопоставляет URL-шаблоны с view-функциями или view-классами"
          },
          {
            "id": "section-6-q89-b",
            "label": "б",
            "text": "Хранит только CSS-переменные"
          },
          {
            "id": "section-6-q89-v",
            "label": "в",
            "text": "Компилирует JavaScript"
          },
          {
            "id": "section-6-q89-g",
            "label": "г",
            "text": "Создает Git-коммиты"
          }
        ],
        "correctOptionId": "section-6-q89-a",
        "explanation": "маршрутизация определяет, какой обработчик выполнится для конкретного пути запроса.",
        "sourceRefs": [
          "Django URL dispatcher"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q90",
        "sectionId": "section-6",
        "order": 90,
        "text": "Что такое view в Django?",
        "options": [
          {
            "id": "section-6-q90-a",
            "label": "а",
            "text": "Функция или класс, обрабатывающий web-запрос и возвращающий response"
          },
          {
            "id": "section-6-q90-b",
            "label": "б",
            "text": "Только HTML-файл"
          },
          {
            "id": "section-6-q90-v",
            "label": "в",
            "text": "Только таблица базы данных"
          },
          {
            "id": "section-6-q90-g",
            "label": "г",
            "text": "Только CSS-класс"
          }
        ],
        "correctOptionId": "section-6-q90-a",
        "explanation": "view связывает запрос, бизнес-логику, данные и ответ клиенту.",
        "sourceRefs": [
          "Django Views"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q91",
        "sectionId": "section-6",
        "order": 91,
        "text": "Что такое template в Django?",
        "options": [
          {
            "id": "section-6-q91-a",
            "label": "а",
            "text": "HTML-шаблон с возможностью подставлять данные из контекста"
          },
          {
            "id": "section-6-q91-b",
            "label": "б",
            "text": "Таблица базы данных"
          },
          {
            "id": "section-6-q91-v",
            "label": "в",
            "text": "Git-команда"
          },
          {
            "id": "section-6-q91-g",
            "label": "г",
            "text": "HTTP-метод"
          }
        ],
        "correctOptionId": "section-6-q91-a",
        "explanation": "шаблон позволяет генерировать HTML на основе данных, переданных из view.",
        "sourceRefs": [
          "Django Templates"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q92",
        "sectionId": "section-6",
        "order": 92,
        "text": "Что делает Django ORM?",
        "options": [
          {
            "id": "section-6-q92-a",
            "label": "а",
            "text": "Позволяет работать с базой данных через Python-классы и объекты"
          },
          {
            "id": "section-6-q92-b",
            "label": "б",
            "text": "Автоматически рисует CSS-анимации"
          },
          {
            "id": "section-6-q92-v",
            "label": "в",
            "text": "Заменяет HTML на JSON"
          },
          {
            "id": "section-6-q92-g",
            "label": "г",
            "text": "Отправляет файлы в GitHub"
          }
        ],
        "correctOptionId": "section-6-q92-a",
        "explanation": "ORM сопоставляет модели Python с таблицами и формирует SQL-запросы.",
        "sourceRefs": [
          "Django Models"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q93",
        "sectionId": "section-6",
        "order": 93,
        "text": "Что такое миграции в Django?",
        "options": [
          {
            "id": "section-6-q93-a",
            "label": "а",
            "text": "Механизм изменения схемы базы данных на основе изменений моделей"
          },
          {
            "id": "section-6-q93-b",
            "label": "б",
            "text": "Перенос CSS из `head` в `body`"
          },
          {
            "id": "section-6-q93-v",
            "label": "в",
            "text": "Замена HTTP на HTTPS"
          },
          {
            "id": "section-6-q93-g",
            "label": "г",
            "text": "Удаление всех view"
          }
        ],
        "correctOptionId": "section-6-q93-a",
        "explanation": "миграции фиксируют изменения моделей и применяют их к базе данных.",
        "sourceRefs": [
          "Django Migrations"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q94",
        "sectionId": "section-6",
        "order": 94,
        "text": "Что делает команда git add?",
        "options": [
          {
            "id": "section-6-q94-a",
            "label": "а",
            "text": "Добавляет изменения в индекс перед коммитом"
          },
          {
            "id": "section-6-q94-b",
            "label": "б",
            "text": "Отправляет коммиты на сервер"
          },
          {
            "id": "section-6-q94-v",
            "label": "в",
            "text": "Скачивает изменения из удаленного репозитория"
          },
          {
            "id": "section-6-q94-g",
            "label": "г",
            "text": "Удаляет репозиторий"
          }
        ],
        "correctOptionId": "section-6-q94-a",
        "explanation": "git add подготавливает выбранные изменения к следующему коммиту.",
        "sourceRefs": [
          "общая информация.md",
          "Pro Git Book"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-6-pro-git-book"
        ]
      },
      {
        "id": "section-6-q95",
        "sectionId": "section-6",
        "order": 95,
        "text": "Что делает команда git fetch?",
        "options": [
          {
            "id": "section-6-q95-a",
            "label": "а",
            "text": "Получает данные из удаленного репозитория без автоматического слияния в текущую ветку"
          },
          {
            "id": "section-6-q95-b",
            "label": "б",
            "text": "Создает HTML-файл"
          },
          {
            "id": "section-6-q95-v",
            "label": "в",
            "text": "Фиксирует изменения локально"
          },
          {
            "id": "section-6-q95-g",
            "label": "г",
            "text": "Отправляет изменения на сервер"
          }
        ],
        "correctOptionId": "section-6-q95-a",
        "explanation": "fetch обновляет информацию об удаленных ветках, но не меняет рабочую ветку как pull со слиянием.",
        "sourceRefs": [
          "общая информация.md",
          "Pro Git Book"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-6-pro-git-book"
        ]
      },
      {
        "id": "section-6-q96",
        "sectionId": "section-6",
        "order": 96,
        "text": "Что такое breakpoint?",
        "options": [
          {
            "id": "section-6-q96-a",
            "label": "а",
            "text": "Точка останова, на которой отладчик приостанавливает выполнение программы"
          },
          {
            "id": "section-6-q96-b",
            "label": "б",
            "text": "CSS-точка для выбора класса"
          },
          {
            "id": "section-6-q96-v",
            "label": "в",
            "text": "HTTP-ответ 200"
          },
          {
            "id": "section-6-q96-g",
            "label": "г",
            "text": "Тип HTML-формы"
          }
        ],
        "correctOptionId": "section-6-q96-a",
        "explanation": "breakpoints позволяют пошагово исследовать выполнение и значения переменных.",
        "sourceRefs": [
          "общая информация.md",
          "Chrome DevTools documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q97",
        "sectionId": "section-6",
        "order": 97,
        "text": "Что такое frontend?",
        "options": [
          {
            "id": "section-6-q97-a",
            "label": "а",
            "text": "Клиентская часть приложения, с которой взаимодействует пользователь"
          },
          {
            "id": "section-6-q97-b",
            "label": "б",
            "text": "Только база данных"
          },
          {
            "id": "section-6-q97-v",
            "label": "в",
            "text": "Только серверная операционная система"
          },
          {
            "id": "section-6-q97-g",
            "label": "г",
            "text": "Только Git-история"
          }
        ],
        "correctOptionId": "section-6-q97-a",
        "explanation": "frontend включает HTML, CSS, JavaScript и UI-логику в браузере.",
        "sourceRefs": [
          "общая информация.md",
          "MDN Learn Web"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q98",
        "sectionId": "section-6",
        "order": 98,
        "text": "Что такое backend?",
        "options": [
          {
            "id": "section-6-q98-a",
            "label": "а",
            "text": "Серверная часть приложения, обрабатывающая запросы, данные и бизнес-логику"
          },
          {
            "id": "section-6-q98-b",
            "label": "б",
            "text": "Только CSS-файл"
          },
          {
            "id": "section-6-q98-v",
            "label": "в",
            "text": "Только HTML-разметка"
          },
          {
            "id": "section-6-q98-g",
            "label": "г",
            "text": "Только изображение в шапке сайта"
          }
        ],
        "correctOptionId": "section-6-q98-a",
        "explanation": "backend принимает запросы, работает с базой данных и возвращает ответы клиенту.",
        "sourceRefs": [
          "общая информация.md",
          "Django documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-6-q99",
        "sectionId": "section-6",
        "order": 99,
        "text": "Что такое progressive enhancement?",
        "options": [
          {
            "id": "section-6-q99-a",
            "label": "а",
            "text": "Подход, при котором базовая функциональность доступна всем, а улучшения добавляются при поддержке браузером"
          },
          {
            "id": "section-6-q99-b",
            "label": "б",
            "text": "Обязательное использование только последней версии браузера"
          },
          {
            "id": "section-6-q99-v",
            "label": "в",
            "text": "Запрет на HTML без JavaScript"
          },
          {
            "id": "section-6-q99-g",
            "label": "г",
            "text": "Способ создания Git-тега"
          }
        ],
        "correctOptionId": "section-6-q99-a",
        "explanation": "этот подход делает web-страницы устойчивее и доступнее.",
        "sourceRefs": [
          "MDN Progressive enhancement"
        ],
        "materialIds": []
      },
      {
        "id": "section-6-q100",
        "sectionId": "section-6",
        "order": 100,
        "text": "Что важно проверить в таблице с CRUD через backend?",
        "options": [
          {
            "id": "section-6-q100-a",
            "label": "а",
            "text": "Загрузку данных, добавление, удаление, обработку ошибок и обновление интерфейса после ответа сервера"
          },
          {
            "id": "section-6-q100-b",
            "label": "б",
            "text": "Только цвет заголовка таблицы"
          },
          {
            "id": "section-6-q100-v",
            "label": "в",
            "text": "Только наличие тега `title`"
          },
          {
            "id": "section-6-q100-g",
            "label": "г",
            "text": "Только команду `git fetch`"
          }
        ],
        "correctOptionId": "section-6-q100-a",
        "explanation": "CRUD-компонент должен корректно синхронизировать UI с результатами backend-операций и показывать ошибки.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "MDN Fetch API",
          "Django documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      }
    ]
  },
  {
    "id": "section-7",
    "title": "Тема 7. Программирование на Java: 100 тестовых вопросов",
    "description": "Импортировано из файла тема_7_программирование_на_java_100_тестовых_вопросов.md.",
    "order": 7,
    "questions": [
      {
        "id": "section-7-q1",
        "sectionId": "section-7",
        "order": 1,
        "text": "Что произойдет, если у объекта, захватившего монитор, вызвать wait() без последующего notify() или notifyAll()?",
        "options": [
          {
            "id": "section-7-q1-a",
            "label": "а",
            "text": "Поток освободит монитор и будет ждать, пока его не уведомят, не прервут или не произойдет spurious wakeup"
          },
          {
            "id": "section-7-q1-b",
            "label": "б",
            "text": "Поток продолжит выполнение без остановки"
          },
          {
            "id": "section-7-q1-v",
            "label": "в",
            "text": "JVM немедленно завершит программу"
          },
          {
            "id": "section-7-q1-g",
            "label": "г",
            "text": "Метод `wait()` запустит новый поток"
          }
        ],
        "correctOptionId": "section-7-q1-a",
        "explanation": "wait() переводит поток в ожидание и освобождает монитор; без уведомления поток может ждать неограниченно долго.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java Object API: wait, notify, notifyAll"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q2",
        "sectionId": "section-7",
        "order": 2,
        "text": "Какая реализация Map сохраняет порядок вставки элементов?",
        "options": [
          {
            "id": "section-7-q2-a",
            "label": "а",
            "text": "`HashMap`"
          },
          {
            "id": "section-7-q2-b",
            "label": "б",
            "text": "`TreeMap`"
          },
          {
            "id": "section-7-q2-v",
            "label": "в",
            "text": "`LinkedHashMap`"
          },
          {
            "id": "section-7-q2-g",
            "label": "г",
            "text": "`WeakHashMap`"
          }
        ],
        "correctOptionId": "section-7-q2-v",
        "explanation": "LinkedHashMap поддерживает двусвязный список записей и может сохранять порядок вставки.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java SE API: LinkedHashMap"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q3",
        "sectionId": "section-7",
        "order": 3,
        "text": "Какой вариант Stream API соберет ненулевые элементы в List?",
        "options": [
          {
            "id": "section-7-q3-a",
            "label": "а",
            "text": "`stream.filter(Objects::nonNull).collect(Collectors.toList())`"
          },
          {
            "id": "section-7-q3-b",
            "label": "б",
            "text": "`stream.map(null).toArray()`"
          },
          {
            "id": "section-7-q3-v",
            "label": "в",
            "text": "`stream.collect(null)`"
          },
          {
            "id": "section-7-q3-g",
            "label": "г",
            "text": "`stream.removeNulls().list()`"
          }
        ],
        "correctOptionId": "section-7-q3-a",
        "explanation": "filter(Objects::nonNull) отбрасывает null, а collect(Collectors.toList()) собирает результат в список.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java Stream API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q4",
        "sectionId": "section-7",
        "order": 4,
        "text": "Какое утверждение о volatile верно?",
        "options": [
          {
            "id": "section-7-q4-a",
            "label": "а",
            "text": "`volatile` гарантирует видимость последнего записанного значения между потоками"
          },
          {
            "id": "section-7-q4-b",
            "label": "б",
            "text": "`volatile` делает любую операцию атомарной"
          },
          {
            "id": "section-7-q4-v",
            "label": "в",
            "text": "`volatile` заменяет все блокировки и коллекции concurrent"
          },
          {
            "id": "section-7-q4-g",
            "label": "г",
            "text": "`volatile` запрещает чтение переменной"
          }
        ],
        "correctOptionId": "section-7-q4-a",
        "explanation": "volatile устанавливает happens-before для чтения/записи переменной, но не делает составные операции вроде count++ атомарными.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java Language Specification"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q5",
        "sectionId": "section-7",
        "order": 5,
        "text": "Что из перечисленного НЕ входит в состав памяти JVM?",
        "options": [
          {
            "id": "section-7-q5-a",
            "label": "а",
            "text": "Heap"
          },
          {
            "id": "section-7-q5-b",
            "label": "б",
            "text": "Stack"
          },
          {
            "id": "section-7-q5-v",
            "label": "в",
            "text": "Code Cache"
          },
          {
            "id": "section-7-q5-g",
            "label": "г",
            "text": "RAM Cache"
          }
        ],
        "correctOptionId": "section-7-q5-g",
        "explanation": "heap, stack и code cache относятся к областям памяти JVM, а \"RAM Cache\" не является стандартной областью памяти JVM.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "JVM documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q6",
        "sectionId": "section-7",
        "order": 6,
        "text": "Какая аннотация в Spring используется для внедрения зависимости через конструктор?",
        "options": [
          {
            "id": "section-7-q6-a",
            "label": "а",
            "text": "`@Autowired`"
          },
          {
            "id": "section-7-q6-b",
            "label": "б",
            "text": "`@Override`"
          },
          {
            "id": "section-7-q6-v",
            "label": "в",
            "text": "`@Entity`"
          },
          {
            "id": "section-7-q6-g",
            "label": "г",
            "text": "`@BeforeEach`"
          }
        ],
        "correctOptionId": "section-7-q6-a",
        "explanation": "@Autowired может использоваться для constructor injection; при единственном конструкторе в современных версиях Spring ее часто можно не писать явно.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Framework documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q7",
        "sectionId": "section-7",
        "order": 7,
        "text": "Что из перечисленного является функциональным интерфейсом?",
        "options": [
          {
            "id": "section-7-q7-a",
            "label": "а",
            "text": "`Runnable`"
          },
          {
            "id": "section-7-q7-b",
            "label": "б",
            "text": "`Comparable`"
          },
          {
            "id": "section-7-q7-v",
            "label": "в",
            "text": "`Iterable`"
          },
          {
            "id": "section-7-q7-g",
            "label": "г",
            "text": "Все перечисленные"
          }
        ],
        "correctOptionId": "section-7-q7-g",
        "explanation": "функциональный интерфейс имеет один абстрактный метод; у перечисленных интерфейсов это условие выполняется.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java Functional Interfaces"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q8",
        "sectionId": "section-7",
        "order": 8,
        "text": "Какой пул потоков создается при вызове Executors.newFixedThreadPool(10)?",
        "options": [
          {
            "id": "section-7-q8-a",
            "label": "а",
            "text": "Пул с фиксированным числом рабочих потоков, равным 10"
          },
          {
            "id": "section-7-q8-b",
            "label": "б",
            "text": "Пул, создающий новый поток для каждой задачи без ограничений"
          },
          {
            "id": "section-7-q8-v",
            "label": "в",
            "text": "Однопоточный executor"
          },
          {
            "id": "section-7-q8-g",
            "label": "г",
            "text": "ForkJoinPool с work-stealing по умолчанию"
          }
        ],
        "correctOptionId": "section-7-q8-a",
        "explanation": "newFixedThreadPool(10) переиспользует ограниченное число потоков и ставит лишние задачи в очередь.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java Executors API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q9",
        "sectionId": "section-7",
        "order": 9,
        "text": "Что такое false sharing в многопоточных приложениях?",
        "options": [
          {
            "id": "section-7-q9-a",
            "label": "а",
            "text": "Ситуация, когда независимые переменные разных потоков попадают в одну cache line и мешают друг другу"
          },
          {
            "id": "section-7-q9-b",
            "label": "б",
            "text": "Ошибка, при которой поток не может стартовать"
          },
          {
            "id": "section-7-q9-v",
            "label": "в",
            "text": "Вид наследования через `extends`"
          },
          {
            "id": "section-7-q9-g",
            "label": "г",
            "text": "Способ сериализации объекта"
          }
        ],
        "correctOptionId": "section-7-q9-a",
        "explanation": "разные ядра могут постоянно инвалидировать одну cache line, хотя потоки логически работают с разными данными.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java concurrency materials"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q10",
        "sectionId": "section-7",
        "order": 10,
        "text": "Какой аннотацией обычно помечают главный класс Spring Boot приложения?",
        "options": [
          {
            "id": "section-7-q10-a",
            "label": "а",
            "text": "`@SpringBootApplication`"
          },
          {
            "id": "section-7-q10-b",
            "label": "б",
            "text": "`@Entity`"
          },
          {
            "id": "section-7-q10-v",
            "label": "в",
            "text": "`@BeforeEach`"
          },
          {
            "id": "section-7-q10-g",
            "label": "г",
            "text": "`@FunctionalInterface`"
          }
        ],
        "correctOptionId": "section-7-q10-a",
        "explanation": "@SpringBootApplication объединяет настройки Spring Boot приложения; запуск обычно выполняется через SpringApplication.run(...).",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Boot documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q11",
        "sectionId": "section-7",
        "order": 11,
        "text": "Какой паттерн позволяет изменять поведение объекта во время выполнения?",
        "options": [
          {
            "id": "section-7-q11-a",
            "label": "а",
            "text": "Strategy"
          },
          {
            "id": "section-7-q11-b",
            "label": "б",
            "text": "Singleton"
          },
          {
            "id": "section-7-q11-v",
            "label": "в",
            "text": "Prototype"
          },
          {
            "id": "section-7-q11-g",
            "label": "г",
            "text": "Builder"
          }
        ],
        "correctOptionId": "section-7-q11-a",
        "explanation": "Strategy инкапсулирует семейство алгоритмов и позволяет подставлять нужную стратегию поведения.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "design patterns materials"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q12",
        "sectionId": "section-7",
        "order": 12,
        "text": "Какая стратегия генерации идентификатора в JPA создает отдельную таблицу для хранения следующего значения?",
        "options": [
          {
            "id": "section-7-q12-a",
            "label": "а",
            "text": "`GenerationType.AUTO`"
          },
          {
            "id": "section-7-q12-b",
            "label": "б",
            "text": "`GenerationType.IDENTITY`"
          },
          {
            "id": "section-7-q12-v",
            "label": "в",
            "text": "`GenerationType.SEQUENCE`"
          },
          {
            "id": "section-7-q12-g",
            "label": "г",
            "text": "`GenerationType.TABLE`"
          }
        ],
        "correctOptionId": "section-7-q12-g",
        "explanation": "стратегия TABLE использует специальную таблицу для хранения и выдачи значений идентификаторов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Jakarta Persistence/JPA documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q13",
        "sectionId": "section-7",
        "order": 13,
        "text": "Какая аннотация JUnit 5 используется для выполнения метода перед каждым тестом?",
        "options": [
          {
            "id": "section-7-q13-a",
            "label": "а",
            "text": "`@BeforeEach`"
          },
          {
            "id": "section-7-q13-b",
            "label": "б",
            "text": "`@BeforeAll`"
          },
          {
            "id": "section-7-q13-v",
            "label": "в",
            "text": "`@AfterEach`"
          },
          {
            "id": "section-7-q13-g",
            "label": "г",
            "text": "`@TestFactory`"
          }
        ],
        "correctOptionId": "section-7-q13-a",
        "explanation": "метод с @BeforeEach выполняется перед каждым тестовым методом.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "JUnit 5 User Guide"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-7-junit-5-user-guide"
        ]
      },
      {
        "id": "section-7-q14",
        "sectionId": "section-7",
        "order": 14,
        "text": "Какое утверждение о микросервисной архитектуре НЕ соответствует действительности?",
        "options": [
          {
            "id": "section-7-q14-a",
            "label": "а",
            "text": "Каждый сервис может иметь свою зону ответственности"
          },
          {
            "id": "section-7-q14-b",
            "label": "б",
            "text": "Сервисы обычно взаимодействуют через API или сообщения"
          },
          {
            "id": "section-7-q14-v",
            "label": "в",
            "text": "Все сервисы обязательно должны использовать одну общую базу данных и развертываться только вместе"
          },
          {
            "id": "section-7-q14-g",
            "label": "г",
            "text": "Микросервисы можно масштабировать независимо"
          }
        ],
        "correctOptionId": "section-7-q14-v",
        "explanation": "микросервисный подход обычно стремится к независимому развертыванию и слабой связанности сервисов.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Guides",
          "microservices materials"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-7-spring-guides"
        ]
      },
      {
        "id": "section-7-q15",
        "sectionId": "section-7",
        "order": 15,
        "text": "Для чего в практическом задании по параллельной сумме квадратов подходит CompletableFuture?",
        "options": [
          {
            "id": "section-7-q15-a",
            "label": "а",
            "text": "Для асинхронного запуска частей вычисления и объединения результатов"
          },
          {
            "id": "section-7-q15-b",
            "label": "б",
            "text": "Для хранения HTML-шаблонов"
          },
          {
            "id": "section-7-q15-v",
            "label": "в",
            "text": "Для генерации идентификаторов JPA"
          },
          {
            "id": "section-7-q15-g",
            "label": "г",
            "text": "Для создания CSS-селекторов"
          }
        ],
        "correctOptionId": "section-7-q15-a",
        "explanation": "CompletableFuture позволяет запускать задачи асинхронно, комбинировать результаты и обрабатывать ошибки.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java CompletableFuture API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q16",
        "sectionId": "section-7",
        "order": 16,
        "text": "Что из перечисленного подходит для выполнения параллельной обработки списка в Java?",
        "options": [
          {
            "id": "section-7-q16-a",
            "label": "а",
            "text": "`ForkJoinPool` или `ExecutorService`"
          },
          {
            "id": "section-7-q16-b",
            "label": "б",
            "text": "Только `StringBuilder`"
          },
          {
            "id": "section-7-q16-v",
            "label": "в",
            "text": "Только `Optional`"
          },
          {
            "id": "section-7-q16-g",
            "label": "г",
            "text": "Только `HashMap` без потоков"
          }
        ],
        "correctOptionId": "section-7-q16-a",
        "explanation": "оба механизма позволяют организовать выполнение задач в нескольких потоках.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java concurrency API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q17",
        "sectionId": "section-7",
        "order": 17,
        "text": "Какое требование характерно для LRU Cache из задания DOCX?",
        "options": [
          {
            "id": "section-7-q17-a",
            "label": "а",
            "text": "При превышении размера удалять наименее недавно использованную запись"
          },
          {
            "id": "section-7-q17-b",
            "label": "б",
            "text": "Хранить только один ключ"
          },
          {
            "id": "section-7-q17-v",
            "label": "в",
            "text": "Выполнять все операции за `O(n^2)`"
          },
          {
            "id": "section-7-q17-g",
            "label": "г",
            "text": "Не поддерживать метод `get`"
          }
        ],
        "correctOptionId": "section-7-q17-a",
        "explanation": "LRU расшифровывается как Least Recently Used: вытесняется запись, к которой давно не обращались.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java LinkedHashMap API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q18",
        "sectionId": "section-7",
        "order": 18,
        "text": "Почему LinkedHashMap удобен для реализации LRU Cache?",
        "options": [
          {
            "id": "section-7-q18-a",
            "label": "а",
            "text": "Он может поддерживать access-order и переопределять `removeEldestEntry`"
          },
          {
            "id": "section-7-q18-b",
            "label": "б",
            "text": "Он всегда потокобезопасен без синхронизации"
          },
          {
            "id": "section-7-q18-v",
            "label": "в",
            "text": "Он хранит только числа"
          },
          {
            "id": "section-7-q18-g",
            "label": "г",
            "text": "Он автоматически создает REST API"
          }
        ],
        "correctOptionId": "section-7-q18-a",
        "explanation": "LinkedHashMap умеет упорядочивать элементы по доступу, что удобно для вытеснения старых записей.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java LinkedHashMap API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q19",
        "sectionId": "section-7",
        "order": 19,
        "text": "Что должно возвращать get(K key) в LRU Cache по заданию DOCX, если ключа нет?",
        "options": [
          {
            "id": "section-7-q19-a",
            "label": "а",
            "text": "`null`"
          },
          {
            "id": "section-7-q19-b",
            "label": "б",
            "text": "Случайное значение"
          },
          {
            "id": "section-7-q19-v",
            "label": "в",
            "text": "Новый объект `Thread`"
          },
          {
            "id": "section-7-q19-g",
            "label": "г",
            "text": "Всегда `0`"
          }
        ],
        "correctOptionId": "section-7-q19-a",
        "explanation": "в задании явно указано: get(K key) возвращает значение или null, если ключ отсутствует.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q20",
        "sectionId": "section-7",
        "order": 20,
        "text": "Что лучше использовать для хранения данных in-memory в REST-сервисе библиотеки из задания DOCX?",
        "options": [
          {
            "id": "section-7-q20-a",
            "label": "а",
            "text": "`ConcurrentHashMap`"
          },
          {
            "id": "section-7-q20-b",
            "label": "б",
            "text": "`ArrayList` без синхронизации как единственный вариант"
          },
          {
            "id": "section-7-q20-v",
            "label": "в",
            "text": "`String`"
          },
          {
            "id": "section-7-q20-g",
            "label": "г",
            "text": "`Optional`"
          }
        ],
        "correctOptionId": "section-7-q20-a",
        "explanation": "в задании указано хранить данные в ConcurrentHashMap; эта структура подходит для конкурентного доступа.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java ConcurrentHashMap API"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q21",
        "sectionId": "section-7",
        "order": 21,
        "text": "Какой endpoint из задания DOCX добавляет книгу?",
        "options": [
          {
            "id": "section-7-q21-a",
            "label": "а",
            "text": "`POST /books`"
          },
          {
            "id": "section-7-q21-b",
            "label": "б",
            "text": "`GET /books/{id}`"
          },
          {
            "id": "section-7-q21-v",
            "label": "в",
            "text": "`DELETE /books/{id}`"
          },
          {
            "id": "section-7-q21-g",
            "label": "г",
            "text": "`PUT /books/{id}`"
          }
        ],
        "correctOptionId": "section-7-q21-a",
        "explanation": "POST обычно используется для создания ресурса, и в задании этот endpoint добавляет книгу.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Web documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q22",
        "sectionId": "section-7",
        "order": 22,
        "text": "Какой endpoint из задания DOCX получает книгу по идентификатору?",
        "options": [
          {
            "id": "section-7-q22-a",
            "label": "а",
            "text": "`GET /books/{id}`"
          },
          {
            "id": "section-7-q22-b",
            "label": "б",
            "text": "`POST /books`"
          },
          {
            "id": "section-7-q22-v",
            "label": "в",
            "text": "`DELETE /books/{id}`"
          },
          {
            "id": "section-7-q22-g",
            "label": "г",
            "text": "`PUT /books/{id}`"
          }
        ],
        "correctOptionId": "section-7-q22-a",
        "explanation": "GET по пути с {id} возвращает конкретный ресурс.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Web documentation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q23",
        "sectionId": "section-7",
        "order": 23,
        "text": "Для чего в REST-сервисе библиотеки нужны DTO?",
        "options": [
          {
            "id": "section-7-q23-a",
            "label": "а",
            "text": "Для отделения внешнего формата ввода/вывода от внутренних моделей"
          },
          {
            "id": "section-7-q23-b",
            "label": "б",
            "text": "Для запуска сборщика мусора"
          },
          {
            "id": "section-7-q23-v",
            "label": "в",
            "text": "Для создания потоков"
          },
          {
            "id": "section-7-q23-g",
            "label": "г",
            "text": "Для хранения байткода JVM"
          }
        ],
        "correctOptionId": "section-7-q23-a",
        "explanation": "DTO помогают контролировать данные API и не раскрывать внутренние модели напрямую.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Spring Guides"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-7-spring-guides"
        ]
      },
      {
        "id": "section-7-q24",
        "sectionId": "section-7",
        "order": 24,
        "text": "Какое правило валидации указано в задании REST-сервиса библиотеки?",
        "options": [
          {
            "id": "section-7-q24-a",
            "label": "а",
            "text": "Год издания не может быть в будущем"
          },
          {
            "id": "section-7-q24-b",
            "label": "б",
            "text": "Название книги всегда должно быть числом"
          },
          {
            "id": "section-7-q24-v",
            "label": "в",
            "text": "Автор должен быть `null`"
          },
          {
            "id": "section-7-q24-g",
            "label": "г",
            "text": "Жанр должен совпадать с именем класса"
          }
        ],
        "correctOptionId": "section-7-q24-a",
        "explanation": "в задании приведен пример валидации: год не может быть в будущем.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Jakarta Bean Validation"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx"
        ]
      },
      {
        "id": "section-7-q25",
        "sectionId": "section-7",
        "order": 25,
        "text": "Какое ключевое слово используется в Java для наследования класса?",
        "options": [
          {
            "id": "section-7-q25-a",
            "label": "а",
            "text": "`implements`"
          },
          {
            "id": "section-7-q25-b",
            "label": "б",
            "text": "`extends`"
          },
          {
            "id": "section-7-q25-v",
            "label": "в",
            "text": "`inherit`"
          },
          {
            "id": "section-7-q25-g",
            "label": "г",
            "text": "`super`"
          }
        ],
        "correctOptionId": "section-7-q25-b",
        "explanation": "extends указывает базовый класс, от которого наследуется новый класс.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Java Language Specification"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q26",
        "sectionId": "section-7",
        "order": 26,
        "text": "Какой паттерн проектирования гарантирует, что у класса есть только один экземпляр?",
        "options": [
          {
            "id": "section-7-q26-a",
            "label": "а",
            "text": "Factory"
          },
          {
            "id": "section-7-q26-b",
            "label": "б",
            "text": "Builder"
          },
          {
            "id": "section-7-q26-v",
            "label": "в",
            "text": "Singleton"
          },
          {
            "id": "section-7-q26-g",
            "label": "г",
            "text": "Prototype"
          }
        ],
        "correctOptionId": "section-7-q26-v",
        "explanation": "Singleton ограничивает создание экземпляров класса одним объектом и предоставляет глобальную точку доступа.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "design patterns materials"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q27",
        "sectionId": "section-7",
        "order": 27,
        "text": "Какой модификатор доступа означает \"доступен только внутри текущего класса\"?",
        "options": [
          {
            "id": "section-7-q27-a",
            "label": "а",
            "text": "`public`"
          },
          {
            "id": "section-7-q27-b",
            "label": "б",
            "text": "`protected`"
          },
          {
            "id": "section-7-q27-v",
            "label": "в",
            "text": "`private`"
          },
          {
            "id": "section-7-q27-g",
            "label": "г",
            "text": "default"
          }
        ],
        "correctOptionId": "section-7-q27-v",
        "explanation": "private ограничивает доступ членами того же класса.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Java access control"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q28",
        "sectionId": "section-7",
        "order": 28,
        "text": "Что выведет код int a = 5; int b = 2; System.out.println(a / b);?",
        "options": [
          {
            "id": "section-7-q28-a",
            "label": "а",
            "text": "`2.5`"
          },
          {
            "id": "section-7-q28-b",
            "label": "б",
            "text": "`2`"
          },
          {
            "id": "section-7-q28-v",
            "label": "в",
            "text": "`2.0`"
          },
          {
            "id": "section-7-q28-g",
            "label": "г",
            "text": "Ошибка компиляции"
          }
        ],
        "correctOptionId": "section-7-q28-b",
        "explanation": "при делении двух int дробная часть отбрасывается, поэтому результат равен 2.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Java arithmetic operators"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q29",
        "sectionId": "section-7",
        "order": 29,
        "text": "Какой метод запускает поток в Java после создания объекта Thread?",
        "options": [
          {
            "id": "section-7-q29-a",
            "label": "а",
            "text": "`start()`"
          },
          {
            "id": "section-7-q29-b",
            "label": "б",
            "text": "`run()`"
          },
          {
            "id": "section-7-q29-v",
            "label": "в",
            "text": "`execute()`"
          },
          {
            "id": "section-7-q29-g",
            "label": "г",
            "text": "`launch()`"
          }
        ],
        "correctOptionId": "section-7-q29-a",
        "explanation": "start() создает новый поток выполнения и вызывает run() уже в этом потоке.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "Java Thread API"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q30",
        "sectionId": "section-7",
        "order": 30,
        "text": "Что такое JVM?",
        "options": [
          {
            "id": "section-7-q30-a",
            "label": "а",
            "text": "Java Variable Manager"
          },
          {
            "id": "section-7-q30-b",
            "label": "б",
            "text": "Java Virtual Machine"
          },
          {
            "id": "section-7-q30-v",
            "label": "в",
            "text": "Java Version Manager"
          },
          {
            "id": "section-7-q30-g",
            "label": "г",
            "text": "Java Visual Module"
          }
        ],
        "correctOptionId": "section-7-q30-b",
        "explanation": "JVM исполняет Java bytecode и обеспечивает переносимость Java-программ.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "JVM documentation"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q31",
        "sectionId": "section-7",
        "order": 31,
        "text": "Где в Java обычно хранятся локальные переменные примитивных типов?",
        "options": [
          {
            "id": "section-7-q31-a",
            "label": "а",
            "text": "Heap"
          },
          {
            "id": "section-7-q31-b",
            "label": "б",
            "text": "Stack"
          },
          {
            "id": "section-7-q31-v",
            "label": "в",
            "text": "Metaspace"
          },
          {
            "id": "section-7-q31-g",
            "label": "г",
            "text": "Code Cache"
          }
        ],
        "correctOptionId": "section-7-q31-b",
        "explanation": "локальные переменные метода находятся во фрейме стека соответствующего потока.",
        "sourceRefs": [
          "I_Государственный_итоговый_экзамен_2026.pdf",
          "JVM memory model materials"
        ],
        "materialIds": [
          "mat-shared-i-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q32",
        "sectionId": "section-7",
        "order": 32,
        "text": "Какое ключевое слово используется для наследования класса в Java?",
        "options": [
          {
            "id": "section-7-q32-a",
            "label": "а",
            "text": "`implements`"
          },
          {
            "id": "section-7-q32-b",
            "label": "б",
            "text": "`super`"
          },
          {
            "id": "section-7-q32-v",
            "label": "в",
            "text": "`this`"
          },
          {
            "id": "section-7-q32-g",
            "label": "г",
            "text": "`extends`"
          }
        ],
        "correctOptionId": "section-7-q32-g",
        "explanation": "класс наследуется от другого класса с помощью extends; implements используется для интерфейсов.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Java Language Specification"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q33",
        "sectionId": "section-7",
        "order": 33,
        "text": "Какое ключевое слово используется для обработки исключений?",
        "options": [
          {
            "id": "section-7-q33-a",
            "label": "а",
            "text": "`throw`"
          },
          {
            "id": "section-7-q33-b",
            "label": "б",
            "text": "`finally`"
          },
          {
            "id": "section-7-q33-v",
            "label": "в",
            "text": "`try`"
          },
          {
            "id": "section-7-q33-g",
            "label": "г",
            "text": "`error`"
          }
        ],
        "correctOptionId": "section-7-q33-v",
        "explanation": "блок try содержит код, в котором может возникнуть исключение; обработка выполняется через catch, а finally используется для завершающего кода.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Java exceptions"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q34",
        "sectionId": "section-7",
        "order": 34,
        "text": "Что выведет код Optional<String> opt = Optional.ofNullable(null); String result = opt.orElse(\"default\"); System.out.println(result);?",
        "options": [
          {
            "id": "section-7-q34-a",
            "label": "а",
            "text": "`null`"
          },
          {
            "id": "section-7-q34-b",
            "label": "б",
            "text": "Ошибка: `NullPointerException`"
          },
          {
            "id": "section-7-q34-v",
            "label": "в",
            "text": "`default`"
          },
          {
            "id": "section-7-q34-g",
            "label": "г",
            "text": "`Optional.empty`"
          }
        ],
        "correctOptionId": "section-7-q34-v",
        "explanation": "ofNullable(null) создает пустой Optional, а orElse(\"default\") возвращает значение по умолчанию.",
        "sourceRefs": [
          "II_Государственный_итоговый_экзамен_2026.pdf",
          "Java Optional API"
        ],
        "materialIds": [
          "mat-shared-ii-gosudarstvennyi-itogovyi-ekzamen-2026-pdf"
        ]
      },
      {
        "id": "section-7-q35",
        "sectionId": "section-7",
        "order": 35,
        "text": "Что такое байткод Java?",
        "options": [
          {
            "id": "section-7-q35-a",
            "label": "а",
            "text": "Промежуточное представление программы, исполняемое JVM"
          },
          {
            "id": "section-7-q35-b",
            "label": "б",
            "text": "Исходный код CSS"
          },
          {
            "id": "section-7-q35-v",
            "label": "в",
            "text": "Только машинный код конкретного процессора"
          },
          {
            "id": "section-7-q35-g",
            "label": "г",
            "text": "Формат SQL-таблицы"
          }
        ],
        "correctOptionId": "section-7-q35-a",
        "explanation": "компилятор Java преобразует .java в .class с байткодом, который выполняет JVM.",
        "sourceRefs": [
          "общая информация.md",
          "JVM documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q36",
        "sectionId": "section-7",
        "order": 36,
        "text": "Какой инструмент компилирует Java-исходники в байткод?",
        "options": [
          {
            "id": "section-7-q36-a",
            "label": "а",
            "text": "`javac`"
          },
          {
            "id": "section-7-q36-b",
            "label": "б",
            "text": "`java`"
          },
          {
            "id": "section-7-q36-v",
            "label": "в",
            "text": "`javadoc`"
          },
          {
            "id": "section-7-q36-g",
            "label": "г",
            "text": "`jar`"
          }
        ],
        "correctOptionId": "section-7-q36-a",
        "explanation": "javac компилирует .java файлы, а команда java запускает программу.",
        "sourceRefs": [
          "Oracle Java Tools documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q37",
        "sectionId": "section-7",
        "order": 37,
        "text": "Какой метод является точкой входа обычного Java-приложения?",
        "options": [
          {
            "id": "section-7-q37-a",
            "label": "а",
            "text": "`public static void main(String[] args)`"
          },
          {
            "id": "section-7-q37-b",
            "label": "б",
            "text": "`public void start()`"
          },
          {
            "id": "section-7-q37-v",
            "label": "в",
            "text": "`private main()`"
          },
          {
            "id": "section-7-q37-g",
            "label": "г",
            "text": "`static class Main`"
          }
        ],
        "correctOptionId": "section-7-q37-a",
        "explanation": "JVM ищет main с подходящей сигнатурой как стартовую точку приложения.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q38",
        "sectionId": "section-7",
        "order": 38,
        "text": "Какой тип в Java хранит целые числа с плавающей точкой?",
        "options": [
          {
            "id": "section-7-q38-a",
            "label": "а",
            "text": "Такого типа нет: целые и числа с плавающей точкой разные категории"
          },
          {
            "id": "section-7-q38-b",
            "label": "б",
            "text": "`int`"
          },
          {
            "id": "section-7-q38-v",
            "label": "в",
            "text": "`boolean`"
          },
          {
            "id": "section-7-q38-g",
            "label": "г",
            "text": "`char`"
          }
        ],
        "correctOptionId": "section-7-q38-a",
        "explanation": "целые типы (int, long) и floating-point типы (float, double) различаются.",
        "sourceRefs": [
          "Java Language Specification"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q39",
        "sectionId": "section-7",
        "order": 39,
        "text": "Какой тип обычно используют для логических значений?",
        "options": [
          {
            "id": "section-7-q39-a",
            "label": "а",
            "text": "`boolean`"
          },
          {
            "id": "section-7-q39-b",
            "label": "б",
            "text": "`int`"
          },
          {
            "id": "section-7-q39-v",
            "label": "в",
            "text": "`char`"
          },
          {
            "id": "section-7-q39-g",
            "label": "г",
            "text": "`double`"
          }
        ],
        "correctOptionId": "section-7-q39-a",
        "explanation": "boolean принимает значения true или false.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q40",
        "sectionId": "section-7",
        "order": 40,
        "text": "Что означает модификатор public?",
        "options": [
          {
            "id": "section-7-q40-a",
            "label": "а",
            "text": "Доступ из любого места, где виден класс или член"
          },
          {
            "id": "section-7-q40-b",
            "label": "б",
            "text": "Доступ только внутри класса"
          },
          {
            "id": "section-7-q40-v",
            "label": "в",
            "text": "Доступ только внутри пакета"
          },
          {
            "id": "section-7-q40-g",
            "label": "г",
            "text": "Запрет наследования"
          }
        ],
        "correctOptionId": "section-7-q40-a",
        "explanation": "public является самым открытым модификатором доступа.",
        "sourceRefs": [
          "общая информация.md",
          "Java access control"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q41",
        "sectionId": "section-7",
        "order": 41,
        "text": "Что означает модификатор protected?",
        "options": [
          {
            "id": "section-7-q41-a",
            "label": "а",
            "text": "Доступ внутри пакета и из подклассов"
          },
          {
            "id": "section-7-q41-b",
            "label": "б",
            "text": "Доступ только внутри текущего метода"
          },
          {
            "id": "section-7-q41-v",
            "label": "в",
            "text": "Доступ отовсюду без ограничений"
          },
          {
            "id": "section-7-q41-g",
            "label": "г",
            "text": "Полный запрет наследования"
          }
        ],
        "correctOptionId": "section-7-q41-a",
        "explanation": "protected открывает доступ классам того же пакета и наследникам.",
        "sourceRefs": [
          "общая информация.md",
          "Java access control"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q42",
        "sectionId": "section-7",
        "order": 42,
        "text": "Что означает package-private доступ?",
        "options": [
          {
            "id": "section-7-q42-a",
            "label": "а",
            "text": "Доступ только внутри того же пакета, если модификатор не указан"
          },
          {
            "id": "section-7-q42-b",
            "label": "б",
            "text": "Доступ только внутри текущего класса"
          },
          {
            "id": "section-7-q42-v",
            "label": "в",
            "text": "Доступ из любого пакета"
          },
          {
            "id": "section-7-q42-g",
            "label": "г",
            "text": "Доступ только из интерфейсов"
          }
        ],
        "correctOptionId": "section-7-q42-a",
        "explanation": "отсутствие public, protected или private задает доступ на уровне пакета.",
        "sourceRefs": [
          "общая информация.md",
          "Java access control"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q43",
        "sectionId": "section-7",
        "order": 43,
        "text": "Чем == отличается от equals() для объектов?",
        "options": [
          {
            "id": "section-7-q43-a",
            "label": "а",
            "text": "`==` сравнивает ссылки, а `equals()` обычно сравнивает логическое равенство объектов"
          },
          {
            "id": "section-7-q43-b",
            "label": "б",
            "text": "`==` всегда сравнивает строки по содержимому"
          },
          {
            "id": "section-7-q43-v",
            "label": "в",
            "text": "`equals()` нельзя переопределять"
          },
          {
            "id": "section-7-q43-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q43-a",
        "explanation": "для объектов оператор == проверяет, указывают ли ссылки на один объект.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q44",
        "sectionId": "section-7",
        "order": 44,
        "text": "Зачем вместе с equals() обычно переопределяют hashCode()?",
        "options": [
          {
            "id": "section-7-q44-a",
            "label": "а",
            "text": "Чтобы равные объекты имели одинаковый hash code для корректной работы hash-коллекций"
          },
          {
            "id": "section-7-q44-b",
            "label": "б",
            "text": "Чтобы класс стал абстрактным"
          },
          {
            "id": "section-7-q44-v",
            "label": "в",
            "text": "Чтобы запретить наследование"
          },
          {
            "id": "section-7-q44-g",
            "label": "г",
            "text": "Чтобы JVM не использовала heap"
          }
        ],
        "correctOptionId": "section-7-q44-a",
        "explanation": "контракт hashCode важен для HashMap, HashSet и других структур на хешировании.",
        "sourceRefs": [
          "Java Object API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q45",
        "sectionId": "section-7",
        "order": 45,
        "text": "Что означает final у класса?",
        "options": [
          {
            "id": "section-7-q45-a",
            "label": "а",
            "text": "От такого класса нельзя наследоваться"
          },
          {
            "id": "section-7-q45-b",
            "label": "б",
            "text": "Такой класс всегда immutable"
          },
          {
            "id": "section-7-q45-v",
            "label": "в",
            "text": "Такой класс нельзя создать через `new`"
          },
          {
            "id": "section-7-q45-g",
            "label": "г",
            "text": "Такой класс автоматически становится интерфейсом"
          }
        ],
        "correctOptionId": "section-7-q45-a",
        "explanation": "final class запрещает создание подклассов.",
        "sourceRefs": [
          "Java Language Specification"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q46",
        "sectionId": "section-7",
        "order": 46,
        "text": "Что означает final у локальной переменной?",
        "options": [
          {
            "id": "section-7-q46-a",
            "label": "а",
            "text": "После инициализации переменную нельзя переназначить"
          },
          {
            "id": "section-7-q46-b",
            "label": "б",
            "text": "Объект по ссылке становится глубоко неизменяемым"
          },
          {
            "id": "section-7-q46-v",
            "label": "в",
            "text": "Переменная переносится в heap"
          },
          {
            "id": "section-7-q46-g",
            "label": "г",
            "text": "Переменная становится статической"
          }
        ],
        "correctOptionId": "section-7-q46-a",
        "explanation": "final запрещает повторное присваивание переменной, но не всегда делает объект неизменяемым.",
        "sourceRefs": [
          "Java Language Specification"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q47",
        "sectionId": "section-7",
        "order": 47,
        "text": "Что такое интерфейс в Java?",
        "options": [
          {
            "id": "section-7-q47-a",
            "label": "а",
            "text": "Тип, задающий контракт методов, который могут реализовывать классы"
          },
          {
            "id": "section-7-q47-b",
            "label": "б",
            "text": "Только графическое окно"
          },
          {
            "id": "section-7-q47-v",
            "label": "в",
            "text": "Только база данных"
          },
          {
            "id": "section-7-q47-g",
            "label": "г",
            "text": "Только поток выполнения"
          }
        ],
        "correctOptionId": "section-7-q47-a",
        "explanation": "интерфейсы описывают поведение, а классы реализуют его через implements.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q48",
        "sectionId": "section-7",
        "order": 48,
        "text": "Чем abstract class отличается от интерфейса в базовом случае?",
        "options": [
          {
            "id": "section-7-q48-a",
            "label": "а",
            "text": "Абстрактный класс может хранить состояние экземпляра, интерфейс задает контракт и не наследуется через `extends` классом"
          },
          {
            "id": "section-7-q48-b",
            "label": "б",
            "text": "Интерфейс всегда содержит только private-поля экземпляра"
          },
          {
            "id": "section-7-q48-v",
            "label": "в",
            "text": "Абстрактный класс нельзя наследовать"
          },
          {
            "id": "section-7-q48-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q48-a",
        "explanation": "абстрактный класс подходит для общей реализации и состояния, интерфейс - для контракта поведения.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q49",
        "sectionId": "section-7",
        "order": 49,
        "text": "Какой ключ используется для реализации интерфейса классом?",
        "options": [
          {
            "id": "section-7-q49-a",
            "label": "а",
            "text": "`implements`"
          },
          {
            "id": "section-7-q49-b",
            "label": "б",
            "text": "`extends`"
          },
          {
            "id": "section-7-q49-v",
            "label": "в",
            "text": "`instanceof`"
          },
          {
            "id": "section-7-q49-g",
            "label": "г",
            "text": "`package`"
          }
        ],
        "correctOptionId": "section-7-q49-a",
        "explanation": "класс реализует интерфейс с помощью implements.",
        "sourceRefs": [
          "Java Language Specification"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q50",
        "sectionId": "section-7",
        "order": 50,
        "text": "Что делает ключевое слово super?",
        "options": [
          {
            "id": "section-7-q50-a",
            "label": "а",
            "text": "Обращается к членам или конструктору родительского класса"
          },
          {
            "id": "section-7-q50-b",
            "label": "б",
            "text": "Создает новый поток"
          },
          {
            "id": "section-7-q50-v",
            "label": "в",
            "text": "Запускает сборщик мусора"
          },
          {
            "id": "section-7-q50-g",
            "label": "г",
            "text": "Делает поле приватным"
          }
        ],
        "correctOptionId": "section-7-q50-a",
        "explanation": "super позволяет вызвать конструктор родителя или обратиться к переопределенному методу.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q51",
        "sectionId": "section-7",
        "order": 51,
        "text": "Что делает ключевое слово this?",
        "options": [
          {
            "id": "section-7-q51-a",
            "label": "а",
            "text": "Ссылается на текущий объект"
          },
          {
            "id": "section-7-q51-b",
            "label": "б",
            "text": "Ссылается на родительский класс"
          },
          {
            "id": "section-7-q51-v",
            "label": "в",
            "text": "Запускает JVM"
          },
          {
            "id": "section-7-q51-g",
            "label": "г",
            "text": "Объявляет пакет"
          }
        ],
        "correctOptionId": "section-7-q51-a",
        "explanation": "this используется для обращения к полям, методам и конструкторам текущего объекта.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q52",
        "sectionId": "section-7",
        "order": 52,
        "text": "Что такое перегрузка метода?",
        "options": [
          {
            "id": "section-7-q52-a",
            "label": "а",
            "text": "Несколько методов с одним именем, но разными параметрами"
          },
          {
            "id": "section-7-q52-b",
            "label": "б",
            "text": "Переопределение метода родителя с той же сигнатурой"
          },
          {
            "id": "section-7-q52-v",
            "label": "в",
            "text": "Запуск метода в другом потоке"
          },
          {
            "id": "section-7-q52-g",
            "label": "г",
            "text": "Удаление метода из класса"
          }
        ],
        "correctOptionId": "section-7-q52-a",
        "explanation": "overload определяется на этапе компиляции по сигнатуре метода.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q53",
        "sectionId": "section-7",
        "order": 53,
        "text": "Что такое переопределение метода?",
        "options": [
          {
            "id": "section-7-q53-a",
            "label": "а",
            "text": "Реализация в подклассе метода родителя с совместимой сигнатурой"
          },
          {
            "id": "section-7-q53-b",
            "label": "б",
            "text": "Создание метода с другим именем"
          },
          {
            "id": "section-7-q53-v",
            "label": "в",
            "text": "Объявление локальной переменной"
          },
          {
            "id": "section-7-q53-g",
            "label": "г",
            "text": "Удаление конструктора"
          }
        ],
        "correctOptionId": "section-7-q53-a",
        "explanation": "overriding позволяет подклассу изменить поведение унаследованного метода.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q54",
        "sectionId": "section-7",
        "order": 54,
        "text": "Зачем используют аннотацию @Override?",
        "options": [
          {
            "id": "section-7-q54-a",
            "label": "а",
            "text": "Чтобы явно указать, что метод переопределяет метод суперкласса или интерфейса"
          },
          {
            "id": "section-7-q54-b",
            "label": "б",
            "text": "Чтобы сделать метод приватным"
          },
          {
            "id": "section-7-q54-v",
            "label": "в",
            "text": "Чтобы запустить поток"
          },
          {
            "id": "section-7-q54-g",
            "label": "г",
            "text": "Чтобы подключить базу данных"
          }
        ],
        "correctOptionId": "section-7-q54-a",
        "explanation": "компилятор проверит корректность переопределения и поможет найти ошибку в сигнатуре.",
        "sourceRefs": [
          "Java annotations documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q55",
        "sectionId": "section-7",
        "order": 55,
        "text": "Что такое checked exception?",
        "options": [
          {
            "id": "section-7-q55-a",
            "label": "а",
            "text": "Исключение, которое компилятор требует обработать или объявить в `throws`"
          },
          {
            "id": "section-7-q55-b",
            "label": "б",
            "text": "Исключение, которое невозможно перехватить"
          },
          {
            "id": "section-7-q55-v",
            "label": "в",
            "text": "Исключение только для SQL"
          },
          {
            "id": "section-7-q55-g",
            "label": "г",
            "text": "Любая ошибка синтаксиса"
          }
        ],
        "correctOptionId": "section-7-q55-a",
        "explanation": "checked exceptions проверяются на этапе компиляции.",
        "sourceRefs": [
          "Java exceptions documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q56",
        "sectionId": "section-7",
        "order": 56,
        "text": "Что такое unchecked exception?",
        "options": [
          {
            "id": "section-7-q56-a",
            "label": "а",
            "text": "Исключение-наследник `RuntimeException`, которое не нужно обязательно объявлять или ловить"
          },
          {
            "id": "section-7-q56-b",
            "label": "б",
            "text": "Любая ошибка компиляции"
          },
          {
            "id": "section-7-q56-v",
            "label": "в",
            "text": "Исключение, которое JVM игнорирует"
          },
          {
            "id": "section-7-q56-g",
            "label": "г",
            "text": "Только `IOException`"
          }
        ],
        "correctOptionId": "section-7-q56-a",
        "explanation": "unchecked exceptions обычно отражают ошибки программной логики и не проверяются компилятором.",
        "sourceRefs": [
          "Java exceptions documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q57",
        "sectionId": "section-7",
        "order": 57,
        "text": "Для чего используется блок finally?",
        "options": [
          {
            "id": "section-7-q57-a",
            "label": "а",
            "text": "Для кода, который должен выполниться после `try/catch` независимо от результата, кроме аварийных случаев"
          },
          {
            "id": "section-7-q57-b",
            "label": "б",
            "text": "Для объявления класса"
          },
          {
            "id": "section-7-q57-v",
            "label": "в",
            "text": "Для запуска потока"
          },
          {
            "id": "section-7-q57-g",
            "label": "г",
            "text": "Для создания lambda-выражения"
          }
        ],
        "correctOptionId": "section-7-q57-a",
        "explanation": "finally часто используют для освобождения ресурсов, хотя try-with-resources обычно удобнее.",
        "sourceRefs": [
          "общая информация.md",
          "Java exceptions documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q58",
        "sectionId": "section-7",
        "order": 58,
        "text": "Что делает throw?",
        "options": [
          {
            "id": "section-7-q58-a",
            "label": "а",
            "text": "Выбрасывает исключение"
          },
          {
            "id": "section-7-q58-b",
            "label": "б",
            "text": "Объявляет, что метод может выбросить исключение"
          },
          {
            "id": "section-7-q58-v",
            "label": "в",
            "text": "Запускает новый поток"
          },
          {
            "id": "section-7-q58-g",
            "label": "г",
            "text": "Останавливает сборщик мусора"
          }
        ],
        "correctOptionId": "section-7-q58-a",
        "explanation": "throw new Exception(...) создает и выбрасывает конкретное исключение.",
        "sourceRefs": [
          "общая информация.md",
          "Java exceptions documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q59",
        "sectionId": "section-7",
        "order": 59,
        "text": "Что делает throws в сигнатуре метода?",
        "options": [
          {
            "id": "section-7-q59-a",
            "label": "а",
            "text": "Объявляет, какие исключения метод может выбросить вызывающему коду"
          },
          {
            "id": "section-7-q59-b",
            "label": "б",
            "text": "Немедленно выбрасывает исключение"
          },
          {
            "id": "section-7-q59-v",
            "label": "в",
            "text": "Создает новый объект"
          },
          {
            "id": "section-7-q59-g",
            "label": "г",
            "text": "Делает метод синхронизированным"
          }
        ],
        "correctOptionId": "section-7-q59-a",
        "explanation": "throws сообщает вызывающей стороне о потенциальных исключениях.",
        "sourceRefs": [
          "Java exceptions documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q60",
        "sectionId": "section-7",
        "order": 60,
        "text": "Для чего используется try-with-resources?",
        "options": [
          {
            "id": "section-7-q60-a",
            "label": "а",
            "text": "Для автоматического закрытия ресурсов, реализующих `AutoCloseable`"
          },
          {
            "id": "section-7-q60-b",
            "label": "б",
            "text": "Для создания stream pipeline"
          },
          {
            "id": "section-7-q60-v",
            "label": "в",
            "text": "Для наследования класса"
          },
          {
            "id": "section-7-q60-g",
            "label": "г",
            "text": "Для запуска Spring Boot"
          }
        ],
        "correctOptionId": "section-7-q60-a",
        "explanation": "ресурсы в скобках try (...) автоматически закрываются после блока.",
        "sourceRefs": [
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q61",
        "sectionId": "section-7",
        "order": 61,
        "text": "Что возвращает Optional.empty()?",
        "options": [
          {
            "id": "section-7-q61-a",
            "label": "а",
            "text": "Пустой контейнер `Optional` без значения"
          },
          {
            "id": "section-7-q61-b",
            "label": "б",
            "text": "`null`"
          },
          {
            "id": "section-7-q61-v",
            "label": "в",
            "text": "Исключение всегда"
          },
          {
            "id": "section-7-q61-g",
            "label": "г",
            "text": "Новый поток"
          }
        ],
        "correctOptionId": "section-7-q61-a",
        "explanation": "Optional.empty() представляет отсутствие значения без прямого использования null.",
        "sourceRefs": [
          "общая информация.md",
          "Java Optional API"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q62",
        "sectionId": "section-7",
        "order": 62,
        "text": "Чем опасен вызов Optional.get() без проверки?",
        "options": [
          {
            "id": "section-7-q62-a",
            "label": "а",
            "text": "Если значения нет, будет выброшено `NoSuchElementException`"
          },
          {
            "id": "section-7-q62-b",
            "label": "б",
            "text": "Он всегда возвращает `null`"
          },
          {
            "id": "section-7-q62-v",
            "label": "в",
            "text": "Он компилирует класс заново"
          },
          {
            "id": "section-7-q62-g",
            "label": "г",
            "text": "Он блокирует поток навсегда"
          }
        ],
        "correctOptionId": "section-7-q62-a",
        "explanation": "безопаснее использовать orElse, orElseGet, ifPresent или проверку isPresent.",
        "sourceRefs": [
          "Java Optional API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q63",
        "sectionId": "section-7",
        "order": 63,
        "text": "Чем orElse() отличается от orElseGet()?",
        "options": [
          {
            "id": "section-7-q63-a",
            "label": "а",
            "text": "Аргумент `orElse()` вычисляется сразу, а supplier в `orElseGet()` вызывается только при отсутствии значения"
          },
          {
            "id": "section-7-q63-b",
            "label": "б",
            "text": "`orElseGet()` всегда возвращает `null`"
          },
          {
            "id": "section-7-q63-v",
            "label": "в",
            "text": "`orElse()` нельзя использовать со строками"
          },
          {
            "id": "section-7-q63-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q63-a",
        "explanation": "orElseGet() полезен, если значение по умолчанию дорого вычислять.",
        "sourceRefs": [
          "Java Optional API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q64",
        "sectionId": "section-7",
        "order": 64,
        "text": "Чем Thread.start() отличается от прямого вызова run()?",
        "options": [
          {
            "id": "section-7-q64-a",
            "label": "а",
            "text": "`start()` запускает новый поток, а прямой `run()` выполняется в текущем потоке"
          },
          {
            "id": "section-7-q64-b",
            "label": "б",
            "text": "`run()` всегда быстрее и запускает новый поток"
          },
          {
            "id": "section-7-q64-v",
            "label": "в",
            "text": "`start()` только компилирует класс"
          },
          {
            "id": "section-7-q64-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q64-a",
        "explanation": "новый поток создается именно при вызове start().",
        "sourceRefs": [
          "общая информация.md",
          "Java Thread API"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q65",
        "sectionId": "section-7",
        "order": 65,
        "text": "Что делает synchronized у метода или блока?",
        "options": [
          {
            "id": "section-7-q65-a",
            "label": "а",
            "text": "Ограничивает одновременный доступ потоков через монитор объекта или класса"
          },
          {
            "id": "section-7-q65-b",
            "label": "б",
            "text": "Делает переменную видимой без блокировки"
          },
          {
            "id": "section-7-q65-v",
            "label": "в",
            "text": "Создает HTTP-запрос"
          },
          {
            "id": "section-7-q65-g",
            "label": "г",
            "text": "Запрещает наследование"
          }
        ],
        "correctOptionId": "section-7-q65-a",
        "explanation": "synchronized обеспечивает взаимное исключение и правила видимости памяти.",
        "sourceRefs": [
          "Java concurrency documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q66",
        "sectionId": "section-7",
        "order": 66,
        "text": "Когда можно вызывать wait() у объекта?",
        "options": [
          {
            "id": "section-7-q66-a",
            "label": "а",
            "text": "Только когда текущий поток владеет монитором этого объекта"
          },
          {
            "id": "section-7-q66-b",
            "label": "б",
            "text": "Всегда, из любого места"
          },
          {
            "id": "section-7-q66-v",
            "label": "в",
            "text": "Только до создания объекта"
          },
          {
            "id": "section-7-q66-g",
            "label": "г",
            "text": "Только в статическом методе"
          }
        ],
        "correctOptionId": "section-7-q66-a",
        "explanation": "иначе будет выброшено IllegalMonitorStateException.",
        "sourceRefs": [
          "Java Object API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q67",
        "sectionId": "section-7",
        "order": 67,
        "text": "Чем notify() отличается от notifyAll()?",
        "options": [
          {
            "id": "section-7-q67-a",
            "label": "а",
            "text": "`notify()` будит один ожидающий поток, `notifyAll()` - все ожидающие на этом мониторе потоки"
          },
          {
            "id": "section-7-q67-b",
            "label": "б",
            "text": "`notifyAll()` завершает JVM"
          },
          {
            "id": "section-7-q67-v",
            "label": "в",
            "text": "`notify()` всегда запускает новый поток"
          },
          {
            "id": "section-7-q67-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q67-a",
        "explanation": "выбор зависит от условия ожидания и риска оставить нужный поток спящим.",
        "sourceRefs": [
          "Java Object API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q68",
        "sectionId": "section-7",
        "order": 68,
        "text": "Для чего нужен ExecutorService?",
        "options": [
          {
            "id": "section-7-q68-a",
            "label": "а",
            "text": "Для управления выполнением задач в пуле потоков"
          },
          {
            "id": "section-7-q68-b",
            "label": "б",
            "text": "Для хранения key-value данных"
          },
          {
            "id": "section-7-q68-v",
            "label": "в",
            "text": "Для компиляции Java-файлов"
          },
          {
            "id": "section-7-q68-g",
            "label": "г",
            "text": "Для создания JPA-сущностей"
          }
        ],
        "correctOptionId": "section-7-q68-a",
        "explanation": "executor отделяет постановку задач от управления потоками.",
        "sourceRefs": [
          "общая информация.md",
          "Java Executors API"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q69",
        "sectionId": "section-7",
        "order": 69,
        "text": "Зачем вызывать shutdown() у ExecutorService?",
        "options": [
          {
            "id": "section-7-q69-a",
            "label": "а",
            "text": "Чтобы корректно завершить прием новых задач и остановить пул после выполнения текущих"
          },
          {
            "id": "section-7-q69-b",
            "label": "б",
            "text": "Чтобы удалить исходный код"
          },
          {
            "id": "section-7-q69-v",
            "label": "в",
            "text": "Чтобы очистить heap вручную"
          },
          {
            "id": "section-7-q69-g",
            "label": "г",
            "text": "Чтобы создать новый поток"
          }
        ],
        "correctOptionId": "section-7-q69-a",
        "explanation": "без завершения executor его рабочие потоки могут продолжать жить.",
        "sourceRefs": [
          "Java Executors API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q70",
        "sectionId": "section-7",
        "order": 70,
        "text": "Для чего подходит ForkJoinPool?",
        "options": [
          {
            "id": "section-7-q70-a",
            "label": "а",
            "text": "Для рекурсивного разбиения задачи на подзадачи и объединения результатов"
          },
          {
            "id": "section-7-q70-b",
            "label": "б",
            "text": "Только для чтения XML"
          },
          {
            "id": "section-7-q70-v",
            "label": "в",
            "text": "Только для хранения строк"
          },
          {
            "id": "section-7-q70-g",
            "label": "г",
            "text": "Только для работы с JPA-аннотациями"
          }
        ],
        "correctOptionId": "section-7-q70-a",
        "explanation": "Fork/Join использует work-stealing и удобен для divide-and-conquer задач.",
        "sourceRefs": [
          "общая информация.md",
          "Java ForkJoinPool API"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q71",
        "sectionId": "section-7",
        "order": 71,
        "text": "Что такое race condition?",
        "options": [
          {
            "id": "section-7-q71-a",
            "label": "а",
            "text": "Ошибка, при которой результат зависит от непредсказуемого порядка выполнения потоков"
          },
          {
            "id": "section-7-q71-b",
            "label": "б",
            "text": "Ошибка компиляции из-за отсутствия `main`"
          },
          {
            "id": "section-7-q71-v",
            "label": "в",
            "text": "Паттерн создания одного объекта"
          },
          {
            "id": "section-7-q71-g",
            "label": "г",
            "text": "Тип JPA-генерации id"
          }
        ],
        "correctOptionId": "section-7-q71-a",
        "explanation": "при гонке потоки конкурируют за общие данные без достаточной синхронизации.",
        "sourceRefs": [
          "Java concurrency materials"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q72",
        "sectionId": "section-7",
        "order": 72,
        "text": "Что такое deadlock?",
        "options": [
          {
            "id": "section-7-q72-a",
            "label": "а",
            "text": "Взаимная блокировка, когда потоки ждут ресурсы друг друга и не могут продолжить выполнение"
          },
          {
            "id": "section-7-q72-b",
            "label": "б",
            "text": "Успешное завершение всех потоков"
          },
          {
            "id": "section-7-q72-v",
            "label": "в",
            "text": "Обычная сборка проекта"
          },
          {
            "id": "section-7-q72-g",
            "label": "г",
            "text": "Нормальная работа `Optional`"
          }
        ],
        "correctOptionId": "section-7-q72-a",
        "explanation": "deadlock возникает при циклическом ожидании блокировок.",
        "sourceRefs": [
          "Java concurrency materials"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q73",
        "sectionId": "section-7",
        "order": 73,
        "text": "Какая коллекция является потокобезопасной альтернативой HashMap для частого конкурентного доступа?",
        "options": [
          {
            "id": "section-7-q73-a",
            "label": "а",
            "text": "`ConcurrentHashMap`"
          },
          {
            "id": "section-7-q73-b",
            "label": "б",
            "text": "`ArrayList`"
          },
          {
            "id": "section-7-q73-v",
            "label": "в",
            "text": "`LinkedList`"
          },
          {
            "id": "section-7-q73-g",
            "label": "г",
            "text": "`TreeSet`"
          }
        ],
        "correctOptionId": "section-7-q73-a",
        "explanation": "ConcurrentHashMap рассчитан на конкурентные операции чтения и записи.",
        "sourceRefs": [
          "Java ConcurrentHashMap API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q74",
        "sectionId": "section-7",
        "order": 74,
        "text": "Что хранится в heap?",
        "options": [
          {
            "id": "section-7-q74-a",
            "label": "а",
            "text": "Объекты и массивы, созданные во время выполнения"
          },
          {
            "id": "section-7-q74-b",
            "label": "б",
            "text": "Только фреймы вызовов методов"
          },
          {
            "id": "section-7-q74-v",
            "label": "в",
            "text": "Только байткод методов"
          },
          {
            "id": "section-7-q74-g",
            "label": "г",
            "text": "Только настройки Git"
          }
        ],
        "correctOptionId": "section-7-q74-a",
        "explanation": "heap является основной областью памяти для объектов Java.",
        "sourceRefs": [
          "общая информация.md",
          "JVM memory documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q75",
        "sectionId": "section-7",
        "order": 75,
        "text": "Что хранится в stack потока?",
        "options": [
          {
            "id": "section-7-q75-a",
            "label": "а",
            "text": "Фреймы вызовов методов и локальные переменные"
          },
          {
            "id": "section-7-q75-b",
            "label": "б",
            "text": "Все объекты приложения навсегда"
          },
          {
            "id": "section-7-q75-v",
            "label": "в",
            "text": "Только классы Spring"
          },
          {
            "id": "section-7-q75-g",
            "label": "г",
            "text": "Только JPA-таблицы"
          }
        ],
        "correctOptionId": "section-7-q75-a",
        "explanation": "каждый поток имеет свой стек вызовов.",
        "sourceRefs": [
          "общая информация.md",
          "JVM memory documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q76",
        "sectionId": "section-7",
        "order": 76,
        "text": "Для чего нужен garbage collector?",
        "options": [
          {
            "id": "section-7-q76-a",
            "label": "а",
            "text": "Для автоматического освобождения памяти объектов, которые больше недостижимы"
          },
          {
            "id": "section-7-q76-b",
            "label": "б",
            "text": "Для компиляции Java в JavaScript"
          },
          {
            "id": "section-7-q76-v",
            "label": "в",
            "text": "Для ручного закрытия файлов вместо `try-with-resources`"
          },
          {
            "id": "section-7-q76-g",
            "label": "г",
            "text": "Для создания REST endpoint"
          }
        ],
        "correctOptionId": "section-7-q76-a",
        "explanation": "GC управляет heap-памятью и удаляет недостижимые объекты.",
        "sourceRefs": [
          "JVM documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q77",
        "sectionId": "section-7",
        "order": 77,
        "text": "Что такое ArrayList?",
        "options": [
          {
            "id": "section-7-q77-a",
            "label": "а",
            "text": "Реализация `List` на основе динамического массива"
          },
          {
            "id": "section-7-q77-b",
            "label": "б",
            "text": "Реализация `Map` с ключами"
          },
          {
            "id": "section-7-q77-v",
            "label": "в",
            "text": "Поток выполнения"
          },
          {
            "id": "section-7-q77-g",
            "label": "г",
            "text": "JPA-аннотация"
          }
        ],
        "correctOptionId": "section-7-q77-a",
        "explanation": "ArrayList хранит элементы в массиве, который может расширяться.",
        "sourceRefs": [
          "Java Collections Framework"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q78",
        "sectionId": "section-7",
        "order": 78,
        "text": "Что такое HashMap?",
        "options": [
          {
            "id": "section-7-q78-a",
            "label": "а",
            "text": "Коллекция key-value, использующая хеширование ключей"
          },
          {
            "id": "section-7-q78-b",
            "label": "б",
            "text": "Упорядоченный список без ключей"
          },
          {
            "id": "section-7-q78-v",
            "label": "в",
            "text": "Очередь потоков JVM"
          },
          {
            "id": "section-7-q78-g",
            "label": "г",
            "text": "Аннотация Spring"
          }
        ],
        "correctOptionId": "section-7-q78-a",
        "explanation": "HashMap хранит пары ключ-значение и использует hashCode/equals ключей.",
        "sourceRefs": [
          "Java Collections Framework"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q79",
        "sectionId": "section-7",
        "order": 79,
        "text": "Что такое Set?",
        "options": [
          {
            "id": "section-7-q79-a",
            "label": "а",
            "text": "Коллекция, не допускающая дубликатов элементов"
          },
          {
            "id": "section-7-q79-b",
            "label": "б",
            "text": "Коллекция пар ключ-значение"
          },
          {
            "id": "section-7-q79-v",
            "label": "в",
            "text": "Область памяти JVM"
          },
          {
            "id": "section-7-q79-g",
            "label": "г",
            "text": "Метод запуска потока"
          }
        ],
        "correctOptionId": "section-7-q79-a",
        "explanation": "контракт Set задает множество уникальных элементов.",
        "sourceRefs": [
          "Java Collections Framework"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q80",
        "sectionId": "section-7",
        "order": 80,
        "text": "Чем HashSet обычно отличается от TreeSet?",
        "options": [
          {
            "id": "section-7-q80-a",
            "label": "а",
            "text": "`HashSet` основан на хешировании, `TreeSet` хранит элементы в отсортированном порядке"
          },
          {
            "id": "section-7-q80-b",
            "label": "б",
            "text": "`HashSet` всегда отсортирован"
          },
          {
            "id": "section-7-q80-v",
            "label": "в",
            "text": "`TreeSet` допускает дубликаты"
          },
          {
            "id": "section-7-q80-g",
            "label": "г",
            "text": "Разницы нет"
          }
        ],
        "correctOptionId": "section-7-q80-a",
        "explanation": "TreeSet реализован на основе дерева и использует порядок сравнения.",
        "sourceRefs": [
          "Java Collections Framework"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q81",
        "sectionId": "section-7",
        "order": 81,
        "text": "Что делает промежуточная операция Stream API map?",
        "options": [
          {
            "id": "section-7-q81-a",
            "label": "а",
            "text": "Преобразует каждый элемент потока"
          },
          {
            "id": "section-7-q81-b",
            "label": "б",
            "text": "Завершает pipeline и возвращает список"
          },
          {
            "id": "section-7-q81-v",
            "label": "в",
            "text": "Всегда удаляет `null`"
          },
          {
            "id": "section-7-q81-g",
            "label": "г",
            "text": "Запускает новый поток JVM"
          }
        ],
        "correctOptionId": "section-7-q81-a",
        "explanation": "map применяет функцию к каждому элементу и возвращает новый stream.",
        "sourceRefs": [
          "общая информация.md",
          "Java Stream API"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q82",
        "sectionId": "section-7",
        "order": 82,
        "text": "Что делает промежуточная операция Stream API filter?",
        "options": [
          {
            "id": "section-7-q82-a",
            "label": "а",
            "text": "Оставляет элементы, удовлетворяющие предикату"
          },
          {
            "id": "section-7-q82-b",
            "label": "б",
            "text": "Сортирует элементы по умолчанию"
          },
          {
            "id": "section-7-q82-v",
            "label": "в",
            "text": "Собирает результат в `List`"
          },
          {
            "id": "section-7-q82-g",
            "label": "г",
            "text": "Закрывает executor"
          }
        ],
        "correctOptionId": "section-7-q82-a",
        "explanation": "filter пропускает только элементы, для которых условие истинно.",
        "sourceRefs": [
          "Java Stream API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q83",
        "sectionId": "section-7",
        "order": 83,
        "text": "Что делает терминальная операция Stream API reduce?",
        "options": [
          {
            "id": "section-7-q83-a",
            "label": "а",
            "text": "Сводит элементы потока к одному результату по заданной операции"
          },
          {
            "id": "section-7-q83-b",
            "label": "б",
            "text": "Всегда возвращает `List`"
          },
          {
            "id": "section-7-q83-v",
            "label": "в",
            "text": "Удаляет поток из JVM"
          },
          {
            "id": "section-7-q83-g",
            "label": "г",
            "text": "Создает JPA-сущность"
          }
        ],
        "correctOptionId": "section-7-q83-a",
        "explanation": "reduce используется для суммирования, перемножения, объединения строк и похожих агрегатов.",
        "sourceRefs": [
          "Java Stream API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q84",
        "sectionId": "section-7",
        "order": 84,
        "text": "Что важно помнить о stream pipeline до терминальной операции?",
        "options": [
          {
            "id": "section-7-q84-a",
            "label": "а",
            "text": "Промежуточные операции ленивы и выполняются при терминальной операции"
          },
          {
            "id": "section-7-q84-b",
            "label": "б",
            "text": "Все операции выполняются сразу при создании stream"
          },
          {
            "id": "section-7-q84-v",
            "label": "в",
            "text": "Stream можно переиспользовать бесконечно"
          },
          {
            "id": "section-7-q84-g",
            "label": "г",
            "text": "Stream всегда изменяет исходную коллекцию"
          }
        ],
        "correctOptionId": "section-7-q84-a",
        "explanation": "Stream API строит pipeline, а выполнение запускают терминальные операции вроде collect, count, forEach.",
        "sourceRefs": [
          "Java Stream API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q85",
        "sectionId": "section-7",
        "order": 85,
        "text": "Чем parallelStream() отличается от обычного stream()?",
        "options": [
          {
            "id": "section-7-q85-a",
            "label": "а",
            "text": "Может выполнять операции параллельно в ForkJoinPool"
          },
          {
            "id": "section-7-q85-b",
            "label": "б",
            "text": "Всегда гарантированно быстрее"
          },
          {
            "id": "section-7-q85-v",
            "label": "в",
            "text": "Работает только с `HashMap`"
          },
          {
            "id": "section-7-q85-g",
            "label": "г",
            "text": "Не поддерживает terminal operations"
          }
        ],
        "correctOptionId": "section-7-q85-a",
        "explanation": "параллельный stream может ускорить CPU-bound задачи, но имеет накладные расходы и требования к безопасности операций.",
        "sourceRefs": [
          "Java Stream API",
          "ForkJoinPool API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q86",
        "sectionId": "section-7",
        "order": 86,
        "text": "Что такое lambda-выражение в Java?",
        "options": [
          {
            "id": "section-7-q86-a",
            "label": "а",
            "text": "Краткая форма реализации функционального интерфейса"
          },
          {
            "id": "section-7-q86-b",
            "label": "б",
            "text": "Способ объявить пакет"
          },
          {
            "id": "section-7-q86-v",
            "label": "в",
            "text": "Тип исключения"
          },
          {
            "id": "section-7-q86-g",
            "label": "г",
            "text": "Метод запуска JVM"
          }
        ],
        "correctOptionId": "section-7-q86-a",
        "explanation": "lambda может быть присвоена переменной функционального интерфейса или передана в метод.",
        "sourceRefs": [
          "общая информация.md",
          "Oracle Java Tutorials"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-7-oracle-java-tutorials"
        ]
      },
      {
        "id": "section-7-q87",
        "sectionId": "section-7",
        "order": 87,
        "text": "Что означает аннотация @FunctionalInterface?",
        "options": [
          {
            "id": "section-7-q87-a",
            "label": "а",
            "text": "Компилятор проверяет, что интерфейс имеет один абстрактный метод"
          },
          {
            "id": "section-7-q87-b",
            "label": "б",
            "text": "Класс становится Spring Bean"
          },
          {
            "id": "section-7-q87-v",
            "label": "в",
            "text": "Метод запускается перед каждым тестом"
          },
          {
            "id": "section-7-q87-g",
            "label": "г",
            "text": "Поле становится volatile"
          }
        ],
        "correctOptionId": "section-7-q87-a",
        "explanation": "аннотация не обязательна, но помогает зафиксировать контракт функционального интерфейса.",
        "sourceRefs": [
          "Java Functional Interfaces"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q88",
        "sectionId": "section-7",
        "order": 88,
        "text": "Какой интерфейс представляет функцию без аргументов, возвращающую значение?",
        "options": [
          {
            "id": "section-7-q88-a",
            "label": "а",
            "text": "`Supplier<T>`"
          },
          {
            "id": "section-7-q88-b",
            "label": "б",
            "text": "`Consumer<T>`"
          },
          {
            "id": "section-7-q88-v",
            "label": "в",
            "text": "`Predicate<T>`"
          },
          {
            "id": "section-7-q88-g",
            "label": "г",
            "text": "`Runnable`"
          }
        ],
        "correctOptionId": "section-7-q88-a",
        "explanation": "Supplier поставляет значение через метод get().",
        "sourceRefs": [
          "Java java.util.function API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q89",
        "sectionId": "section-7",
        "order": 89,
        "text": "Какой интерфейс представляет проверку условия для значения?",
        "options": [
          {
            "id": "section-7-q89-a",
            "label": "а",
            "text": "`Predicate<T>`"
          },
          {
            "id": "section-7-q89-b",
            "label": "б",
            "text": "`Supplier<T>`"
          },
          {
            "id": "section-7-q89-v",
            "label": "в",
            "text": "`Consumer<T>`"
          },
          {
            "id": "section-7-q89-g",
            "label": "г",
            "text": "`Comparator<T>`"
          }
        ],
        "correctOptionId": "section-7-q89-a",
        "explanation": "Predicate возвращает boolean через метод test.",
        "sourceRefs": [
          "Java java.util.function API"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q90",
        "sectionId": "section-7",
        "order": 90,
        "text": "Что такое Spring Bean?",
        "options": [
          {
            "id": "section-7-q90-a",
            "label": "а",
            "text": "Объект, жизненным циклом которого управляет Spring IoC container"
          },
          {
            "id": "section-7-q90-b",
            "label": "б",
            "text": "Любой локальный примитив"
          },
          {
            "id": "section-7-q90-v",
            "label": "в",
            "text": "Любой HTML-файл"
          },
          {
            "id": "section-7-q90-g",
            "label": "г",
            "text": "Любой поток JVM"
          }
        ],
        "correctOptionId": "section-7-q90-a",
        "explanation": "Spring создает, связывает и управляет bean-объектами приложения.",
        "sourceRefs": [
          "общая информация.md",
          "Spring Framework documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q91",
        "sectionId": "section-7",
        "order": 91,
        "text": "Что такое dependency injection?",
        "options": [
          {
            "id": "section-7-q91-a",
            "label": "а",
            "text": "Передача зависимостей объекту извне вместо создания их внутри класса"
          },
          {
            "id": "section-7-q91-b",
            "label": "б",
            "text": "Ручное удаление объектов из heap"
          },
          {
            "id": "section-7-q91-v",
            "label": "в",
            "text": "Деление целых чисел"
          },
          {
            "id": "section-7-q91-g",
            "label": "г",
            "text": "Выброс checked exception"
          }
        ],
        "correctOptionId": "section-7-q91-a",
        "explanation": "DI снижает связанность классов и упрощает тестирование.",
        "sourceRefs": [
          "Spring Framework documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q92",
        "sectionId": "section-7",
        "order": 92,
        "text": "Какая аннотация Spring обычно помечает REST-контроллер?",
        "options": [
          {
            "id": "section-7-q92-a",
            "label": "а",
            "text": "`@RestController`"
          },
          {
            "id": "section-7-q92-b",
            "label": "б",
            "text": "`@Entity`"
          },
          {
            "id": "section-7-q92-v",
            "label": "в",
            "text": "`@BeforeEach`"
          },
          {
            "id": "section-7-q92-g",
            "label": "г",
            "text": "`@FunctionalInterface`"
          }
        ],
        "correctOptionId": "section-7-q92-a",
        "explanation": "@RestController объединяет @Controller и @ResponseBody, возвращая данные в HTTP response body.",
        "sourceRefs": [
          "Spring Web documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q93",
        "sectionId": "section-7",
        "order": 93,
        "text": "Какая аннотация Spring сопоставляет метод с HTTP GET-запросом?",
        "options": [
          {
            "id": "section-7-q93-a",
            "label": "а",
            "text": "`@GetMapping`"
          },
          {
            "id": "section-7-q93-b",
            "label": "б",
            "text": "`@PostConstruct`"
          },
          {
            "id": "section-7-q93-v",
            "label": "в",
            "text": "`@Autowired`"
          },
          {
            "id": "section-7-q93-g",
            "label": "г",
            "text": "`@Table`"
          }
        ],
        "correctOptionId": "section-7-q93-a",
        "explanation": "@GetMapping является сокращением для request mapping с методом GET.",
        "sourceRefs": [
          "Spring Web documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q94",
        "sectionId": "section-7",
        "order": 94,
        "text": "Какая аннотация Spring сопоставляет метод с HTTP POST-запросом?",
        "options": [
          {
            "id": "section-7-q94-a",
            "label": "а",
            "text": "`@PostMapping`"
          },
          {
            "id": "section-7-q94-b",
            "label": "б",
            "text": "`@GetMapping`"
          },
          {
            "id": "section-7-q94-v",
            "label": "в",
            "text": "`@Id`"
          },
          {
            "id": "section-7-q94-g",
            "label": "г",
            "text": "`@BeforeEach`"
          }
        ],
        "correctOptionId": "section-7-q94-a",
        "explanation": "@PostMapping обрабатывает POST-запросы к заданному пути.",
        "sourceRefs": [
          "Spring Web documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q95",
        "sectionId": "section-7",
        "order": 95,
        "text": "Что означает аннотация JPA @Entity?",
        "options": [
          {
            "id": "section-7-q95-a",
            "label": "а",
            "text": "Класс является JPA-сущностью, сопоставляемой с таблицей базы данных"
          },
          {
            "id": "section-7-q95-b",
            "label": "б",
            "text": "Метод является тестом"
          },
          {
            "id": "section-7-q95-v",
            "label": "в",
            "text": "Поле является volatile"
          },
          {
            "id": "section-7-q95-g",
            "label": "г",
            "text": "Класс является функциональным интерфейсом"
          }
        ],
        "correctOptionId": "section-7-q95-a",
        "explanation": "JPA управляет объектами-сущностями и сохраняет их состояние в БД.",
        "sourceRefs": [
          "общая информация.md",
          "Jakarta Persistence documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q96",
        "sectionId": "section-7",
        "order": 96,
        "text": "Что означает аннотация JPA @Id?",
        "options": [
          {
            "id": "section-7-q96-a",
            "label": "а",
            "text": "Поле является первичным идентификатором сущности"
          },
          {
            "id": "section-7-q96-b",
            "label": "б",
            "text": "Метод запускается перед тестом"
          },
          {
            "id": "section-7-q96-v",
            "label": "в",
            "text": "Класс является контроллером"
          },
          {
            "id": "section-7-q96-g",
            "label": "г",
            "text": "Поле является временным стеком"
          }
        ],
        "correctOptionId": "section-7-q96-a",
        "explanation": "JPA требует идентификатор для различения сущностей.",
        "sourceRefs": [
          "Jakarta Persistence documentation"
        ],
        "materialIds": []
      },
      {
        "id": "section-7-q97",
        "sectionId": "section-7",
        "order": 97,
        "text": "Какая стратегия JPA часто использует автоинкрементный столбец базы данных?",
        "options": [
          {
            "id": "section-7-q97-a",
            "label": "а",
            "text": "`GenerationType.IDENTITY`"
          },
          {
            "id": "section-7-q97-b",
            "label": "б",
            "text": "`GenerationType.TABLE`"
          },
          {
            "id": "section-7-q97-v",
            "label": "в",
            "text": "`GenerationType.AUTO` как единственный возможный вариант"
          },
          {
            "id": "section-7-q97-g",
            "label": "г",
            "text": "`GenerationType.NONE`"
          }
        ],
        "correctOptionId": "section-7-q97-a",
        "explanation": "IDENTITY полагается на механизм генерации идентификаторов самой базы данных.",
        "sourceRefs": [
          "общая информация.md",
          "Jakarta Persistence documentation"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md"
        ]
      },
      {
        "id": "section-7-q98",
        "sectionId": "section-7",
        "order": 98,
        "text": "Что означает аннотация JUnit 5 @Test?",
        "options": [
          {
            "id": "section-7-q98-a",
            "label": "а",
            "text": "Метод является тестовым методом"
          },
          {
            "id": "section-7-q98-b",
            "label": "б",
            "text": "Метод является Spring Bean"
          },
          {
            "id": "section-7-q98-v",
            "label": "в",
            "text": "Метод является JPA-сущностью"
          },
          {
            "id": "section-7-q98-g",
            "label": "г",
            "text": "Метод запускает новый поток"
          }
        ],
        "correctOptionId": "section-7-q98-a",
        "explanation": "JUnit выполняет методы, помеченные @Test, как тесты.",
        "sourceRefs": [
          "общая информация.md",
          "JUnit 5 User Guide"
        ],
        "materialIds": [
          "mat-shared-obschaya-informaciya-md",
          "mat-section-7-junit-5-user-guide"
        ]
      },
      {
        "id": "section-7-q99",
        "sectionId": "section-7",
        "order": 99,
        "text": "Какой assertion проверяет равенство ожидаемого и фактического значения в JUnit?",
        "options": [
          {
            "id": "section-7-q99-a",
            "label": "а",
            "text": "`assertEquals(expected, actual)`"
          },
          {
            "id": "section-7-q99-b",
            "label": "б",
            "text": "`assertRun(expected, actual)`"
          },
          {
            "id": "section-7-q99-v",
            "label": "в",
            "text": "`assertThread(expected, actual)`"
          },
          {
            "id": "section-7-q99-g",
            "label": "г",
            "text": "`assertEntity(expected, actual)`"
          }
        ],
        "correctOptionId": "section-7-q99-a",
        "explanation": "assertEquals сравнивает ожидаемое и фактическое значения и проваливает тест при несовпадении.",
        "sourceRefs": [
          "JUnit 5 User Guide"
        ],
        "materialIds": [
          "mat-section-7-junit-5-user-guide"
        ]
      },
      {
        "id": "section-7-q100",
        "sectionId": "section-7",
        "order": 100,
        "text": "Что лучше проверить в потокобезопасной версии LRU Cache?",
        "options": [
          {
            "id": "section-7-q100-a",
            "label": "а",
            "text": "Корректность `get`/`put`, вытеснение старых записей и отсутствие ошибок при конкурентном доступе"
          },
          {
            "id": "section-7-q100-b",
            "label": "б",
            "text": "Только имя класса"
          },
          {
            "id": "section-7-q100-v",
            "label": "в",
            "text": "Только наличие пустого конструктора"
          },
          {
            "id": "section-7-q100-g",
            "label": "г",
            "text": "Только вывод в консоль"
          }
        ],
        "correctOptionId": "section-7-q100-a",
        "explanation": "concurrent cache должен сохранять логику LRU и не ломаться при одновременных операциях нескольких потоков.",
        "sourceRefs": [
          "ОМ_ГЭК (3).docx",
          "Java concurrency API",
          "JUnit 5 User Guide"
        ],
        "materialIds": [
          "mat-shared-om-gek-3-docx",
          "mat-section-7-junit-5-user-guide"
        ]
      }
    ]
  }
]
