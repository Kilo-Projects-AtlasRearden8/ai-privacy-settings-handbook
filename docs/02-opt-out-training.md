# Opting out of training

**Dated October 27, 2026**

Many AI companies use customer conversations to train and improve their models. If you'd rather your chats not be used that way, most apps offer a setting to opt out. This section walks you through it, app by app.

> **Opting out of training is not the same as deleting your history.** It stops future chats from being used to train models (in most cases). It does not erase chats you already had. For that, see [Deleting your history](03-deleting-history.md).

## ChatGPT (OpenAI)

On the web:

1. Open ChatGPT and click your profile picture (bottom left).
2. Choose **Settings** → **Data controls**.
3. Turn off **"Improve the model for everyone"**.

   When this is off, your conversations won't be used to train OpenAI's models.

On mobile (iOS/Android):

1. Open the ChatGPT app and tap your profile picture → **Settings**.
2. Tap **Data controls**.
3. Turn off **"Improve the model for everyone"**.

Temporary chats: start a **Temporary chat** from the model picker at the top of the chat. Temporary chats aren't used to train models and don't appear in your history.

Official help: [OpenAI - How ChatGPT uses your data](https://help.openai.com/en/articles/7724482-how-chatgpt-uses-your-data)

## Claude (Anthropic)

1. Log in to Claude at claude.ai.
2. Click your profile picture (bottom left) → **Settings**.
3. Under **Data & privacy**, turn off **"Train on my content"** (or uncheck the option to allow Anthropic to use your content for training).

Free users: Anthropic may still use some content for safety reviews even with training opt-out enabled. Paid (Pro/Team/Enterprise) plans generally offer stronger data protections.

Official help: [Anthropic - Claude data handling](https://support.anthropic.com/en/articles/7833239-claude-data-handling)

## Gemini (Google)

1. Go to gemini.ai and open the **Activity** panel (clock icon) or go to your Google Account.
2. Choose **Gemini Apps Activity**.
3. Turn **Gemini Apps Activity off**, or choose **Auto-delete** to remove activity after 3, 18, or 36 months.

With Gemini Apps Activity off, new conversations aren't saved to your Google Account or used to train Gemini in the same way. Note that some Google Workspace (school/work) accounts are managed by your organization and may not let you change this.

Official help: [Google - Gemini Apps Activity](https://support.google.com/gemini/answer/14380083)

## Microsoft Copilot

1. Sign in at copilot.microsoft.com with your Microsoft account.
2. Go to your **Privacy dashboard** (account.microsoft.com/privacy).
3. Under **Copilot history** or **Copilot activity history**, turn off saving and choose what to delete.

For Microsoft 365 Copilot (work/school): your organization controls whether data is used to train models. In most business plans, Microsoft does not train foundation models on your tenant's data — but check with your IT team to confirm your organization's settings.

Official help: [Microsoft - Copilot privacy](https://support.microsoft.com/copilot)

## Perplexity

1. Log in at perplexity.ai.
2. Click your profile → **Account settings**.
3. Under **Data & privacy**, turn off **"AI data retention"** (or similar opt-out for training use).

With the opt-out on, your searches and threads are not used to train Perplexity's models.

Official help: [Perplexity - Privacy & data retention](https://www.perplexity.ai/settings/privacy)

## Meta AI

Meta AI is built into Facebook, Instagram, Messenger, and WhatsApp.

1. In the app where you use Meta AI, open the chat with Meta AI.
2. Look for **Settings** or the information (i) icon in the Meta AI chat.
3. Find the option to opt out of having your messages used to train AI (may appear as "Train AI models" or similar).

Note: Meta may still use public posts (not private messages) to train its AI models. There is no opt-out for public content you've already shared publicly.

Official help: [Meta - Generative AI privacy](https://www.facebook.com/help/genai-privacy)

## Grok (xAI)

1. Log in to X (twitter.com) or use the Grok interface.
2. Go to **Settings** → **Privacy** or **Data sharing**.
3. Turn off the option to allow your posts and interactions to be used to train Grok.

xAI's training opt-out settings are tied to your X account settings.

Official help: [xAI - Privacy policy](https://x.ai/privacy)

## Local AI (Ollama, LM Studio, and similar)

If you run models on your own computer:

- Nothing is sent to a company's servers unless you explicitly connect to an online model.
- Your chats stay on your device.
- There is no central training opt-out because there is no central collection — but also no central deletion tool; you delete files yourself.

## Quick reference table

| App | Opt-out setting | Stops training on future chats? |
|-----|-----------------|---------------------------------|
| ChatGPT | Settings → Data controls → "Improve the model for everyone" | Yes |
| Claude | Settings → Data & privacy → "Train on my content" | Yes (mostly) |
| Gemini | Gemini Apps Activity → turn off / auto-delete | Yes |
| Copilot | Microsoft Privacy dashboard → Copilot history | Yes (personal accounts) |
| Perplexity | Account settings → Data & privacy → AI data retention | Yes |
| Meta AI | App settings → Meta AI chat → training opt-out | Partial (public content not covered) |
| Grok | X Settings → Privacy → data sharing | Yes |
| Local AI | N/A — runs on your device | N/A |

---

**Next:** [Deleting your history](03-deleting-history.md) →

*Copyright (c) 2026 Asdale Dynamics, LLC. Licensed under the MIT License.*
