# Safe sharing

**Dated October 27, 2026**

The golden rule of AI privacy: **if you wouldn't want it read aloud in a public room, don't paste it into an AI chat.**

This section explains what is generally safe to share, what to avoid, and habits to keep you and the people around you protected.

## Generally okay to share (with care)

- Public information already published (news articles, public websites)
- General questions about topics you know publicly ("How do I bake sourdough?", "What's the weather like in Seattle?")
- Your own non-sensitive opinions and ideas
- Fiction, jokes, creative writing that isn't about real people

Even for these, remember: once it's in an AI chat, it's stored somewhere (see [What gets stored](01-what-gets-stored.md)).

## Never share (or share only with extreme caution)

| Never share | Why |
|-------------|-----|
| Passwords, PINs, API keys, secret tokens | Anyone with access to the chat history could use them |
| Social Security numbers, passport numbers, ID numbers | Identity theft risk |
| Credit card numbers, bank account numbers | Financial fraud risk |
| Full names, addresses, phone numbers of other people | Privacy violation for them |
| Medical diagnoses, test results, medications about real patients | Health data is highly sensitive (and may be legally protected) |
| Client or customer lists | Business confidentiality |
| Internal company documents, source code, unreleased product plans | Trade secrets and NDAs |
| Anything under a nondisclosure agreement | Legal breach risk |
| Photos of people without their consent | Privacy and consent issues |

> **Health-data caution:** AI apps are not HIPAA-compliant unless your employer has specifically signed a business associate agreement with the AI provider. Do not paste patient information into a personal AI account. See [Workplace and health-data cautions](05-workplace-health-cautions.md).

## Habits that keep you safe

1. **Remove names and details before asking.** Instead of "My patient John Doe at 123 Main Street has diabetes," try "Can you explain general diabetes management tips?" (And still be careful — see the health-data section.)
2. **Use temporary chats.** ChatGPT's Temporary chat and similar features don't save history. Use them for anything semi-sensitive.
3. **Don't log in with work accounts to personal AI apps.** Keep work data in work-approved tools only.
4. **Assume reviewers may read your chat.** Many AI companies have humans spot-check conversations for safety. Write like a reviewer is watching.
5. **Delete chats you no longer need.** Less stored data means less exposure if something goes wrong.
6. **Use local AI for sensitive stuff.** Models running on your own computer (Ollama, LM Studio) don't send your data anywhere.

## Sharing with coworkers or teams

If your workplace has an enterprise AI plan (ChatGPT Team/Enterprise, Claude Team, Microsoft 365 Copilot):

- Your admin may be able to see usage logs or chat history.
- Training opt-outs are often managed at the organization level.
- Ask your IT team what is and isn't allowed before pasting work content.

Never assume a work AI account is private from your employer.

## If you accidentally share something sensitive

1. Delete the chat right away (see [Deleting your history](03-deleting-history.md)).
2. Change any passwords or keys that were exposed.
3. If it was work or customer data, tell your IT or security team — quickly. It's better to report a mistake than to hide it.
4. If it was patient health data, follow your organization's incident reporting process.

---

**Next:** [Workplace and health-data cautions](05-workplace-health-cautions.md) →

*Copyright (c) 2026 Asdale Dynamics, LLC. Licensed under the MIT License.*
