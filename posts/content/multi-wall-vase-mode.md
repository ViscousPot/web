---
title: Vase Mode Printing for Strength AND Speed?
date: 2025-10-10
socialImage: images/posts/multi-wall-vase-mode.png
---

![Now also in video format!](https://www.youtube.com/watch?v=LPkVUoDtPgY)

I've been in the 3D printing hobby for a few years now and **I've always assumed vase mode prints were limited to fast, aesthetic-only prints**; requiring tons of work to make them even vaguely durable. However, **since learning and perfecting just these 2 basic techniques**, I now can't stop using vase mode everywhere! **It's no longer only mesmerizing and quick, but it's also surprisingly strong for a wide range of applications.**

Here, I'm going to walk you through the process of quickly creating both double-walled vase mode parts as well as an even stronger ribbed variant. I'll be using Onshape as the CAD software for reference, but you can apply these techniques using any software you prefer!

---

## Creating the Base Shape

To get started with this technique, it's important to focus on designs that would already work well in vase mode. First, we need to define the shape, just like we would if we were designing for vase mode. For this example, I'm going to use a simple pot-shaped container as my base design.

**I also recommend setting up a variable for your slicer's "Line Width", which will make it much easier to tweak things later on.**

![[images/multi-wall-vase-mode/Still 2025-09-30 181710_1.6.2.png]]

## Double Walled Vase Mode

Assuming you have your base part defined, and your Line Width variable setup, you can do the following to turn it into a **double walled vase mode print**. This is the first of the two techniques.

### Creating a shell

1. Select the `Shell` tool (or equivalent) from the toolbar

![[images/multi-wall-vase-mode/New Project(60).png]]

2. Select the face that Vase Mode would otherwise remove to be shelled. This is most often the top face of the part.
3. Set the shell dimension to (Line Width x 2)
4. And run the shell operation

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h24m46s746.png]]

### Cutting the slot

1. Next, start a sketch on the bottom surface inside the part (I recommend reading the next few steps first as they will context to why you're doing certain things)
2. Draw a rectangle centered with the part along one edge and extending out past the walls of the container. The rectangle should intersect exactly once with the wall of the part
3. The dimension of the side of the rectangle parallel or tangent to the side it intersects should be 0.1mm. This will be interpreted as a cut by the slicer but will, in reality, be close enough that the filament creates a strong bond along it

![[images/multi-wall-vase-mode/New Project(62).png]]

4. Now `Extrude` that rectangle so that there is a clean cut from the base of the part to the top of the wall in just one place in the wall.

**This should leave a shelled part with a solid base and a wall with a split of 0.1mm running down it**

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h25m30s699.png]]

### Slicing & printing

Once you've exported this part and dropped it into your slicer, just hit vase mode and you should see in the preview that **it does two walls for each layer all the way up**. The 0.1mm gap will be interpreted as a cut by the slicer but will, in reality, be close enough that the filament creates a strong bond along it.

![[images/multi-wall-vase-mode/Timeline 1_01_10_57_23.jpg]]

## Ribbed Vase Mode

Assuming you have your base part defined, and your Line Width variable setup, you can do the following to turn it into a **ribbed vase mode print**. This is the second of the two techniques.

### Creating a copy

1. First, before anything else, create a copy of the part. This can be done by selecting the `Transform` tool, selecting the part and choosing `Copy in place` from the dropdown before accepting.![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h26m07s331.png]]

### Creating a shell of the original

1. Then temporarily hide the copy and work on the original for the next few steps
2. Select the `Shell` tool (or equivalent) from the toolbar

![[images/multi-wall-vase-mode/New Project(60).png]]

3. Select the face that Vase Mode would otherwise remove to be shelled. This is most often the top face of the part.
4. Set the shell dimension to (Line Width x 2)
5. And run the shell operation

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h26m34s964.png]]

### Creating a shell of the copy

