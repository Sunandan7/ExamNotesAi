export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an exam preparation system.

⚠️ VERY IMPORTANT:
- Output MUST be valid JSON
- Your response will be parsed using JSON.parse()
- INVALID JSON will cause system failure
- Use ONLY double quotes "
- NO comments, NO trailing commas
- Escape line breaks using \\n
- Do NOT use emojis inside text values

TASK:
Convert the given topic into exam-focused notes.

INPUT:
Topic: ${topic}
Class Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "General"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

GLOBAL CONTENT RULES:
- Use clear, simple, exam-oriented language
- Notes MUST be Markdown formatted
- Headings and bullet points and a little explanation only

REVISION MODE RULES (CRITICAL):
- If REVISION MODE is ON:
  - Notes must be VERY SHORT
  - Only bullet points
  - One-line answers only
  - Definitions, formulas, keywords
  - No paragraphs
  - No explanations
  - Content must feel like:
    - last-day revision
    - 5-minute exam cheat sheet
  - revisionPoints MUST summarize ALL important facts

- If REVISION MODE is OFF:
  - Notes must be DETAILED but exam-focused
  - Each topic should include:
    - definition
    - medium length explanation
    - examples (if applicable)
  - Paragraph length: max 80–100 lines
  - No storytelling, no extra theory
  - Answer all the important questions related to the topic
  - Focus on what is likely to be asked in the exam
  - revisionPoints can be empty or include additional tips
  - Provide answer for the possible questions which are suggested at the end of the notes

IMPORTANCE RULES:
- Divide sub-topics into THREE categories:
  - ⭐ Very Important Topics
  - ⭐⭐ Important Topics
  - ⭐⭐⭐ Frequently Asked Topics
- All three categories MUST be present
- Base importance on exam frequency and weightage


QUESTION RULE:
- Each question MUST include its answer
- Answers must be clear and exam-oriented
- Long question answers should include explanation or steps
- Keep answers concise but complete

QUESTION FORMAT RULE (STRICT):

Each question must follow EXACT structure:

Q: <question>
A:
- point 1
- point 2
- point 3

FORMAT RULES:
- Answer MUST start on new line after A:
- ALWAYS use bullet points (-)
- NEVER write answer on same line as question
- Use \\n for line breaks in JSON
- Short answers → 1–3 bullet points
- Long answers → 3–6 bullet points
- Diagram answers → explain steps or structure using bullet points




DIAGRAM RULES:
- If INCLUDE DIAGRAM is YES:
  - diagram.data MUST be a SINGLE STRING
  - Valid Mermaid syntax only
  - Must start with: graph TD
  - Wrap EVERY node label in square brackets [ ]
  - Do NOT use special characters inside labels
- If INCLUDE DIAGRAM is NO:
  - diagram.data MUST be ""

CHART RULES (RECHARTS):
- If INCLUDE CHARTS is YES:
  - charts array MUST NOT be empty
  - Generate at least ONE chart
  - Choose chart based on topic type:
    - THEORY topic → bar or pie (importance / weightage)
    - PROCESS topic → bar or line (steps / stages)
  - Use numeric values ONLY
  - Labels must be short and exam-oriented
- If INCLUDE CHARTS is NO:
  - charts MUST be []

CHART TYPES ALLOWED:
- bar
- line
- pie

CHART OBJECT FORMAT:
{
  "type": "bar | line | pie",
  "title": "string",
  "data": [
    { "name": "string", "value": 10 }
  ]
}

STRICT JSON FORMAT (DO NOT CHANGE):

{
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },
  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",
  "notes": "string",
  "revisionPoints": [],
  {
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },

  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",

  "notes": "string",

  "revisionPoints": [],

  STRICT JSON FORMAT (DO NOT CHANGE):

{
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },

  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",

  "notes": "string",

  "revisionPoints": [],

  {
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },

  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",

  "notes": "string",

  "revisionPoints": [],

  "questions": {

    "short": [],
    "long": [],
    "diagram": ""
  },

  "answers": {

    "short": [],
    "long": [],
    "diagram": []
  },

  "diagram": {
    "type": "flowchart | graph | process",
    "data": ""
  },

  "charts": []
}

RETURN ONLY VALID JSON.
`;
};
