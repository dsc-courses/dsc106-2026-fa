---
layout: home
title: 🏠 Home
nav_exclude: false
nav_order: 1
---

# {{ site.tagline }}

{: .mb-2 }
{{ site.description }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for s in instructors %}
<div class="staffer">
  {% if s.photo %}<img class="staffer-image" src="{{ s.photo | relative_url }}" alt="">{% endif %}
  <div>
    <h3 class="staffer-name">
      {% if s.website %}<a href="{{ s.website }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}
      {% if s.pronouns %}<div class="staffer-pronouns"><b>{{ s.pronouns }}</b></div>{% endif %}
    </h3>
    {% if s.lecture %}<p><b>Lecture(s)</b>: {{ s.lecture }}</p>{% endif %}
    {% if s.oh %}<p><b>Office Hours</b>: {{ s.oh }}</p>{% endif %}
  </div>
</div>
{% endfor %}

<!-- [Jump to the current week](#week-9-code-sklearn-code-pipelines-generalization-and-cross-validation){: .btn } -->

<!-- [Recordings](https://podcast.ucsd.edu/){: .btn .btn-blue } -->

{% for module in site.modules %}
{{ module }}
{% endfor %}
