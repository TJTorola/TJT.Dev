---
title: Emergence
---

Feels appropriate to write my first post on **emergence**[^1]. That which
arises, perhaps unexpectedly, from a system. It explains complexity in the face
of determinism. It's a substitute for intellectual design in many cases. Instead
of life being "created" it emerges from physical and chemical processes. It's
fascinating to me.

## Work

I experience this emergent complexity in my job regularly. I am a web developer,
the most interesting part of my job is in systems management. Writing code is
trivial most of the time, what is far more interesting is how those mundane
facets of the system reflect an interact with one another creating whole new
experiences. More often than not this is experienced as bugs, but often jokingly
we say "it's a feature, not a bug!". And often that is closer to the truth than
we know. I recall a simple UI bug from early on in my work where it was possible
to hold down "enter" to rapidly move through a form in our application. There
were significant reasons why this should not made available, but still our users
got used to this faster experience and in turn some of our team started to
support it as well. When we went to actually resolve the issue there was a lot
of pushback and this bug turned out to in fact be a feature that we needed to
consider before removing.

And then there are unintentional results of intentional improvements. Consider
performance improvements. On the surface we just want things to go faster, and
most of the time that is good. What is interesting to me is how that can often
change the functionality of an app in unexpected ways. When things go faster,
instead of just doing the same thing more quickly, often the app ends up being
used in wholly new ways that no one anticipated.

## Art

This isn't a blog about work though. I started this because I am interested in
exploring things outside of the typical React/Node/JS sphere. What I am more
interested in is exploring artistic applications of programming. I think in
relation to emergence specifically programming is a perfect medium for
exploration. I recently came across a book called **Nature of Code**[^2]. It has
the simple premise of "to take a look at something that naturally occurs in our
physical world, then determine how we can write code to simulate that
occurrence"[^3]. Seems like a great starting point. It uses processing and
object oriented programming. As I am inclined towards functional programming and
experienced in JS, I will be starting out with **p5.js**[^4] and functional
paradigms.

The biggest goal though is to explore emergence. Because I am so fascinated by
this phenomenon that I believe is surrounding us everywhere, I would like to
explore how that can be invoked and illustrated with art and programming. I plan
to use these tools to do that and display them on this website.

## This site

And so this site now exists. It is a domain and goal of mine for quite some time
to create this space and now I finally have. I should mention I took some cues
from Fabien Sanglard[^5] in style. It is built using **11ty**[^6] without too
much remorse. I referenced the **eleventy-base-blog**[^7] theme to start. Though
I'm likely to need to add some more significant build systems for different
projects as I go[^8]. Also I used gruvbox as my color scheme.

So here it is, now I have place and meaning for this site and I am excited to be
moving forward.

[^1]:
    In philosophy, systems theory, science, and art, emergence occurs when an
    entity is observed to have properties its parts do not have on their own,
    properties or behaviors that emerge only when the parts interact in a wider
    whole. https://en.wikipedia.org/wiki/Emergence

[^2]: https://natureofcode.com/ by Daniel Shiffman
[^3]: https://natureofcode.com/book/preface/
[^4]: Essentially just processing in javascript https://p5js.org/
[^5]:
    https://fabiensanglard.net/, specifically his "All you need is HTML" post
    was useful.

[^6]: https://www.11ty.dev/
[^7]: https://github.com/11ty/eleventy-base-blog
[^8]:
    I am likely to build React projects, and potentially Rust and WASM overtime.
    At the very least I will shortly need to compile p5.js scripts.
