/*
Toggle the color of the sprite between two presets
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwapColors : MonoBehaviour
{
    [SerializeField] private Color[] _colors;

    private int _colorIndex = 0;

    private SpriteRenderer renderer2D;
    // Start is called before the first frame update
    void Start()
    {
        renderer2D = GetComponent<SpriteRenderer>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            _colorIndex++;
            renderer2D.color = _colors[_colorIndex % _colors.Length];
        }
    }
}