1. Now temporarily hide the (now shelled) original and work on the copy for the next few steps
2. Select the `Shell` tool (or equivalent) from the toolbar
3. Select the face that Vase Mode would otherwise remove to be shelled. This is most often the top face of the part.
4. Set the shell dimension to the final wall width, whatever you would like for that to be
5. And run the shell operation

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h26m46s977.png]]

### Creating a slot in the original

1. Now again, temporarily hide the copy and work on the shelled original for the next few steps
2. Next, start a sketch on the bottom surface inside the part (I recommend reading the next few steps first as they will provide context for why you're doing certain things)
3. Draw a rectangle centered with the part along one edge and extending out past the walls of the container. The rectangle should intersect exactly once with the wall of the part
4. The dimension of the side of the rectangle parallel or tangent to the side it intersects should be 0.1mm.

![[images/multi-wall-vase-mode/New Project(62).png]]

5. Now `Extrude` that rectangle so that there is a clean cut from the base of the part to the top of the wall in just one place in the wall.

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h27m21s296 1.png]]

6. Just as some quick setup, before continuing, create a sketch on the Front or Side Plane and, on that sketch, draw a straight line from the center of the base going up. The length of this line doesn't matter, we just need it as an Axis guide.

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h56m13s868.png]]

### Creating the slots in the copy

1. Once that's done, once more, hide the shelled and cut original and work on the shelled copy for the next few steps
2. On the copy, again `Extrude` that rectangle (not the line we just drew) so that there is a clean cut from the base of the part to the top of the wall in just one place in the wall.

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h27m31s253.png]]

3. From there, select the `Circular pattern` tool

![[images/multi-wall-vase-mode/New Project(60)(1).png]]

and switch to `Feature pattern`

![[images/multi-wall-vase-mode/New Project(63).png]]

4. Now select the cut we just made as the feature and the line we drew as the Axis. You will have to turn on `Reapply features` if this errors for you initially. 5. Lastly for this, adjust your `Instance count` until you're happy with the number of ribs that will be added. Each cut will become a rib.

![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h28m04s063.png]]

### Combining the final part

1. This will leave you with a thin shelled part with one cut and a thick shelled part with as many cuts as you selected. The final step is just to Boolean these together!

![[images/multi-wall-vase-mode/New Project(64).png]]

**This should leave a shelled part with a solid base and a wall with a split of 0.1mm running down it, as well as multiple splits on the inside-only of 0.1mm too.**
![[images/multi-wall-vase-mode/vlcsnap-2025-09-30-18h28m43s867.png]]

### Slicing & printing

Once you've exported this part and dropped it into your slicer, just hit vase mode and you should see in the preview that **it does two walls with ribs in one loop, for each layer, all the way up**. The 0.1mm gaps will be interpreted as cuts by the slicer but will, in reality, be close enough that the filament creates strong bonds along it.

![[images/multi-wall-vase-mode/Timeline 1_01_28_26_10.jpg]]

## Conclusion

I hope you found these techniques useful and **please do like and share to tell the algorithms you want to see more like this**! Also, don’t forget to follow or subscribe for more updates!

You can also join my [Patreon](https://www.patreon.com/cw/ViscousPotential) for free to access the original download files for the models.

**The Patreon post linked includes some models** I made by remixing amazing existing designs. **Feel free to print them out and test their strength!** I especially recommend the egg!

|                                                                         |                                                                                             |
| :---------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|  ![[images/multi-wall-vase-mode/vlcsnap-2025-10-01-21h47m37s298.png]]   |       Eggs: <br> https://www.printables.com/model/1430350-egg-multi-walled-vase-mode        |
| ![[images/multi-wall-vase-mode/vlcsnap-2025-10-01-21h47m37s298(1).png]] |      Funnel: <br>https://www.printables.com/model/1430352-funnel-double-wall-vase-mode      |
| ![[images/multi-wall-vase-mode/vlcsnap-2025-10-01-21h47m37s298(2).png]] | Toy Rocket: <br>https://www.printables.com/model/1430364-toy-rocket-ribbed-double-vase-mode |
